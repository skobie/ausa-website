import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form-success">
          <div className="contact-form-success-icon">
            <CheckCircle size={36} color="#4CAF50" />
          </div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you within 1-2 business days.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-header">
        <h3>Send Us a Message</h3>
        <p>We'd love to hear from you. Fill out the form and we'll be in touch.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Your full name"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Email <span className="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="you@company.com"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-company">
            Company / Utility
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
            placeholder="Your organization"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(555) 000-0000"
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="contact-subject">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder="What's this about?"
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="contact-message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Tell us how we can help..."
          />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <div className="form-submit">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
