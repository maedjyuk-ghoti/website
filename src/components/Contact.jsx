import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Bell, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Booking Inquiry',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Booking Inquiry', message: '' });
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="py-24 bg-celtic-dark text-celtic-cream relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-celtic-emerald/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-celtic-gold/10 text-celtic-gold text-xs font-semibold uppercase tracking-widest mb-3 border border-celtic-gold/20">
            <Mail size={14} />
            <span>Connect & Book</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-celtic-cream mb-4">
            Get in <span className="text-celtic-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-celtic-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-celtic-sand/80 font-sans leading-relaxed">
            Whether you are looking to book Celtic Causeway for concerts, festivals, private events, or weddings, we would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & Newsletter */}
          <div className="lg:col-span-5 space-y-8">

            {/* Contact Details Card */}
            <div className="bg-celtic-green/40 border border-celtic-gold/20 rounded-2xl p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-celtic-cream mb-6 flex items-center gap-2">
                <MessageSquare className="text-celtic-gold" size={24} />
                Booking & Inquiries
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-celtic-dark border border-celtic-gold/30 rounded-xl text-celtic-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-celtic-gold block mb-1">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info@celticcauseway.com"
                      className="text-lg font-medium text-celtic-cream hover:text-celtic-gold transition-colors underline decoration-celtic-gold/50"
                    >
                      info@celticcauseway.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-celtic-dark border border-celtic-gold/30 rounded-xl text-celtic-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-celtic-gold block mb-1">
                      Based In
                    </span>
                    <span className="text-base text-celtic-sand">
                      Available for regional, national & international performances.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-gradient-to-br from-celtic-green/60 to-celtic-dark border border-celtic-gold/30 rounded-2xl p-8 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 text-celtic-gold text-xs font-bold uppercase tracking-wider mb-2">
                <Bell size={16} />
                <span>Stay Tuned</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-celtic-cream mb-2">
                Join Our Newsletter
              </h3>
              <p className="text-sm text-celtic-sand/80 font-sans mb-6 leading-relaxed">
                Subscribe to get early notifications on tour announcements, new video releases, and album updates.
              </p>

              {newsletterSubmitted ? (
                <div className="p-4 bg-celtic-emerald/40 border border-celtic-gold/40 rounded-xl flex items-center gap-3 text-celtic-cream text-sm">
                  <CheckCircle size={20} className="text-celtic-gold shrink-0" />
                  <span>Thank you for subscribing! We look forward to staying connected.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-celtic-dark/80 border border-celtic-gold/30 text-celtic-cream placeholder-celtic-sand/50 text-sm focus:outline-none focus:border-celtic-gold transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-celtic-gold hover:bg-celtic-goldHover text-celtic-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-celtic-green/30 border border-celtic-gold/30 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-celtic-cream mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-celtic-sand/80 mb-6">
              Fill out the form below and Ben or Rebekah will respond promptly.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center bg-celtic-dark/80 border border-celtic-gold/40 rounded-xl p-8">
                <div className="w-16 h-16 bg-celtic-gold/20 text-celtic-gold rounded-full flex items-center justify-center mx-auto mb-4 border border-celtic-gold">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-celtic-cream mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-celtic-sand text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out to Celtic Causeway. We have received your inquiry and will reply to your email shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-celtic-gold text-celtic-dark font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-celtic-goldHover transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-celtic-gold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fiona Murray"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-celtic-dark/80 border border-celtic-gold/30 text-celtic-cream placeholder-celtic-sand/40 text-sm focus:outline-none focus:border-celtic-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-celtic-gold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. fiona@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-celtic-dark/80 border border-celtic-gold/30 text-celtic-cream placeholder-celtic-sand/40 text-sm focus:outline-none focus:border-celtic-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-celtic-gold mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-celtic-dark/80 border border-celtic-gold/30 text-celtic-cream text-sm focus:outline-none focus:border-celtic-gold transition-colors"
                  >
                    <option value="Booking Inquiry">Concert / Event Booking Inquiry</option>
                    <option value="Wedding / Private Event">Wedding / Private Function</option>
                    <option value="Media & Press">Press / Festival Inquiries</option>
                    <option value="General Hello">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-celtic-gold mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your event, preferred date, venue, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-celtic-dark/80 border border-celtic-gold/30 text-celtic-cream placeholder-celtic-sand/40 text-sm focus:outline-none focus:border-celtic-gold transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-celtic-gold hover:bg-celtic-goldHover text-celtic-dark font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
