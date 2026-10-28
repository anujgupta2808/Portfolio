import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, MessageCircle, Mail, RotateCcw } from 'lucide-react';
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

    try {
      const response = await sendContactMessage(formData);

      if (response.success) {
        setStatus('success');
        setLastSubmitted(submittedSnapshot);
        setFeedbackMessage(
          response.message || 'Thank you! Your message has been sent to Anuj Gupta.'
        );

        // Confetti celebration
        try {
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#FF1744', '#EF4444', '#FFFFFF'],
          });
        } catch (_) {}

        // Reset form input
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(response.error || 'Failed to submit form. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage('An unexpected error occurred. Please try again or reach out on WhatsApp.');
    }
  };

  const handleResetForm = () => {
    setStatus('idle');
    setFeedbackMessage('');
    setLastSubmitted(null);
  };

  return (
    <div className="space-y-6">
      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-left space-y-4 shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-3 text-emerald-400">
            <CheckCircle className="w-6 h-6 shrink-0" />
            <h4 className="font-display font-bold text-lg text-white">Message Sent Successfully!</h4>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">
            {feedbackMessage}
          </p>

          {/* Quick Direct Actions */}
          {lastSubmitted && (
            <div className="pt-2 border-t border-emerald-900/50 flex flex-wrap gap-3">
              <a
                href={createGmailComposeUrl(lastSubmitted)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-neon" />
                <span>Open in Gmail</span>
              </a>

              <a
                href={createWhatsAppUrl(lastSubmitted)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Follow Up on WhatsApp</span>
              </a>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleResetForm}
              className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send another message</span>
            </button>
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
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
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
