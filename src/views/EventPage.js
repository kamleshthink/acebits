import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Award, 
  TrendingUp,
  BookOpen,
  Lightbulb,
  Heart,
  Zap,
  ArrowRight,
  ExternalLink
} from "lucide-react";

// Import real event images
import e1 from "../assets/images/events/e1.jpg"; // Brainwave/Avlokan
import e2 from "../assets/images/events/e2.jpg"; // E-Construct
import e3 from "../assets/images/events/e3.jpg"; // World Engineering Day
import e4 from "../assets/images/events/e4.jpg"; // Technical Events
import e5 from "../assets/images/events/e5.jpg"; // Construction Management
import e6 from "../assets/images/events/e6.jpg"; // Platinum Jubilee
import e7 from "../assets/images/events/e7.jpg"; // General Events
import e8 from "../assets/images/events/e8.jpg"; // RISCE Conference
import e9 from "../assets/images/events/e9.jpg"; // Badlav
import e10 from "../assets/images/events/e10.jpg"; // Additional Events
import e11 from "../assets/images/events/e11.jpg"; // Additional Events

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      id: 1,
      name: "AVLOKAN'23",
      category: "avlocal",
      image: e3,
      date: "March 15-20, 2023",
      time: "9:00 AM - 6:00 PM",
      location: "BIT Sindri Campus",
      description: "AVLOKAN'23, celebration of science in a week full of events that promise to reinvigorate your love for science with interactive sessions, quizzes, model making, tribute to famous personalities, and technical presentations.",
      longDescription: "AVLOKAN'23 was a week-long celebration of science and technology that brought together students, faculty, and industry experts. The event featured interactive sessions, technical quizzes, model making competitions, and presentations on cutting-edge technologies. Participants had the opportunity to showcase their innovative projects and learn from renowned speakers in the field of civil engineering.",
      participants: "500+",
      status: "completed",
      highlights: ["Interactive Sessions", "Technical Quizzes", "Model Making", "Expert Presentations"]
    },
    {
      id: 2,
      name: "E-CONSTRUCT 2023",
      category: "e-construct",
      image: e2,
      date: "February 10-12, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "BIT Sindri Auditorium",
      description: "E-CONSTRUCT 2023 focused on sustainable construction practices and green building technologies, featuring workshops on modern construction methods.",
      longDescription: "E-CONSTRUCT 2023 was a comprehensive event dedicated to exploring sustainable construction practices and green building technologies. The event featured expert workshops on modern construction methods, sustainable materials, and environmental impact assessment. Participants gained hands-on experience with cutting-edge construction technologies and learned about the future of sustainable infrastructure development.",
      participants: "300+",
      status: "completed",
      highlights: ["Sustainable Construction", "Green Building Tech", "Expert Workshops", "Hands-on Experience"]
    },
    {
      id: 3,
      name: "BADLAV - No More Hushh",
      category: "badlav",
      image: e1,
      date: "March 12, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "DAV School, Tasra",
      description: "NSS BIT Sindri with ACE BIT Sindri organized an event at DAV, Tasra titled as Badlav-No More Hushh aiming to educate and empower young minds.",
      longDescription: "BADLAV - No More Hushh was a social awareness initiative organized in collaboration with NSS BIT Sindri. The event aimed to educate and empower young minds on crucial topics like good touch and bad touch, menstrual hygiene, and personal safety. Through interactive sessions and workshops, students learned about important life skills and personal development.",
      participants: "200+",
      status: "completed",
      highlights: ["Social Awareness", "Life Skills", "Personal Safety", "Interactive Sessions"]
    },
    {
      id: 4,
      name: "Technical Lecture Series",
      category: "lecture-series",
      image: e6,
      date: "Ongoing",
      time: "2:00 PM - 4:00 PM",
      location: "Department Seminar Hall",
      description: "Regular technical lecture series featuring industry experts and academicians sharing insights on latest developments in civil engineering.",
      longDescription: "Our Technical Lecture Series is an ongoing initiative that brings together industry experts, academicians, and researchers to share insights on the latest developments in civil engineering. These sessions cover topics ranging from structural innovations to sustainable development practices, providing students with valuable knowledge and networking opportunities.",
      participants: "100+",
      status: "ongoing",
      highlights: ["Expert Speakers", "Latest Technologies", "Networking", "Knowledge Sharing"]
    },
    {
      id: 5,
      name: "Innovation Challenge 2023",
      category: "others",
      image: e4,
      date: "April 5-7, 2023",
      time: "9:00 AM - 6:00 PM",
      location: "BIT Sindri Campus",
      description: "A competitive platform for students to showcase innovative solutions to real-world engineering challenges.",
      longDescription: "The Innovation Challenge 2023 provided a competitive platform for students to showcase innovative solutions to real-world engineering challenges. Teams worked on projects addressing infrastructure development, environmental sustainability, and smart city solutions. The event fostered creativity, problem-solving skills, and collaboration among participants.",
      participants: "150+",
      status: "completed",
      highlights: ["Innovation", "Problem Solving", "Team Work", "Real-world Projects"]
    },
    {
      id: 6,
      name: "Industry Connect Meet",
      category: "others",
      image: e5,
      date: "May 15, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "BIT Sindri Auditorium",
      description: "Networking event connecting students with industry professionals and potential employers.",
      longDescription: "The Industry Connect Meet was a networking event designed to bridge the gap between academia and industry. Students had the opportunity to interact with professionals from leading construction companies, consulting firms, and government agencies. The event included career guidance sessions, internship opportunities, and insights into industry trends.",
      participants: "250+",
      status: "completed",
      highlights: ["Networking", "Career Guidance", "Internship Opportunities", "Industry Insights"]
    },
    {
      id: 7,
      name: "RISCE-2024 International Conference",
      category: "others",
      image: e8,
      date: "December 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Department of Civil Engineering, B.I.T. Sindri",
      description: "The 3rd International Conference on Recent Innovations in Science & Civil Engineering (RISCE-2024) focusing on sustainable development and innovation.",
      longDescription: "RISCE-2024 is the 3rd International Conference on Recent Innovations in Science & Civil Engineering, bringing together researchers, academicians, field practitioners, and policy makers. The conference aims to share experiences and knowledge in research and innovation to solve real-life problems cost-effectively for the well-being of the Global Community.",
      participants: "300+",
      status: "upcoming",
      highlights: ["International Conference", "Research Innovation", "Global Community", "Sustainable Development"],
      website: "https://risce2024.com/index.html",
      isSpecial: true
    },
    {
      id: 8,
      name: "Brainwave - Group Discussion",
      category: "avlocal",
      image: e9,
      date: "December 1, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "BIT Sindri Seminar Hall",
      description: "ACE BITS organised BRAINWAVE - A Conclave Group Discussion event as GDs are an important part of the collaborative and cooperative learning process.",
      longDescription: "BRAINWAVE - Group Discussion was a comprehensive event designed to enhance communication and analytical skills of students. The event featured structured group discussions on contemporary topics, helping participants develop critical thinking and articulation abilities. Industry experts served as judges and provided valuable feedback to participants.",
      participants: "80+",
      status: "completed",
      highlights: ["Group Discussion", "Critical Thinking", "Communication Skills", "Expert Feedback"]
    }
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Calendar, color: "from-blue-500 to-cyan-500" },
    { id: "avlocal", name: "AVLOKAN", icon: Star, color: "from-yellow-500 to-orange-500" },
    { id: "e-construct", name: "E-CONSTRUCT", icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { id: "badlav", name: "BADLAV", icon: Heart, color: "from-pink-500 to-rose-500" },
    { id: "lecture-series", name: "Lecture Series", icon: Lightbulb, color: "from-purple-500 to-indigo-500" },
    { id: "others", name: "Others", icon: Zap, color: "from-orange-500 to-red-500" }
  ];

  const filteredEvents = activeCategory === "all" 
    ? eventsData 
    : eventsData.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <Calendar className="w-4 h-4 mr-2" />
              Our Events
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Discover Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Amazing Events
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Join us for exciting technical events, lecture series, and workshops that inspire innovation and learning
            </p>
          </div>
        </Container>
      </div>

      {/* Event Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">50+</h3>
              <p className="text-slate-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">2000+</h3>
              <p className="text-slate-600">Participants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">100+</h3>
              <p className="text-slate-600">Awards Given</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">5+</h3>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-slate-600 hover:bg-slate-100 shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        event.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {event.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.name}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.participants} Participants</span>
                      </div>
                    </div>

                    {/* Event Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {selectedEvent.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span className="font-semibold">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-5 h-5 mr-3" />
                      <span className="font-semibold">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span className="font-semibold">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Users className="w-5 h-5 mr-3" />
                      <span className="font-semibold">{selectedEvent.participants} Participants</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Event Highlights</h3>
                    <div className="space-y-2">
                      {selectedEvent.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">About This Event</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedEvent.longDescription}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Next Event?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with our upcoming events and be part of the innovation journey
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              Get Notified
              <ExternalLink className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </Container>
      </section>
      </div> 
  );
};

export default Events;




