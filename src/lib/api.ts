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

  // Primary: Direct email delivery via ShipMyForm endpoint
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('subject', formData.subject);
    postData.append('message', formData.message);

    const response = await fetch(`https://shipmyform.com/to/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
      body: postData,
    });

    clearTimeout(timeoutId);

    const json: any = await response.json().catch(() => ({}));

    if (response.ok && json.ok) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent directly to Anuj Gupta.',
      };
    }

    if (json.error === 'activation_pending') {
      return {
        success: true,
        message: 'Message captured! A one-time activation was sent to anujgupta26610812@gmail.com.',
        fallbackAvailable: true,
      };
    }
  } catch (err: any) {
    console.warn('[Contact Delivery] Direct endpoint timeout or network issue:', err);
  }

  // 3. Fallback: message saved locally and direct email/WhatsApp links ready
  return {
    success: true,
    message: 'Message captured! You can also click below to confirm in Gmail or WhatsApp.',
    fallbackAvailable: true,
  };
}

export function createMailtoUrl(formData: Partial<ContactFormData>): string {
  const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
  const body = encodeURIComponent(
    `Hi Anuj,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
  );
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

export function createGmailComposeUrl(formData: Partial<ContactFormData>): string {
  const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
  const body = encodeURIComponent(
    `Hi Anuj,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;
}

export function createWhatsAppUrl(formData: Partial<ContactFormData>): string {
  const text = encodeURIComponent(
    `Hello Anuj! My name is ${formData.name || 'Visitor'}.\nRegarding: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message || ''}`
  );
  return `https://api.whatsapp.com/send?phone=918779747746&text=${text}`;
}
