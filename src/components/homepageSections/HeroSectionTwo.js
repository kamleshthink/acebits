import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Users, 
  Award, 
  BookOpen, 
  Building, 
  GraduationCap, 
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Calendar,
  Target,
  Heart,
  Download,
  FileText
} from "lucide-react";
import { useHistory } from "react-router-dom";

const HeroSectionTwo = () => {
  const history = useHistory();
  
  const handleMagazineDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/ACE_Magazine.pdf';
    link.download = 'ACE_Magazine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "Hands-on learning experiences with industry experts",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Industry Connect",
      description: "Bridge the gap between academia and industry",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "400+ active members and growing network",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "5+ years of leadership and innovation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const achievements = [
    "Premier student organization in civil engineering",
    "Industry-academia collaboration programs",
    "National level technical competitions",
    "Hands-on learning workshops and seminars",
    "Alumni network and mentorship programs",
    "Research and innovation projects"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Container className="relative z-10">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col lg={6} className="mb-12 lg:mb-0">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-sm font-medium mb-6 text-white">
                <Star className="w-4 h-4 mr-2" />
                Why Choose ACE BITS
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Leading the Future of
                <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Civil Engineering
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Join the premier student organization that's shaping the future of civil engineering 
                through innovation, collaboration, and hands-on learning experiences.
              </p>

              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative p-4 sm:p-6 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Subtle Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Lightweight Icon Container - Centered */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-sm border border-gray-200">
                      <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Subtle Hover Border Effect */}
                    <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => history.push('/join-community')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full text-base sm:text-lg transition-all duration-500 hover:from-blue-500 hover:to-indigo-500 hover:scale-110 hover:shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse transition-all duration-300" />
                <span className="relative z-10">Join Our Community</span>
                
                {/* Enhanced Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-0 group-hover:scale-100"></div>
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
              </button>
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="sm:ml-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Our Achievements</h3>
                      <p className="text-slate-600 text-sm sm:text-base">Proud milestones</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-600">400+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">100+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">5+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Years</div>
                    </div>
                  </div>

                  {/* Magazine Download Button */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <button 
                      onClick={handleMagazineDownload}
                      className="group relative w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
                    >
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                      Download ACE Magazine
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:animate-bounce" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-xs sm:text-sm text-slate-500 text-center mt-2">
                      Get our complete achievements and highlights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-fuchsia-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSectionTwo;