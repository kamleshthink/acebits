import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import {
  UserPlus,
  Mail,
  Phone,
  Building,
  Hash,
  GraduationCap,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    registrationNumber: '',
    branch: 'Civil Engineering',
    college: 'BIT Sindri',
    year: '1st Year',
    address: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const branches = [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics and Communication Engineering',
    'Computer Science and Engineering',
    'Chemical Engineering',
    'Mining Engineering',
    'Production Engineering'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

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
      const API_URL = process.env.REACT_APP_BACKEND_API || 'http://localhost:5001/api';
      const response = await axios.post(`${API_URL}/users/register`, formData, {
        timeout: 60000, // 60 seconds timeout for cold starts
      });

      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          registrationNumber: '',
          branch: 'Civil Engineering',
          college: 'BIT Sindri',
          year: '1st Year',
          address: ''
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Registration error:', err);
      console.error('Error response:', err.response?.data);

      // Handle validation errors array
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(', '));
      } else {
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <UserPlus className="w-4 h-4 mr-2" />
              Join ACE BITS
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Community
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Become a member of ACE BITS and be part of the premier civil engineering student organization at BIT Sindri
            </p>
          </div>
        </Container>
      </section>

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mx-4 mt-8 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-green-800">Registration Successful!</h3>
              <p className="text-green-700 mt-1">Welcome to the ACE BITS Community. We'll get in touch with you soon!</p>
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
              <h3 className="text-xl font-bold text-red-800">Registration Failed</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <section className="py-24">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-3">Registration Form</h2>
                  <p className="text-slate-600 text-lg">Fill in your details to join ACE BITS Community</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Row>
                    {/* Full Name */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <UserPlus className="w-4 h-4 inline mr-2" />
                          Full Name <span className="text-red-500">*</span>
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

                    {/* Email */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </Col>

                    {/* Phone */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="10-digit phone number"
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                    </Col>

                    {/* Registration Number */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Hash className="w-4 h-4 inline mr-2" />
                          Registration Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., 20XX/CE/XXXX"
                          required
                        />
                      </div>
                    </Col>

                    {/* Branch */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Building className="w-4 h-4 inline mr-2" />
                          Branch <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          {branches.map((branch, index) => (
                            <option key={index} value={branch}>{branch}</option>
                          ))}
                        </select>
                      </div>
                    </Col>

                    {/* Year */}
                    <Col md={6}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <GraduationCap className="w-4 h-4 inline mr-2" />
                          Year of Study <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </Col>

                    {/* College */}
                    <Col md={12}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Building className="w-4 h-4 inline mr-2" />
                          College Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="College name"
                          required
                        />
                      </div>
                    </Col>

                    {/* Address */}
                    <Col md={12}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          Address (Optional)
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Your current address"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing... (This may take 30-60 seconds)
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Join ACE BITS Community
                      </>
                    )}
                  </button>
                </form>

                {/* Info Section */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Why Join ACE BITS?</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to exclusive workshops, seminars, and technical events</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Networking opportunities with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Skill development and career guidance programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Be part of the leading civil engineering student community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default JoinCommunity;
