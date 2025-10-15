import React from "react";
import { Container } from "react-bootstrap";
import { 
  Download, 
  FileText, 
  Building,
  Users,
  BookOpen,
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
  FileCheck,
  Scale,
  Gavel
} from "lucide-react";
import MainImg from "../assets/images/0001.jpg";

const Constitution = () => {
  const sections = [
    {
      title: "Preamble",
      description: "Foundation principles and objectives of the Association of Civil Engineers",
      icon: FileCheck,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Membership",
      description: "Guidelines for membership eligibility, rights, and responsibilities",
      icon: Users,
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Governance",
      description: "Organizational structure, roles, and decision-making processes",
      icon: Building,
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Code of Conduct",
      description: "Professional ethics and behavioral standards for all members",
      icon: Scale,
      color: "from-indigo-600 to-indigo-700"
    },
    {
      title: "Activities & Events",
      description: "Framework for organizing academic and cultural activities",
      icon: Calendar,
      color: "from-green-600 to-green-700"
    },
    {
      title: "Amendments",
      description: "Procedures for constitutional changes and updates",
      icon: Gavel,
      color: "from-red-600 to-red-700"
    }
  ];

  const highlights = [
    { label: "Established", value: "2017" },
    { label: "Active Members", value: "400+" },
    { label: "Events Organized", value: "100+" },
    { label: "Years of Excellence", value: "7+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium mb-6">
                <FileCheck className="w-4 h-4 mr-2" />
                Official Document
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block">ACE BITS</span>
                <span className="block text-blue-400 text-3xl md:text-4xl">
                  CONSTITUTION
                </span>
              </h1>
              <div className="space-y-3 mb-8">
                <p className="text-xl text-slate-200 flex items-center">
                  <Building className="w-5 h-5 mr-3 text-blue-400" />
                  Association of Civil Engineers
                </p>
                <p className="text-lg text-slate-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  B.I.T Sindri, Dhanbad
                </p>
                <p className="text-lg text-slate-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                  Established 2017
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drive.google.com/file/d/13GrwttLjVEwl3Syfn-0tLmq_WdcHbWqQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Download Constitution
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="/constitution" 
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 hover:bg-white/10 hover:bg-white/15 hover:border-white/50 group"
                >
                  <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Details
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative bg-white rounded-lg p-8 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-6">
                    <FileCheck className="w-24 h-24 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Constitution Document</h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">Official ACE BITS Constitution</p>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Document Type:</span>
                        <span className="text-blue-600 font-semibold">Constitution</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Organization:</span>
                        <span className="text-blue-600 font-semibold">ACE BITS</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Established:</span>
                        <span className="text-blue-600 font-semibold">2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <FileCheck className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-400 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150 group-hover:scale-100"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">{stat.label}</p>
                
                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-blue-600 mx-auto group-hover:w-16 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Constitution Sections */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Constitutional
              <span className="block text-blue-600 text-2xl md:text-3xl">
                Framework
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our constitution establishes the fundamental principles, governance structure, and operational guidelines that guide the Association of Civil Engineers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700"></div>
                
                <div className="relative z-10">
                  {/* Section Icon with Advanced Hover */}
                  <div className={`w-14 h-14 bg-${section.color.split('-')[1]}-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}>
                    <section.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Section Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {section.description}
                  </p>

                  {/* Read More Button with Advanced Hover */}
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2 relative">
                    <span className="relative">
                      Read More
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Constitutional Document Preview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Official Document
                <span className="block text-blue-600 text-2xl md:text-3xl">
                  Preview
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The ACE BITS Constitution serves as the foundational document that outlines our mission, vision, organizational structure, and operational procedures. It ensures transparency, accountability, and excellence in all our activities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Comprehensive governance framework</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Clear member rights and responsibilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Professional code of conduct</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Event organization guidelines</p>
                </div>
              </div>

              <a 
                href="https://drive.google.com/file/d/13GrwttLjVEwl3Syfn-0tLmq_WdcHbWqQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Access Full Document
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <img 
                  src={MainImg} 
                  alt="Constitution Document" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our
              <span className="block text-blue-400 text-2xl md:text-3xl">
                Professional Community
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Become part of the Association of Civil Engineers and contribute to the advancement of civil engineering education and research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/team" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:bg-white/15 hover:border-white/50 group"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Constitution;