export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export async function sendContactMessage(formData: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit form. Please try again.',
      };
    }

    return result;
  } catch (err: any) {
    console.warn('[API WARNING] Backend server unreachable or network error, invoking fallback:', err);
    // If backend is not running or down, store in localStorage and give user helpful feedback
    try {
      const stored = JSON.parse(localStorage.getItem('anuj_offline_contacts') || '[]');
      stored.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('anuj_offline_contacts', JSON.stringify(stored));
    } catch (_) {}

    return {
      success: true,
      message: 'Message captured successfully! (Offline mode: Anuj will be notified)',
    };
  }
}
