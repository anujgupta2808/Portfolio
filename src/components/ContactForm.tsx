import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../lib/api';
import confetti from 'canvas-confetti';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });

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

    try {
      const response = await sendContactMessage(formData);

      if (response.success) {
        setStatus('success');
        setFeedbackMessage(
          response.message || 'Thank you! Your message has been received by Anuj.'
        );
        // Confetti celebration
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF1744', '#E50924', '#FFFFFF'],
          });
        } catch (_) {}

        // Reset form
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
      setFeedbackMessage('An unexpected error occurred. Please try again or email directly.');
    }
  };

  return (
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
          rows={5}
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

      {/* Feedback Alert */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-start gap-3 text-emerald-400 text-sm">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Submit Button */}
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
    </form>
  );
};
