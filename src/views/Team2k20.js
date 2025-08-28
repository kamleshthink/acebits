import React from "react";
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

import president from "../assets/images/post-bearer/president.jpg"
import vicePresident1 from "../assets/images/post-bearer/saurav.jpg"
import vicePresident2 from "../assets/images/post-bearer/vp2.jpg";
import techhead from "../assets/images/post-bearer/Dharmveer Mahtha.webp";
import js1 from "../assets/images/post-bearer/ashish.jpg"
import js2 from "../assets/images/post-bearer/js2.jpg";
import mh from "../assets/images/post-bearer/mh.jpg";
import trsr from "../assets/images/post-bearer/Rajan.jpg";
import jtrsr from "../assets/images/post-bearer/harshchourasia.jpg";
import ch from "../assets/images/post-bearer/ch.jpg"
import rd from "../assets/images/post-bearer/rd.jpg"
import gate from "../assets/images/post-bearer/Gate.jpg"
import edtorl from "../assets/images/post-bearer/aditya.jpg"
import alumini from "../assets/images/post-bearer/Sumit.jpg"
import pro from "../assets/images/post-bearer/pro.jpg"
import sh from "../assets/images/post-bearer/sh.jpg";
import eph from "../assets/images/post-bearer/sahabuddin.jpg";

const Team2k20 = () => {
  const teamData = [
    {
      name: "Adarsh Sah",
      position: "President",
      image: president,
      linkedin: "https://www.linkedin.com/in/adarsh-sah-92a966182/",
      // email: "adarsh.sah@bitsindri.ac.in"
    },
    {
      name: "Sourav Anand",
      position: "Vice President",
      image: vicePresident1,
      linkedin: "https://www.linkedin.com/in/sourav-anand-99a7a1202/",
      // email: "sourav.anand@bitsindri.ac.in"
    },
    {
      name: "Uma Dutta",
      position: "Vice President",
      image: vicePresident2,
      linkedin: "https://www.linkedin.com/in/uma-dutta-69ab8a228/",
      // email: "uma.dutta@bitsindri.ac.in"
    },
    {
      name: "Ashish Ujjwal Thakur",
      position: "Joint Secretary",
      image: js1,
      linkedin: "https://www.linkedin.com/in/ashish-ujjwal-thakur-71633b217/",
      // email: "ashish.thakur@bitsindri.ac.in"
    },
    {
      name: "Shabnam Kumari",
      position: "Joint Secretary",
      image: js2,
      linkedin: "https://www.linkedin.com/in/shabnam-kumari-005032241/",
      // email: "shabnam.kumari@bitsindri.ac.in"
    },
    {
      name: "Rajan Kumar",
      position: "Treasurer",
      image: trsr,
      linkedin: "https://www.linkedin.com/in/",
      // email: "rajan.kumar@bitsindri.ac.in"
    },
    {
      name: "Harsh Kr. Chourasia",
      position: "Joint Treasurer",
      image: jtrsr,
      linkedin: "https://www.linkedin.com/in/harsh-chourasia-a405a320b/",
      // email: "harsh.chourasia@bitsindri.ac.in"
    },
    {
      name: "Dharmveer Mahtha",
      position: "Technical Head",
      image: techhead,
      linkedin: "www.linkedin.com/in/dharm-veer-043743221",
      // email: "dharmveer.mahtha@bitsindri.ac.in"
    },
    {
      name: "Amisha Rani",
      position: "Marketing Head",
      image: mh,
      linkedin: "https://www.linkedin.com/in/amisha-rani-817458205/",
      // email: "amisha.rani@bitsindri.ac.in"
    },
    {
      name: "Sushanto Shekhar",
      position: "Marketing Head",
      image: ch,
      linkedin: "https://www.linkedin.com/in/sushanto-shekhar/",
      // email: "sushanto.shekhar@bitsindri.ac.in"
    },
    {
      name: "Rohit Kumar",
      position: "Research & Development Head",
      image: rd,
      linkedin: "https://www.linkedin.com/in/rohit-kumar-b77260216/",
      // email: "rohit.kumar@bitsindri.ac.in"
    },
    {
      name: "Jitendra Rajwar",
      position: "GATE & ESE Forum Head",
      image: gate,
      linkedin: "https://www.linkedin.com/in/jitendra-rajwar-aa86b4230/",
      // email: "jitendra.rajwar@bitsindri.ac.in"
    },
    {
      name: "Aditya",
      position: "Editorial Head",
      image: edtorl,
      linkedin: "https://www.linkedin.com/in/",
      // email: "aditya@bitsindri.ac.in"
    },
    {
      name: "Sumit",
      position: "Alumni Coordinator",
      image: alumini,
      linkedin: "https://www.linkedin.com/in/",
      // email: "sumit@bitsindri.ac.in"
    },
    {
      name: "Professional Head",
      position: "Professional Head",
      image: pro,
      linkedin: "https://www.linkedin.com/in/",
      // email: "professional@bitsindri.ac.in"
    },
    {
      name: "Social Head",
      position: "Social Head",
      image: sh,
      linkedin: "https://www.linkedin.com/in/",
      // email: "social@bitsindri.ac.in"
    },
    {
      name: "Sahabuddin",
      position: "Event Planning Head",
      image: eph,
      linkedin: "https://www.linkedin.com/in/",
      // email: "sahabuddin@bitsindri.ac.in"
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
              2K20 Team 2020-2021
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                2K20 Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated leaders who contributed to ACE BITS and helped build our legacy of excellence
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
              <h3 className="text-3xl font-bold text-slate-900 mb-2">17</h3>
              <p className="text-slate-600">Core Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">12+</h3>
              <p className="text-slate-600">Departments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">30+</h3>
              <p className="text-slate-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">4+</h3>
              <p className="text-slate-600">Years of Legacy</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Dynamic
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who contributed to ACE BITS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Member Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-orange-100 group-hover:ring-orange-300 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        2K20 Team
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.position}</p>

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
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 group-hover:scale-105"
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

      {/* Team Legacy */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The contributions and achievements of our 2K20 team continue to inspire us today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Foundation</h3>
              <p className="text-gray-300">
                Contributed to the structure and values that help define ACE BITS
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Introduced innovative approaches to student organization management
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Set high standards for academic and professional development
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team2k20;
















