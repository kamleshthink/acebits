import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Users, 
  Award, 
  Star, 
  Linkedin, 
  Mail, 
  Building,
  GraduationCap,
  Globe,
  Target,
  Heart,
  TrendingUp
} from "lucide-react";
import { useHistory } from "react-router-dom";

const Team = () => {
  const history = useHistory();
  
  const coreTeam = [
    {
      name: "Prince Michael",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",

      email: "president@acebitsindri.com",
      linkedin: "https://linkedin.com/in/prince-michael",
      color: "from-yellow-500 to-orange-500",
      achievements: ["Led 20+ events", "400+ members", "Industry partnerships"]
    },
    {
      name: "Prashant Malviya",
      role: "Faculty Incharge",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",

      email: "faculty@acebitsindri.com",
      linkedin: "https://linkedin.com/in/prashant-malviya",
      color: "from-blue-500 to-purple-500",
      achievements: ["5+ years experience", "Expert guidance", "Research focus"]
    },
    {
      name: "Rahul Kumar",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",

      email: "vicepresident@acebitsindri.com",
      linkedin: "https://linkedin.com/in/rahul-kumar",
      color: "from-green-500 to-emerald-500",
      achievements: ["Event coordination", "Member management", "Technical expertise"]
    }
  ];

  const teamStats = [
    { icon: Users, value: "60+", label: "Core Members", color: "text-blue-600" },
    { icon: Award, value: "25+", label: "Awards Won", color: "text-green-600" },
    { icon: Star, value: "5+", label: "Years Experience", color: "text-purple-600" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", color: "text-orange-600" }
  ];

  const departments = [
    {
      name: "Technical Department",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      description: "Handles all technical workshops, seminars, and competitions",
      members: "15 members"
    },
    {
      name: "Event Management",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description: "Organizes and manages all events and activities",
      members: "12 members"
    },
    {
      name: "Public Relations",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      description: "Manages external communications and partnerships",
      members: "10 members"
    },
    {
      name: "Academic Affairs",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
      description: "Focuses on academic development and learning",
      members: "8 members"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Our Amazing
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Meet the dedicated individuals who make ACE BITS the premier civil engineering 
              student organization at BIT Sindri.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${0.2 * (index + 1)}s`}}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Team */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Core Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leaders who guide and inspire the organization towards excellence
            </p>
          </div>

          <Row className="g-8">
            {coreTeam.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <div 
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{animationDelay: `${0.3 * (index + 1)}s`}}
                >
                  {/* Member Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${member.color} text-white rounded-full text-sm font-medium mb-4`}>
                      {member.role}
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center text-slate-600 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-4 h-4 mr-3" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>

                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized teams working together to achieve our mission
            </p>
          </div>

          <Row className="g-8">
            {departments.map((dept, index) => (
              <Col key={index} lg={6} md={6}>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{animationDelay: `${0.2 * (index + 1)}s`}}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                      <p className="text-gray-300 text-sm">{dept.members}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {dept.description}
                  </p>
                  
                  <button 
                    onClick={() => history.push('/about')}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Join Team CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold">Join Our Team</h2>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to be part of something extraordinary? Join our team and contribute to 
                the future of civil engineering education and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => history.push('/contact')}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => history.push('/about')}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team; 