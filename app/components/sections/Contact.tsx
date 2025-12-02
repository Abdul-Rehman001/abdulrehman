"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import { Mail, Phone, MessageCircle, Send, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { themeColors } = useTheme();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3,
  });

  // Letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const smoothEase = [0.25, 0.1, 0.25, 1];

  // Contact cards data
  const contactMethods = [
    {
      name: "Email",
      value: "abdulrehman7619931243@gmail.com",
      href: "mailto:abdulrehman7619931243@gmail.com",
      icon: <Mail size={24} />,
    },
    {
      name: "WhatsApp",
      value: "+92 7619931243",
      href: "https://wa.me/927619931243",
      icon: <MessageCircle size={24} />,
    },
    {
      name: "Phone",
      value: "+92 7619931243",
      href: "tel:+927619931243",
      icon: <Phone size={24} />,
    },
  ];

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:abdulrehman7619931243@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-20 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden"
        >
          <motion.h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-center md:text-left mb-4">
            {"Get in touch".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                className="inline-block"
                style={{ color: themeColors.foreground }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: smoothEase },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left"
            style={{ color: `${themeColors.foreground}80` }}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Contact Me
          </motion.p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Say Hello! */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ color: themeColors.foreground }}
            >
              Say Hello!
            </motion.h2>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="p-6 rounded-lg border transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: `${themeColors.backgroundAlt}60`,
                      borderColor: `${themeColors.foreground}15`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${themeColors.accent}40`;
                      e.currentTarget.style.backgroundColor = `${themeColors.backgroundAlt}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${themeColors.foreground}15`;
                      e.currentTarget.style.backgroundColor = `${themeColors.backgroundAlt}60`;
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className="mt-1"
                          style={{ color: themeColors.accent }}
                        >
                          {method.icon}
                        </div>
                        <div>
                          <h3
                            className="font-bold text-lg mb-1"
                            style={{ color: themeColors.foreground }}
                          >
                            {method.name}
                          </h3>
                          <p
                            className="text-sm sm:text-base"
                            style={{ color: `${themeColors.foreground}80` }}
                          >
                            {method.value}
                          </p>
                        </div>
                      </div>
                      <motion.span
                        className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: themeColors.accent }}
                      >
                        Write
                        <ArrowRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Connect with me Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ color: themeColors.foreground }}
            >
              Connect with me
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 px-2 text-xs font-medium pointer-events-none z-10"
                  style={{
                    color: `${themeColors.foreground}60`,
                    backgroundColor: themeColors.backgroundAlt,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Insert your Name"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: `${themeColors.foreground}20`,
                    color: themeColors.foreground,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${themeColors.foreground}20`;
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 px-2 text-xs font-medium pointer-events-none z-10"
                  style={{
                    color: `${themeColors.foreground}60`,
                    backgroundColor: themeColors.backgroundAlt,
                  }}
                >
                  Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Insert your Email"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: `${themeColors.foreground}20`,
                    color: themeColors.foreground,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${themeColors.foreground}20`;
                  }}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 px-2 text-xs font-medium pointer-events-none z-10"
                  style={{
                    color: `${themeColors.foreground}60`,
                    backgroundColor: themeColors.backgroundAlt,
                  }}
                >
                  Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write your message"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none resize-y"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: `${themeColors.foreground}20`,
                    color: themeColors.foreground,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${themeColors.foreground}20`;
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: themeColors.foreground,
                  color: themeColors.background,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

