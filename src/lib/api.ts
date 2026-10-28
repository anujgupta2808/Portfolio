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
  fallbackAvailable?: boolean;
}

const RECIPIENT_EMAIL = 'anujgupta26610812@gmail.com';

export async function sendContactMessage(formData: ContactFormData): Promise<ApiResponse> {
  // Always store in localStorage as an offline backup so no message is ever lost
  try {
    const stored = JSON.parse(localStorage.getItem('anuj_offline_contacts') || '[]');
    stored.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('anuj_offline_contacts', JSON.stringify(stored));
  } catch (_) {}

  // If local server is available, save a backup copy asynchronously without blocking
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).catch(() => {});
  }

  // Also silently post to public endpoint in background
  try {
    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('subject', formData.subject);
    postData.append('message', formData.message);

    fetch(`https://shipmyform.com/to/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: postData,
    }).catch(() => {});
  } catch (_) {}

  return {
    success: true,
    message: 'Your message has been prepared for Anuj Gupta!',
  };
}

export function createMailtoUrl(formData: Partial<ContactFormData>): string {
  const subject = encodeURIComponent(
    formData.subject ? `[Portfolio Contact] ${formData.subject}` : 'Portfolio Inquiry'
  );
  const body = encodeURIComponent(
    `Hi Anuj,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n\n---\nSent from Portfolio Contact Form`
  );
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

export function createGmailComposeUrl(formData: Partial<ContactFormData>): string {
  const subject = encodeURIComponent(
    formData.subject ? `[Portfolio Contact] ${formData.subject}` : 'Portfolio Inquiry'
  );
  const body = encodeURIComponent(
    `Hi Anuj,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n\n---\nSent from Portfolio Contact Form`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;
}

export function createWhatsAppUrl(formData: Partial<ContactFormData>): string {
  const text = encodeURIComponent(
    `Hello Anuj! My name is ${formData.name || 'Visitor'}.\nRegarding: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message || ''}`
  );
  return `https://api.whatsapp.com/send?phone=918779747746&text=${text}`;
}
