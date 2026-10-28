import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your-project') && !supabaseKey.includes('your-service-role-key')) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('[SUPABASE] Connected to Supabase client successfully');
  } catch (err) {
    console.warn('[SUPABASE] Could not initialize Supabase, fallback store active:', err);
  }
} else {
  console.log('[SUPABASE] Credentials not provided or default. Running with resilient local submission store.');
}

// In-memory + local JSON fallback store
const fallbackSubmissions: ContactSubmission[] = [];
const localBackupPath = path.resolve(process.cwd(), 'submissions_backup.json');

export async function saveContactSubmission(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> {
  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    ...data,
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { data: inserted, error } = await supabase
        .from('contact_submissions')
        .insert([submission])
        .select()
        .single();

      if (error) {
        console.error('[SUPABASE ERROR] Insert failed, saving to local store:', error.message);
        fallbackSubmissions.push(submission);
        persistLocalBackup(submission);
        return submission;
      }

      console.log('[SUPABASE] Contact saved to database successfully:', inserted.id);
      return inserted as ContactSubmission;
    } catch (e: any) {
      console.error('[SUPABASE EXCEPTION] Fallback saving:', e.message);
      fallbackSubmissions.push(submission);
      persistLocalBackup(submission);
      return submission;
    }
  }

  // Fallback mode
  fallbackSubmissions.push(submission);
  persistLocalBackup(submission);
  console.log('[LOCAL STORE] Saved submission from:', submission.name, submission.email);
  return submission;
}

function persistLocalBackup(submission: ContactSubmission) {
  try {
    let existing: ContactSubmission[] = [];
    if (fs.existsSync(localBackupPath)) {
      const content = fs.readFileSync(localBackupPath, 'utf8');
      existing = JSON.parse(content || '[]');
    }
    existing.push(submission);
    fs.writeFileSync(localBackupPath, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('[LOCAL BACKUP ERROR]', err);
  }
}
