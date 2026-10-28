import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { profileData } from '../data/profile';
import { SocialLinks } from './SocialLinks';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-neon/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          label="CONTACT"
          titleWhite="GET IN"
          titleRed="TOUCH"
          subtitle="Have an idea, a project, or an opportunity to collaborate? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-8">
          
          {/* Left Column: Direct Info Cards (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-2xl bg-bg-card border border-border-subtle p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="font-display font-extrabold text-xl text-white mb-2">
                Let's discuss something <span className="text-brand-neon">great</span> together.
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                I'm always open to discussing web development projects, creative tech ideas, internships, or collaboration opportunities.
              </p>

              {/* Contact methods */}
              <div className="space-y-5">
                <motion.a
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-bg-primary/90 border border-border-subtle hover:border-brand-neon/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-text-muted font-bold">Email Address</div>
                    <div className="text-sm font-medium text-white group-hover:text-brand-neon transition-colors truncate max-w-[240px]">
                      {profileData.contact.email}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-bg-primary/90 border border-border-subtle hover:border-brand-neon/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-text-muted font-bold">Phone / WhatsApp</div>
                    <div className="text-sm font-medium text-white group-hover:text-brand-neon transition-colors">
                      {profileData.contact.phone}
                    </div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-bg-primary/90 border border-border-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-text-muted font-bold">College &amp; Location</div>
                    <div className="text-sm font-medium text-white">
                      {profileData.contact.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-bg-primary/90 border border-border-subtle">
                  <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-text-muted font-bold">Status</div>
                    <div className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for projects &amp; collaboration
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons row */}
              <div className="mt-8 pt-6 border-t border-border-subtle/50">
                <div className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                  Connect on Socials
                </div>
                <SocialLinks />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-2xl bg-bg-card border border-border-subtle p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
