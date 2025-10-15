import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Camera, 
  Image, 
  Heart, 
  Share2,
  Download,
  Eye,
  Calendar,
  MapPin,
  Users
} from "lucide-react";

import g4 from "../../assets/images/gallery/g4.jpg"
import g5 from "../../assets/images/gallery/g5.jpg"
import g6 from "../../assets/images/gallery/g6.jpg"
import g7 from "../../assets/images/gallery/g7.jpg"
import g8 from "../../assets/images/gallery/g8.jpg"
import g9 from "../../assets/images/gallery/g9.jpg"
import g10 from "../../assets/images/gallery/g10.jpg"
import g11 from "../../assets/images/gallery/g11.jpg"
import g12 from "../../assets/images/gallery/g12.jpg"
import g13 from "../../assets/images/gallery/g13.jpg"
import g14 from "../../assets/images/gallery/g14.jpg"
import g15 from "../../assets/images/gallery/g15.jpg"
import g16 from "../../assets/images/gallery/g16.jpg"
import g17 from "../../assets/images/gallery/g17.jpg"
import g18 from "../../assets/images/gallery/g18.jpg"
import g19 from "../../assets/images/gallery/g19.jpg"
import g20 from "../../assets/images/gallery/g20.jpg"
import g21 from "../../assets/images/gallery/g21.jpg"
import g22 from "../../assets/images/gallery/g22.jpg"
import g23 from "../../assets/images/gallery/g23.jpg"
import g24 from "../../assets/images/gallery/g24.jpg"
import g27 from "../../assets/images/gallery/g27.jpg"
import g26 from "../../assets/images/gallery/g26.jpg"
import g29 from "../../assets/images/gallery/g29.jpg"
import g30 from "../../assets/images/gallery/g30.jpg"
import g31 from "../../assets/images/gallery/g31.jpg"
import g32 from "../../assets/images/gallery/g32.jpg"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryData = [
    { id: 1, src: g4, category: "events", title: "AVLOKAN 2023", description: "Science celebration event" },
    { id: 2, src: g5, category: "events", title: "Technical Workshop", description: "Hands-on learning session" },
    { id: 3, src: g6, category: "lectures", title: "Guest Lecture", description: "Expert knowledge sharing" },
    { id: 4, src: g7, category: "events", title: "Engineering Day", description: "Celebrating innovation" },
    { id: 5, src: g8, category: "team", title: "Team Building", description: "Core team activities" },
    { id: 6, src: g9, category: "events", title: "Competition", description: "Technical competitions" },
    { id: 7, src: g10, category: "lectures", title: "Seminar", description: "Academic discussions" },
    { id: 8, src: g11, category: "events", title: "Cultural Event", description: "Cultural celebration" },
    { id: 9, src: g12, category: "team", title: "Leadership", description: "Leadership development" },
    { id: 10, src: g13, category: "events", title: "Workshop", description: "Skill development" },
    { id: 11, src: g14, category: "lectures", title: "Expert Talk", description: "Industry insights" },
    { id: 12, src: g15, category: "events", title: "Award Ceremony", description: "Recognition event" },
    { id: 13, src: g16, category: "team", title: "Team Meeting", description: "Strategic planning" },
    { id: 14, src: g17, category: "events", title: "Technical Fest", description: "Innovation showcase" },
    { id: 15, src: g18, category: "lectures", title: "Research Presentation", description: "Academic excellence" },
    { id: 16, src: g19, category: "events", title: "Community Service", description: "Social responsibility" },
    { id: 17, src: g20, category: "team", title: "Collaboration", description: "Team collaboration" },
    { id: 18, src: g21, category: "events", title: "Industry Visit", description: "Practical exposure" },
    { id: 19, src: g22, category: "lectures", title: "Panel Discussion", description: "Expert panel" },
    { id: 20, src: g23, category: "events", title: "Innovation Day", description: "Creative showcase" },
    { id: 21, src: g24, category: "team", title: "Team Spirit", description: "Unity in diversity" },
    { id: 22, src: g27, category: "events", title: "Technical Exhibition", description: "Project showcase" },
    { id: 23, src: g26, category: "lectures", title: "Knowledge Session", description: "Learning together" },
    { id: 24, src: g29, category: "events", title: "Celebration", description: "Success celebration" },
    { id: 25, src: g30, category: "team", title: "Team Success", description: "Achievement moment" },
    { id: 26, src: g31, category: "events", title: "Future Leaders", description: "Leadership development" },
    { id: 27, src: g32, category: "lectures", title: "Academic Excellence", description: "Knowledge pursuit" }
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: Image },
    { id: "events", name: "Events", icon: Calendar },
    { id: "lectures", name: "Lectures", icon: Users },
    { id: "team", name: "Team", icon: Heart }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Our Gallery
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Capture Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Amazing Moments
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Relive the memories of our events, lectures, and team activities through our photo gallery
            </p>
          </div>
        </Container>
      </div>

      {/* Gallery Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-slate-600">Photos Captured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">50+</h3>
              <p className="text-slate-600">Events Documented</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">1000+</h3>
              <p className="text-slate-600">Participants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">5+</h3>
              <p className="text-slate-600">Years of Memories</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Explore Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Photo Collections
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse through our categorized photo collections and relive the amazing moments
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Modal Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-300"
            >
              <span className="text-white text-xl font-bold">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
