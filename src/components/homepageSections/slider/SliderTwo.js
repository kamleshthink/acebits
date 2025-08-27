import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  BookOpen,
  Star,
  TrendingUp,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  Play,
  Globe,
  ExternalLink
} from "lucide-react";
import e1 from "../../../assets/images/events/e1.jpg";
import e3 from "../../../assets/images/events/e3.jpg";
import e5 from "../../../assets/images/events/e5.jpg";
import e6 from "../../../assets/images/events/e6.jpg";
import e9 from "../../../assets/images/events/e9.jpg";
import e10 from "../../../assets/images/events/e10.jpg";
import e11 from "../../../assets/images/events/e11.jpg";
import risce2024 from "../../../assets/images/RISCE 2024.jpg";

const SliderTwo = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: "all", name: "All Events", color: "from-blue-500 to-purple-600" },
    { id: "lecture", name: "Lecture Series", color: "from-green-500 to-emerald-600" },
    { id: "avlokan", name: "Avlokan", color: "from-purple-500 to-pink-600" },
    { id: "econstruct", name: "E-Construct", color: "from-orange-500 to-red-600" },
    { id: "badlav", name: "Badlav", color: "from-teal-500 to-cyan-600" },
    { id: "conference", name: "Conference", color: "from-red-500 to-pink-600" },
    { id: "others", name: "Others", color: "from-indigo-500 to-violet-600" }
  ];

  const allEvents = [
  {
    id: 1,
      title: "RISCE-2024 International Conference",
      category: "conference",
      content: "Research and Innovation for Sustainability in Civil Engineering - An International Conference with Socio-economic and Environmental Approach. Bringing together researchers, academicians, field practitioners, and policy makers.",
      imgUrl: risce2024,
      date: "25-26 Nov 2024",
      attendees: "300+",
      type: "International Conference",
      color: "from-red-500 to-pink-600",
      isSpecial: true,
      website: "https://risce2024.com/index.html",
      venue: "Department of Civil Engineering, B.I.T. Sindri",
      description: "The aim of the conference 'RISCE' is to bring the researchers, academicians, field practitioners, and policy makers at a common platform to share their experiences and knowledge in field of research and innovation to solve real life problem in a cost effective manner for the well being of the Global Community."
  },
      {
      id: 2,
      title: "Badlav - Social Initiative",
      category: "badlav",
      content: "To break the taboo of menstruation and help the needy, here we are with an exhilarating event Badlav. It is a sanitary pads distribution with tagline 'no more hushh!' and awareness session.",
      imgUrl: e1,
      date: "15 Mar 2024",
      attendees: "50+",
      type: "Social Initiative",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 3,
      title: "E-Construct 2022",
      category: "econstruct",
      content: "ACE BITS proudly presents E-Construct 2022, a monumental event that celebrates the fusion of beauty, history, and design.",
    imgUrl: e10,
      date: "20 Feb 2024",
      attendees: "100+",
      type: "Festival",
      color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
      title: "Avlokan Tech Fest",
      category: "avlokan",
      content: "Avlokan the flagship tech fest hosted by the Association of Civil Engineers (ACE) at BIT Sindri. Packed with excitement and innovation.",
    imgUrl: e11,
      date: "10 Jan 2024",
      attendees: "200+",
      type: "Tech Fest",
      color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
      title: "Construction Management Webinar",
      category: "lecture",
      content: "A webinar based on career opportunities in real estate construction and finance management, featuring Mr. Abhay Kumar, Director of I.R.E.F.",
    imgUrl: e5,
      date: "25 Dec 2023",
      attendees: "75+",
      type: "Webinar",
      color: "from-green-500 to-emerald-600"
  },
  {
    id: 6,
      title: "Platinum Jubilee Lecture Series",
      category: "lecture",
      content: "Celebrated the Platinum Jubilee of BIT Sindri with unparalleled zeal, ACE BITS orchestrated an enlightening lecture series with esteemed Chief Guest Suresh Kumar Sir.",
    imgUrl: e6,
      date: "15 Dec 2023",
      attendees: "150+",
      type: "Lecture Series",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 7,
      title: "World Engineering Day Seminar",
      category: "others",
      content: "On the occasion of Platinum Jubilee celebration, Department of Civil Engineering BIT SINDRI organised a seminar on WORLD ENGINEERING DAY FOR SUSTAINABLE DEVELOPMENT 2024.",
    imgUrl: e3,
      date: "5 Dec 2023",
      attendees: "120+",
      type: "Seminar",
      color: "from-indigo-500 to-violet-600"
    },
        {
      id: 8,
      title: "Brainwave - Group Discussion",
      category: "avlokan",
      content: "ACE BITS organised BRAINWAVE - A Conclave Group Discussion event as GDs are an important part of the collaborative and cooperative learning process.",
      imgUrl: e9,
      date: "1 Dec 2023",
      attendees: "80+",
      type: "Competition",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const filteredEvents = activeCategory === "all" 
    ? allEvents 
    : allEvents.filter(event => event.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % filteredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? filteredEvents.length - 1 : prev - 1);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-white animate-slide-up">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Events & Activities
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Upcoming & Past
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              } animate-slide-up`}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              {category.name}
            </button>
          ))}
      </div>

        {/* Events Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Events Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredEvents.map((event, index) => (
                <div key={event.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className={`backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      event.isSpecial ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20' : 'bg-white/10'
                    }`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-full overflow-hidden">
                          <img 
                            src={event.imgUrl} 
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <span className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${event.color} rounded-full text-xs font-medium text-white`}>
                              {event.type}
                            </span>
                          </div>
                          {event.isSpecial && (
                            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                              <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white animate-pulse">
                                🌟 SPECIAL
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                          <div className="mb-4">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                              {event.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                              {event.content}
                            </p>
                            {event.isSpecial && event.description && (
                              <p className="text-gray-200 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm italic">
                                {event.description}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-center text-gray-300">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-yellow-400" />
                              <span className="text-xs sm:text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-yellow-400" />
                              <span className="text-xs sm:text-sm">{event.attendees} participants</span>
                            </div>
                            {event.venue && (
                              <div className="flex items-center text-gray-300">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-yellow-400" />
                                <span className="text-xs sm:text-sm">{event.venue}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-yellow-400 hover:to-orange-400 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base">
                              <Play size={14} className="sm:w-4 sm:h-4 mr-2 group-hover:animate-pulse" />
                              View Details
                            </button>
                            {event.website && (
                              <a 
                                href={event.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-blue-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
                              >
                                <Globe size={14} className="sm:w-4 sm:h-4 mr-2 group-hover:animate-pulse" />
                                Visit Website
                                <ExternalLink size={12} className="sm:w-3 sm:h-3 ml-1" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {filteredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-yellow-500 scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Event Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-300">
            Showing {currentSlide + 1} of {filteredEvents.length} events
          </p>
        </div>
      </Container>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default SliderTwo;
