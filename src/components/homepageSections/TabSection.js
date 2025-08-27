import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Lightbulb, 
  Globe,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  GraduationCap,
  Sparkles,
  Zap
} from "lucide-react";
import { useHistory } from "react-router-dom";
import TestImg from "../../assets/images/aim.svg";
import Vision from "../../assets/images/vision.svg";

const TabSection = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("aim");
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const animatedWords = [
    { word: "construct", color: "from-blue-400 to-cyan-500", displayWord: "onstruct" },
    { word: "communicate", color: "from-green-400 to-emerald-500", displayWord: "ommunicate" },
    { word: "coordinate", color: "from-purple-400 to-pink-500", displayWord: "oordinate" }
  ];







  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      const currentWordObj = animatedWords[currentWord];
      const currentWordText = currentWordObj.displayWord; // Use displayWord (without 'C')
      if (currentText.length < currentWordText.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWordText.slice(0, currentText.length + 1));
        }, 150); // Typing speed: 150ms per character
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Wait 1 second before deleting
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 60); // Slower delete speed: 60ms per character
      } else {
        setCurrentWord((prev) => (prev + 1) % animatedWords.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentWord, animatedWords]);

  const tabs = [
    {
      id: "aim",
      title: "Our Aim",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      content: {
        title: "Empowering Future Civil Engineers",
        description: "Association of Civil Engineers, B.I.T. Sindri aims to enlighten students, scholars and researchers of the most recent advancements in the Civil Engineering field. It aspires to foster a culture of learning, understanding and sharing of Civil engineering concepts in the campus so that there is no dearth of information and an open along with free flow of knowledge.",
        highlights: [
          "Enlighten students with recent advancements",
          "Foster culture of learning and understanding",
          "Share Civil engineering concepts freely",
          "Innovate together as a community"
        ],
        image: TestImg
      }
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      content: {
        title: "Building Tomorrow's Infrastructure",
        description: "Civil Engineering is an art and a technique to create safe, resilient and sustainable buildings. We envision a future where every civil engineer contributes to creating infrastructure that stands the test of time while preserving our environment for future generations.",
        highlights: [
          "Create safe and resilient structures",
          "Build sustainable infrastructure",
          "Preserve environment for future",
          "Master the art of civil engineering"
        ],
        image: Vision
      }
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  // Reset typing state when tab changes
  useEffect(() => {
    setCurrentWord(0);
    setCurrentText("");
    setIsTyping(true);
  }, [activeTab]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Container className="relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-xl font-bold mb-8 text-white animate-slide-up shadow-lg">
            <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
            About ACE BITS Sindri
            <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
          </div>
          
          {/* Horizontal Professional Heading */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 animate-slide-up" style={{animationDelay: '0.2s'}}>
                WHO
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-slide-up" style={{animationDelay: '0.3s'}}></div>
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-spin" style={{animationDuration: '3s'}} />
                <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-slide-up" style={{animationDelay: '0.4s'}}></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-slide-up" style={{animationDelay: '0.5s'}}>
                WE ARE
              </h2>
            </div>
          </div>

          {/* Animated Subheading */}
          <div className="text-center mb-8 animate-slide-up" style={{animationDelay: '0.7s'}}>
            {/* Association of Civil Engineers Text */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent px-4">
              Association of Civil Engineers
            </h3>
            
            {/* Enhanced Typing Animation */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 mb-3 sm:mb-4 px-4">
              We{" "}
              <span className="inline-block min-w-[200px] sm:min-w-[250px] text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-black">
                  C{currentText}
                </span>
                <span className={`${isTyping ? 'animate-pulse' : ''} text-indigo-600 ml-1`}>|</span>
              </span>
            </h3>
            
            {/* Enhanced Word Display */}
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-4">
              {animatedWords.map((wordObj, index) => (
                <div key={index} className="flex items-center">
                  <span className={`text-sm sm:text-base font-medium px-2 py-1 rounded-lg transition-all duration-300 ${
                    currentWord === index && isTyping 
                      ? `bg-gradient-to-r ${wordObj.color} text-white shadow-lg scale-110` 
                      : index < currentWord 
                        ? `bg-gradient-to-r ${wordObj.color} text-white shadow-lg` // Completed words show their color
                        : 'text-slate-500 bg-slate-100' // Future words remain gray
                  }`}>
                    {wordObj.word}
                  </span>
                  {index < animatedWords.length - 1 && (
                    <span className="text-slate-400 mx-2">•</span>
                  )}
                </div>
              ))}
            </div>
            


          </div>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.8s'}}>
            The premier student organization at BIT Sindri, Dhanbad, dedicated to fostering excellence 
            in civil engineering through innovation, collaboration, and hands-on learning experiences.
          </p>
        </div>

        {/* Horizontal Professional Tab Navigation */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white rounded-3xl p-2 sm:p-3 shadow-2xl border border-gray-100 backdrop-blur-sm w-auto max-w-lg">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-500 hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-xl transform scale-105`
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  } animate-slide-up`}
                  style={{animationDelay: `${0.9 + index * 0.1}s`}}
                >
                  {/* Active Tab Glow Effect */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl animate-pulse"></div>
                  )}
                  
                  <tab.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === tab.id ? 'animate-bounce' : ''}`} />
                  <span className="font-black text-xs sm:text-sm">{tab.title}</span>
                  
                  {/* Hover Sparkle Effect */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="animate-slide-up" style={{animationDelay: '1.1s'}}>
          <div className={`bg-gradient-to-br ${activeContent.bgColor} rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* Floating Animated Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

            <Row className="align-items-center relative z-10">
              <Col lg={6} className="mb-8 lg:mb-0">
                <div className="mb-8">
                  <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${activeContent.color} rounded-full text-sm font-bold mb-6 text-white shadow-lg animate-slide-up`}>
                    <activeContent.icon className="w-5 h-5 mr-2 animate-pulse" />
                    {activeContent.title}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                    {activeContent.content.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    {activeContent.content.description}
                  </p>
                </div>

                {/* Enhanced Highlights with Animations */}
                <div className="space-y-3 sm:space-y-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  {activeContent.content.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${activeContent.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce" />
                      </div>
                      <span className="text-sm sm:text-base md:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <button 
                  onClick={() => history.push('/about')}
                  className="group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-black rounded-full text-base sm:text-lg md:text-xl transition-all duration-500 hover:from-slate-800 hover:to-slate-600 hover:scale-110 hover:shadow-2xl flex items-center justify-center mt-8 sm:mt-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
                  Learn More About ACE
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Col>

              <Col lg={6}>
                <div className="relative">
                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Enhanced Image Container */}
                  <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-500 animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
                    <img 
                      src={activeContent.content.image} 
                      alt={activeContent.title}
                      className="w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
            </div>
          </Col>
        </Row>
          </div>
        </div>
      </Container>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default TabSection;
