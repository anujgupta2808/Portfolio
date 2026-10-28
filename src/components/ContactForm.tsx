import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle, MessageCircle, Mail, RotateCcw } from 'lucide-react';
import { sendContactMessage, createGmailComposeUrl, createWhatsAppUrl, createMailtoUrl } from '../lib/api';
import confetti from 'canvas-confetti';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });

  const [lastSubmitted, setLastSubmitted] = useState<typeof formData | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      newErrors.subject = 'Please provide a subject line.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please provide a message (at least 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setFeedbackMessage('');
    const submittedSnapshot = { ...formData };
    setLastSubmitted(submittedSnapshot);

    // 1. Generate Gmail compose URL
    const gmailUrl = createGmailComposeUrl(submittedSnapshot);

    // 2. Open Gmail directly in new tab (triggered by user click event)
    let openedWindow: Window | null = null;
    try {
      openedWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } catch (_) {}

    // 3. Save locally and post in background
    await sendContactMessage(formData);

    // 4. Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF1744', '#EF4444', '#FFFFFF'],
      });
    } catch (_) {}

    // 5. Update UI state
    setStatus('success');
    setFeedbackMessage(
      openedWindow
        ? 'A new tab has opened with your message pre-filled in Gmail. Simply click the blue "Send" button in that tab to deliver it directly to Anuj!'
        : 'Your message has been pre-drafted! Click the "Open in Gmail" button below to send it directly to Anuj.'
    );

    // Reset inputs
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      _gotcha: '',
    });
  };

  const handleResetForm = () => {
    setStatus('idle');
    setFeedbackMessage('');
    setLastSubmitted(null);
  };

  return (
    <div className="space-y-6">
      {status === 'success' ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-emerald-500/50 text-left space-y-5 shadow-[0_10px_40px_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-brand-neon to-emerald-500" />

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/40">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Gmail Compose Ready!</h4>
              <p className="text-text-secondary text-sm leading-relaxed mt-1">
                {feedbackMessage}
              </p>
            </div>
          </div>

          {lastSubmitted && (
            <div className="p-4 rounded-xl bg-bg-primary/90 border border-border-subtle text-xs space-y-2">
              <div className="flex items-center justify-between text-text-muted">
                <span>To: <strong className="text-white">anujgupta26610812@gmail.com</strong></span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Pre-filled</span>
              </div>
              <p className="text-text-secondary"><strong>Subject:</strong> {lastSubmitted.subject}</p>
              <p className="text-text-muted line-clamp-2"><strong>Message:</strong> {lastSubmitted.message}</p>
            </div>
          )}

          {/* Action Buttons */}
          {lastSubmitted && (
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={createGmailComposeUrl(lastSubmitted)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-red text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(255,23,68,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Gmail (Send Now)</span>
              </a>

              <a
                href={createWhatsAppUrl(lastSubmitted)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send on WhatsApp</span>
              </a>

              <a
                href={createMailtoUrl(lastSubmitted)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-text-secondary hover:text-white text-xs font-medium transition-colors"
              >
                <span>Other Email App</span>
              </a>
            </div>
          )}

          <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between">
            <button
              onClick={handleResetForm}
              className="inline-flex items-center gap-2 text-xs font-medium text-text-muted hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Draft another message</span>
            </button>

            <span className="text-[11px] text-text-muted">Direct delivery guaranteed via Gmail</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot Spam Protection */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">
                Full Name <span className="text-brand-neon">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                className={`w-full px-4 py-3 rounded-xl bg-bg-primary/90 border text-white text-sm placeholder-text-muted focus:outline-none transition-all duration-300 ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-border-subtle focus:border-brand-neon focus:ring-1 focus:ring-brand-neon'
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">
                Email Address <span className="text-brand-neon">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                className={`w-full px-4 py-3 rounded-xl bg-bg-primary/90 border text-white text-sm placeholder-text-muted focus:outline-none transition-all duration-300 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-border-subtle focus:border-brand-neon focus:ring-1 focus:ring-brand-neon'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">
              Subject <span className="text-brand-neon">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry / Collaboration"
              required
              aria-required="true"
              aria-invalid={!!errors.subject}
              className={`w-full px-4 py-3 rounded-xl bg-bg-primary/90 border text-white text-sm placeholder-text-muted focus:outline-none transition-all duration-300 ${
                errors.subject
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-border-subtle focus:border-brand-neon focus:ring-1 focus:ring-brand-neon'
              }`}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-text-secondary font-semibold mb-2">
              Message <span className="text-brand-neon">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              className={`w-full px-4 py-3 rounded-xl bg-bg-primary/90 border text-white text-sm placeholder-text-muted focus:outline-none transition-all duration-300 resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-border-subtle focus:border-brand-neon focus:ring-1 focus:ring-brand-neon'
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Error Alert */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex flex-col gap-2 text-red-400 text-sm">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={createGmailComposeUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-red-900/50 hover:bg-red-800 text-white text-xs font-semibold transition-colors"
                >
                  Send via Gmail
                </a>
                <a
                  href={createWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-900/50 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold transition-colors"
                >
                  Send on WhatsApp
                </a>
                <a
                  href={createMailtoUrl(formData)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Email App
                </a>
              </div>
            </div>
          )}

          {/* Submit Button & Direct Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-red text-white font-display font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(255,23,68,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send via Gmail</span>
                  <Mail className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Direct Quick Shortcuts */}
            <div className="flex items-center gap-3 text-xs text-text-secondary">
              <span className="hidden sm:inline">Or direct:</span>
              <a
                href={createGmailComposeUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                title="Send via Gmail"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle hover:border-brand-neon hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-neon" />
                <span>Gmail</span>
              </a>
              <a
                href={createWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
