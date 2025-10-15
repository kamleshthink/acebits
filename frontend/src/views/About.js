import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Heart,
  Building,
  GraduationCap,
  Globe,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Calendar
} from "lucide-react";

const About = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const animatedWords = ["construct", "communicate", "coordinate"];

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      const currentWordText = animatedWords[currentWord];
      if (currentText.length < currentWordText.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWordText.slice(0, currentText.length + 1));
        }, 100); // Type speed: 100ms per character
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Wait 1 second before deleting
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Delete speed: 50ms per character
      } else {
        setCurrentWord((prev) => (prev + 1) % animatedWords.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentWord, animatedWords]);

  const stats = [
    { icon: Users, value: "400+", label: "General Members", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Award, value: "60+", label: "Core Members", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: Calendar, value: "100+", label: "Events Organized", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: TrendingUp, value: "5+", label: "Years of Excellence", color: "text-orange-500", bg: "bg-orange-500/10" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new ideas and creative solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "Working together to achieve common goals",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining ethical standards and transparency",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    "Premier student organization in civil engineering",
    "Industry-academia collaboration programs",
    "Hands-on learning workshops and seminars",
    "National level technical competitions",
    "Alumni network and mentorship programs",
    "Research and innovation projects"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <Star className="w-4 h-4 mr-2" />
              About Our Organization
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              About
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Association of Civil Engineers
              </span>
            </h1>

            {/* Animated Subheading */}
            <div className="text-center mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                We{" "}
                <span className="inline-block min-w-[200px] text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-black">
                    {currentText}
                  </span>
                  <span className={`${isTyping ? 'animate-pulse' : ''} text-yellow-400`}>|</span>
                </span>
              </h3>
              <p className="text-lg text-gray-300 font-medium">
                construct • coordinate • communicate
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.6s'}}>
              Building the future through innovation, collaboration, and excellence in civil engineering
            </p>
          </div>
        </Container>
      </div>

      {/* Mission Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              To foster a community of civil engineering enthusiasts, promote innovation, 
              and prepare students for successful careers in the construction industry.
            </p>
          </div>

          <Row className="g-8">
            <Col lg={6}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full animate-slide-up hover:shadow-2xl transition-all duration-300" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                    <p className="text-slate-600">Leading the future</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To be the leading student organization in civil engineering, 
                  recognized for excellence in education, innovation, and community service.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full animate-slide-up hover:shadow-2xl transition-all duration-300" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                    <p className="text-slate-600">Empowering students</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Providing hands-on learning experiences, workshops, and seminars 
                  to enhance technical skills and industry knowledge.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact & Growth
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and continuous growth
            </p>
          </div>

          <Row className="g-6">
            {stats.map((stat, index) => (
              <Col key={index} md={6} lg={3}>
                <div 
                  className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{animationDelay: `${0.2 * (index + 1)}s`}}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>

          <Row className="g-8">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={3}>
                <div 
                  className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{animationDelay: `${0.2 * (index + 1)}s`}}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Our Achievements
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Since our establishment in 2017, we have achieved remarkable milestones 
                  and continue to grow as a leading student organization.
                </p>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Civil Engineering Excellence</h3>
                    <p className="text-lg mb-6 text-gray-300">
                      Civil Engineering has served mankind since time immemorial. It has been at 
                      play since human civilization learnt to build homes, bridges and roads.
                    </p>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Building the Future</div>
                        <div className="text-gray-300">One project at a time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* History Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A brief history of our organization and its growth over the years
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Story</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Association of Civil Engineers, B.I.T. Sindri established in 2017 is an 
                  assortment of individuals who aim to acquaint you with the latest trends in 
                  the Civil Engineering field.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  It is an initiative taken by keen Civil Engineering students of B.I.T. Sindri 
                  to broaden their horizon of their knowledge of the aforementioned field. 
                  Our patrons are Dr. D. K. Singh, Director, Bit Sindri and H.O.D of 
                  Civil engineering department, B.I.T. Sindri.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Globe className="w-5 h-5 mr-2" />
                  Established in 2017
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Key Milestones</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">2017 - Organization Founded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">2018 - First Major Event</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700">2019 - Industry Partnerships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-700">2020 - Digital Transformation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-700">2021-2024 - Continued Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
