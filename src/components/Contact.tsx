import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Digital Marketing',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please type a message.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Digital Marketing',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-[#f1f5f9] border-t border-white/[0.06] scroll-mt-12 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[12s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FFA52F] tracking-widest uppercase font-display bg-[#FFA52F]/10 border border-[#FFA52F]/35 px-4 py-2 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight animate-pulse-slow">
            Let's Scale Your Business
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Contact our office in Addis Ababa today. Have questions or ready to launch a project? Drop us a prompt line below!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Block - Agency contact information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-black text-2xl text-white tracking-tight uppercase">
                Contact Information
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Connect directly with our division managers. We typically respond to new business inquiries within 12-24 business hours. Let's make something amazing.
              </p>

              {/* Contact Icons lists */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] shadow-lg hover:border-[#D1008F]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#D1008F]/10 text-[#FF7BC1] flex items-center justify-center shrink-0">
                    <LucideIcon name="Mail" size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Email Us</p>
                    <a href="mailto:info@siltawi.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#FF7BC1] transition-colors">
                      info@siltawi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] shadow-lg hover:border-[#D1008F]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#D1008F]/10 text-[#FF7BC1] flex items-center justify-center shrink-0">
                    <LucideIcon name="Phone" size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Call Our Office</p>
                    <a href="tel:+251900000000" className="text-xs sm:text-sm font-bold text-white hover:text-[#FF7BC1] transition-colors">
                      +251 900 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] shadow-lg hover:border-[#D1008F]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#D1008F]/10 text-[#FF7BC1] flex items-center justify-center shrink-0">
                    <LucideIcon name="MapPin" size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section - Required Feature with dark filter to align with design style */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl aspect-[16/10] bg-slate-950 relative shimmer-border">
              <iframe
                title="Siltawi Digital Marketing - Addis Ababa, Ethiopia Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126116.88334466986!2d38.705886673623886!3d8.995000557457782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1718800000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-none opacity-80 invert-[90%] hue-rotate-180 brightness-[45%] contrast-[130%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Block - Interactive and Validated Glass Form Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl relative flex flex-col justify-center shimmer-border">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h4 className="font-display font-black text-xl text-white tracking-tight uppercase mb-2">
                    Send Us a Message
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="name" className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`px-4 py-3 rounded-xl bg-white/[0.02] border text-xs sm:text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#D1008F] focus:border-[#D1008F] transition-all duration-350 ${
                          errors.name ? 'border-[#D1008F]/70 bg-[#D1008F]/5' : 'border-white/[0.08]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] font-semibold text-[#FF7BC1]">{errors.name}</p>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="email" className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`px-4 py-3 rounded-xl bg-white/[0.02] border text-xs sm:text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#D1008F] focus:border-[#D1008F] transition-all duration-350 ${
                          errors.email ? 'border-[#D1008F]/70 bg-[#D1008F]/5' : 'border-white/[0.08]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] font-semibold text-[#FF7BC1]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone input */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="phone" className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Phone (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251 900 000 050"
                        className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs sm:text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#D1008F] focus:border-[#D1008F] transition-all duration-350"
                      />
                    </div>

                    {/* Interest Dropdown */}
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="interest" className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-slate-950 border border-white/[0.08] text-xs sm:text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#D1008F] focus:border-[#D1008F] transition-all duration-350"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding & Design">Branding & Design</option>
                        <option value="Content Creation">Content Creation</option>
                        <option value="SEO Services">SEO Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body input */}
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="message" className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or company goal..."
                      className={`px-4 py-3 rounded-xl bg-white/[0.02] border text-xs sm:text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#D1008F] focus:border-[#D1008F] transition-all duration-350 resize-none ${
                        errors.message ? 'border-[#D1008F]/70 bg-[#D1008F]/5' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] font-semibold text-[#FF7BC1]">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button with Custom Gradient Glow */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#D1008F] to-[#F02AA6] hover:from-[#F02AA6] hover:to-[#FFA52F] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(209,0,143,0.35)] hover:shadow-[0_0_25px_rgba(255,165,47,0.55)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer focus:outline-none active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Submit Brief
                          <LucideIcon name="ArrowRight" size={13} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center space-y-4 py-8"
                >
                  <div className="w-16 h-16 bg-[#D1008F]/10 border border-[#D1008F]/30 rounded-full flex items-center justify-center text-[#FF7BC1] shadow-[0_0_15px_#D1008F]">
                    <LucideIcon name="CheckCircle" size={32} />
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight uppercase">
                    Thank You! Message Received
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed font-light">
                    Our digital agency consulting crew based in Addis Ababa has received your prompt message. We will review it and follow up within 12-24 business hours.
                  </p>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-[#D1008F] to-[#F02AA6] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all cursor-pointer focus:outline-none"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
