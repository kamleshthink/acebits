import React from "react";
import { Container } from "react-bootstrap";
import { 
  Download, 
  BookOpen, 
  Award,
  Star,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  MapPin,
  ExternalLink,
  Sparkles,
  Eye,
  Heart
} from "lucide-react";
import BannerImg from "../assets/images/constitution.svg";
import MainImg from "../assets/images/magazine.jpg";

const Magazine = () => {
  const features = [
    {
      title: "Student Articles",
      description: "Insightful articles written by our talented students covering various aspects of civil engineering",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Research Papers",
      description: "Latest research findings and innovations in civil engineering from faculty and students",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Event Coverage",
      description: "Comprehensive coverage of ACE BITS events, competitions, and achievements",
      icon: Calendar,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Industry Insights",
      description: "Professional perspectives and industry trends from experienced engineers and alumni",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Photo Gallery",
      description: "Visual highlights capturing memorable moments and achievements of our community",
      icon: ImageIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Alumni Stories",
      description: "Success stories and experiences shared by our distinguished alumni network",
      icon: Users,
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { label: "Total Pages", value: "50+", icon: BookOpen },
    { label: "Contributors", value: "30+", icon: Users },
    { label: "Articles", value: "25+", icon: FileText },
    { label: "Downloads", value: "1000+", icon: Download }
  ];

  const highlights = [
    {
      title: "Editorial Excellence",
      description: "Professionally curated content with high-quality writing and design standards",
      icon: Star
    },
    {
      title: "Diverse Content",
      description: "Wide range of topics covering technical, academic, and cultural aspects",
      icon: Sparkles
    },
    {
      title: "Visual Appeal",
      description: "Stunning photography and graphics enhancing the reading experience",
      icon: Eye
    },
    {
      title: "Community Focus",
      description: "Content that celebrates and strengthens our engineering community",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Annual Publication
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block">ACE BITS</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  MAGAZINE
                </span>
              </h1>
              <div className="space-y-2 mb-8">
                <p className="text-xl text-slate-300 flex items-center">
                  <Award className="w-5 h-5 mr-3 text-yellow-400" />
                  Association of Civil Engineers
                </p>
                <p className="text-lg text-slate-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  B.I.T Sindri, Dhanbad
                </p>
                <p className="text-lg text-slate-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-3 text-green-400" />
                  Established 2017
                </p>
              </div>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover the latest achievements, innovations, and stories from our vibrant civil engineering community through our comprehensive annual magazine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drive.google.com/file/d/1bgOfvMIDeKTimA-zNEP371_PWnLDSEMO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Magazine
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Preview Content
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img 
                  src={MainImg} 
                  alt="ACE BITS Magazine" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazine Features */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Magazine
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contents
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore the diverse range of content that makes our magazine a comprehensive resource for the civil engineering community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Feature Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Read More Button */}
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-2">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazine Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Our Magazine
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stands Out
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our magazine represents the best of civil engineering education, research, and community spirit at BIT Sindri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazine Preview Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <img 
                  src={MainImg} 
                  alt="Magazine Preview" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-8 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
                  <div className="text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Latest Edition</h3>
                    <p className="text-white/90">Featuring cutting-edge research and inspiring stories</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Get Your Copy
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Download the latest edition of our magazine and immerse yourself in the world of civil engineering excellence. Discover inspiring stories, cutting-edge research, and vibrant community highlights.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">High-quality digital edition with interactive features</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Professional photography and stunning visuals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Comprehensive coverage of academic and cultural activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Exclusive interviews and industry insights</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drive.google.com/file/d/1bgOfvMIDeKTimA-zNEP371_PWnLDSEMO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <button className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-2xl hover:bg-slate-200 transition-all duration-300">
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Online
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contribute to Our
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Next Edition
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Share your stories, research, and achievements with our community. Be part of the next edition of ACE BITS Magazine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <FileText className="w-5 h-5 mr-2" />
                Submit Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                <Users className="w-5 h-5 mr-2" />
                Join Editorial Team
              </button>
            </div>
      </div>
        </Container>
      </section>
    </div>
  );
};

export default Magazine;