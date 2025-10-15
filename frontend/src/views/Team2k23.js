import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { 
  Users, 
  Award, 
  Star, 
  Linkedin,
  // Mail,
  Heart,
  Target,
  TrendingUp,
  GraduationCap
} from "lucide-react";

// New image import for Rahul Kumar Saw
import rahulSaw from "../assets/images/2k23/rahul kumar saw.jpg";

// 2K23 team images - Using public folder paths with URL encoding
const teamImages = {
  aryan: "/images/2k23/Aryan.jpg",
  jagriti: null, // Photo not available
  tanvi: "/images/2k23/TANVI.jpg",
  soumya: "/images/2k23/SOUMYA.jpg",
  sumit: "/images/2k23/Sumit%20Sen.jpg",
  ayush: "/images/2k23/ayush%20kumar.png",
  animesh: "/images/2k23/Animesh%20Chatterjee%20.jpg",
  harsh: "/images/2k23/harshkumar.jpg",
  tisha: "/images/2k23/tisha%20khalkho.png",
  rishav: "/images/2k23/rishav.jpeg",
  shashi: "/images/2k23/shashi.png",
  shreya: "/images/2k23/shreya.jpg",
  rahul: rahulSaw,
  nitish: "/images/2k23/nitish%20kumar.jpg",
  kaushal: "/images/2k23/Kaushal%20Kishore.jpg",
  pratyush: null, // Photo not available
  devroshan: "/images/2k23/devroshan.jpg",
  suraj: "/images/2k23/Suraj%20Kumar%20.jpg",
  renu: "/images/2k23/Renu.jpg",
  aman: "/images/2k23/Aman.%20jpg",
  deepika: "/images/2k23/Deepika.jpg",
  sujit: null, // Photo not available
  shivam: null, // Photo not available
  shubham: "/images/2k23/subham.jpg",
  kamlesh: "/images/2k23/kamlesh%20kumar%20sharma.jpg",
  rishikesh: "/images/2k23/rishikesh.jpg", // Photo available now
  anish: "/images/2k23/Anish_Kumar.jpg",
  ahmad: "/images/2k23/ahmad%20raza.webp", // Updated photo path with URL encoding
  amanArya: "/images/2k23/aman%20arya.jpg"
};

const Team2k23 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (imageSrc, memberName) => {
    setSelectedImage({ src: imageSrc, name: memberName });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const teamData = [
    // FIRST ROW: Counselling, Operational, Development (Centre)
    // COUNSELLING TEAM
    {
      name: "Aryan Singh",
      position: "Counselling Team",
      image: teamImages.aryan,
      linkedin: "#",
      // email: "aryan.singh@bitsindri.ac.in"
    },
    {
      name: "Jagriti Singh",
      position: "Counselling Team",
      image: null, // Photo not available
      linkedin: "#",
      // email: "jagriti.singh@bitsindri.ac.in"
    },
    {
      name: "Tanvi Oraon",
      position: "Counselling Team, Alumni Relations Team", // Multiple positions
      image: teamImages.tanvi,
      linkedin: "#",
      // email: "tanvi.oraon@bitsindri.ac.in"
    },
    {
      name: "Animesh Chatterjee",
      position: "Alumni Relations Team",
      image: teamImages.animesh,
      linkedin: "#",
      // email: "animesh.chatterjee@bitsindri.ac.in"
    },
    // OPERATIONAL TEAM
    {
      name: "Soumya Kumari",
      position: "Operational Team, Sponsorship Team", // Multiple positions
      image: teamImages.soumya,
      linkedin: "#",
      // email: "soumya.kumari@bitsindri.ac.in"
    },
    {
      name: "Sumit Sen",
      position: "Operational Team, Editorial Team", // Multiple positions
      image: teamImages.sumit,
      linkedin: "#",
      // email: "sumit.sen@bitsindri.ac.in"
    },
    {
      name: "Ayush Kumar Bhagat",
      position: "Operational Team",
      image: null, // Photo not available - Ayush Kumar Bhagat
      linkedin: "#",
      // email: "ayush.bhagat@bitsindri.ac.in"
    },
    // DEVELOPMENT TEAM (Centre of first row)
    {
      name: "Kamlesh Kumar Sharma",
      position: "Development Team",
      image: teamImages.kamlesh, // Photo available now
      linkedin: "https://www.linkedin.com/in/kamlesh-sharmathink",
      // email: "kamlesh.sharma@bitsindri.ac.in"
    },
    {
      name: "Rishikesh Kumar",
      position: "Development Team",
      image: teamImages.rishikesh, // Photo available now
      linkedin: "#",
      // email: "rishikesh.kumar@bitsindri.ac.in"
    },

    // SECOND ROW: Designing, Ideation, Sponsorship
    // DESIGNING TEAM
    {
      name: "Tisha Khalkho",
      position: "Designing Team",
      image: teamImages.tisha,
      linkedin: "#",
      // email: "tisha.khalkho@bitsindri.ac.in"
    },
    {
      name: "Rishav Raj",
      position: "Designing Team",
      image: teamImages.rishav,
      linkedin: "#",
      // email: "rishav.raj@bitsindri.ac.in"
    },
    {
      name: "Shashi Kumar",
      position: "Designing Team, Social Media Team", // Multiple positions
      image: teamImages.shashi, // Photo available now
      linkedin: "#",
      // email: "shashi.kumar@bitsindri.ac.in"
    },
    // IDEATION TEAM
    {
      name: "Shreya Keshri",
      position: "Ideation Team, Industrial Relations Team",
      image: teamImages.shreya,
      linkedin: "#",
      // email: "shreya.keshri@bitsindri.ac.in"
    },
    {
      name: "Rahul Kumar Saw",
      position: "Ideation Team",
      image: teamImages.rahul,
      linkedin: "#",
      // email: "rahul.saw@bitsindri.ac.in"
    },
    {
      name: "Nitish Kumar",
      position: "Ideation Team",
      image: teamImages.nitish,
      linkedin: "#",
      // email: "nitish.kumar@bitsindri.ac.in"
    },
    // SPONSORSHIP TEAM
    {
      name: "Ayush Singh",
      position: "Sponsorship Team",
      image: null, // Photo not available - Ayush Singh (different from Ayush Kumar)
      linkedin: "#",
      // email: "ayush.singh@bitsindri.ac.in"
    },
    {
      name: "Deepika Kumari Baskey",
      position: "Sponsorship Team, Sports and Cultural Team", // Multiple positions
      image: teamImages.deepika,
      linkedin: "#",
      // email: "deepika.baskey@bitsindri.ac.in"
    },
    {
      name: "Anish Kumar",
      position: "Sponsorship Team, Public Relations Team", // Multiple positions
      image: teamImages.anish,
      linkedin: "#",
      // email: "anish.kumar@bitsindri.ac.in"
    },

    // THIRD ROW: GATE-ESE Forum, Research, Social Media
    // GATE-ESE FORUM
    {
      name: "Kaushal Kishore",
      position: "GATE-ESE Forum, Editorial Team", // Multiple positions
      image: teamImages.kaushal,
      linkedin: "#",
      // email: "kaushal.kishore@bitsindri.ac.in"
    },
    {
      name: "Pratyush Kumar Thakur",
      position: "GATE-ESE Forum, Editorial Team", // Multiple positions
      image: null, // Photo not available
      linkedin: "#",
      // email: "pratyush.thakur@bitsindri.ac.in"
    },
    // RESEARCH AND PROJECT APPLICATION TEAM
    {
      name: "Devroshan Kumar",
      position: "Research and Project Application Team",
      image: teamImages.devroshan,
      linkedin: "#",
      // email: "devroshan.kumar@bitsindri.ac.in"
    },
    {
      name: "Suraj Kumar",
      position: "Research and Project Application Team",
      image: teamImages.suraj,
      linkedin: "#",
      // email: "suraj.kumar@bitsindri.ac.in"
    },
    {
      name: "Renu Kumari Hembrom",
      position: "Research and Project Application Team, Editorial Team", // Multiple positions
      image: teamImages.renu,
      linkedin: "#",
      // email: "renu.hembrom@bitsindri.ac.in"
    },
    // SOCIAL MEDIA TEAM
    {
      name: "Aman Kumar Ishwar",
      position: "Social Media Team",
      image: teamImages.aman,
      linkedin: "#",
      // email: "aman.ishwar@bitsindri.ac.in"
    },

    // FOURTH ROW: Industrial Relations, Marketing, Editorial
    // INDUSTRIAL RELATIONS TEAM
    {
      name: "Ahmad Raza",
      position: "Industrial Relations Team, Industry Alumni Team",
      image: teamImages.ahmad, // Photo available now
      linkedin: "#",
      // email: "ahmad.raza@bitsindri.ac.in"
    },
    // MARKETING TEAM
    {
      name: "Shivam Singh",
      position: "Marketing Team",
      image: null, // Photo not available
      linkedin: "#",
      // email: "shivam.singh@bitsindri.ac.in"
    },
    {
      name: "Ayush Kumar",
      position: "Marketing Team",
      image: teamImages.ayush,
      linkedin: "#",
      // email: "ayush.kumar@bitsindri.ac.in"
    },
    {
      name: "Shubham Kumar Bhagat",
      position: "Marketing Team",
      image: teamImages.shubham,
      linkedin: "#",
      // email: "shubham.bhagat@bitsindri.ac.in"
    },
    // EDITORIAL TEAM




    // FIFTH ROW: Sports & Cultural, Public Relations
    // SPORTS AND CULTURAL TEAM
    {
      name: "Aman Kumar Arya",
      position: "Sports and Cultural Team",
      image: teamImages.amanArya, // Photo available now
      linkedin: "#",
      // email: "aman.arya@bitsindri.ac.in"
    },

    {
      name: "Sujit Kumar",
      position: "Sports and Cultural Team",
      image: null, // Photo not available
      linkedin: "#",
      // email: "sujit.kumar@bitsindri.ac.in"
    },
    // PUBLIC RELATIONS TEAM
    {
      name: "Harsh Kumar",
      position: "Public Relations Team",
      image: teamImages.harsh,
      linkedin: "#",
      // email: "harsh.kumar@bitsindri.ac.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Core Members: In-Charge 2025-26
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                2K23 Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated students leading various teams to drive ACE BITS towards excellence and innovation
            </p>
          </div>
        </Container>
      </div>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">35</h3>
              <p className="text-slate-600">Core Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">20+</h3>
              <p className="text-slate-600">Teams</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">25+</h3>
              <p className="text-slate-600">Events Planned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">1+</h3>
              <p className="text-slate-600">Year of Innovation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Dedicated
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the talented students leading various teams to drive ACE BITS forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Member Image */}
                  <div className="relative mb-6">
                    <div 
                      className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-green-100 group-hover:ring-green-300 transition-all duration-300 cursor-pointer group/image"
                      onClick={() => member.image && openImageModal(member.image, member.name)}
                    >
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center group-hover/image:scale-125 transition-all duration-500 ease-out"
                          style={{ 
                            objectPosition: member.name === "Kamlesh Kumar Sharma" ? '50% 50%' : 'center 20%' 
                          }} // Perfect positioning for Kamlesh Sharma - head perfectly visible
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover/image:scale-110 transition-transform duration-300">
                          <div className="text-gray-500 text-4xl font-bold group-hover/image:text-gray-700 transition-colors duration-300">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 rounded-full opacity-0 group-hover/image:opacity-100">
                      </div>
                    </div>
                    
                    {/* Photo Badge - Only for available photos */}
                    {member.image && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg group-hover/image:shadow-xl transition-all duration-300">
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm leading-tight">{member.position}</p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                                        {/* <Mail className="w-4 h-4 mr-2" />
                <span className="truncate">{member.email}</span> */}
                      </div>
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 group-hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Vision */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision for
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                2024
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building on the legacy while creating new opportunities for growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Introducing new technologies and modern approaches to civil engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300">
                Expanding our reach and creating more opportunities for students
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Maintaining the highest standards of academic and professional excellence
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              ✕
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Member Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  {selectedImage.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team2k23; 