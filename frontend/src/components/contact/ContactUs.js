import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  Star,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "B.I.T. Sindri, Dhanbad, Jharkhand",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "acebitsindri@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 6203112525 (President)",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const teamInfo = [
    {
      role: "President",
      name: "Prince Michael",
      phone: "+91 6203112525",
      color: "from-yellow-500 to-orange-500"
    },
    {
      role: "Faculty Incharge",
      name: "Prashant Malviya",
      phone: "+91 7505198506",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mx-4 mt-8 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-green-800">Message Sent Successfully!</h3>
              <p className="text-green-700 mt-1">Thank you for contacting us. We'll get back to you soon!</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mx-4 mt-8 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center">
            <AlertCircle className="w-8 h-8 text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-red-800">Failed to Send Message</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Contact
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                ACE BITS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Have questions? Want to join our community? Get in touch with us and we'll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${0.2 * (index + 1)}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <p className="text-slate-600">{info.details}</p>
              </div>
            ))}
          </div>

          <Row className="g-8">
            {/* Contact Form */}
            <Col lg={8}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-slide-up">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Send us a Message</h2>
                    <p className="text-slate-600">We'd love to hear from you</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Row>
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </Col>
                  </Row>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </Col>

            {/* Team Information */}
            <Col lg={4}>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Our Team</h3>
                      <p className="text-slate-600">Get in touch with us</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {teamInfo.map((member, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${member.color} rounded-lg flex items-center justify-center mr-3`}>
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{member.role}</div>
                            <div className="text-sm text-slate-600">{member.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <Phone className="w-4 h-4 mr-2" />
                          <span className="text-sm">{member.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <div className="mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Join Our Community</h3>
                      <p className="text-blue-100">Be part of something great</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 mb-6">
                    Ready to join the premier civil engineering student organization? 
                    Connect with us and start your journey towards excellence.
                  </p>
                  
                  <a href="/join-community" className="block">
                    <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                      Join ACE BITS
                    </button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-300">Visit us at BIT Sindri, Dhanbad</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301365!2d86.4876!3d23.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6b7b7b7b7b7b7%3A0x39f6b7b7b7b7b7b7!2sBIT+Sindri!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactForm;
