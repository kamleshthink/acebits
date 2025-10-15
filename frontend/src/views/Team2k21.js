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

import suman_topo from "../assets/images/team 2k21/suman_topo.jpg";
import ashish_jha from "../assets/images/team 2k21/ashish_jha.jpg";
import amarnath from "../assets/images/team 2k21/amarnath.jpg";
import sanya_deo from "../assets/images/team 2k21/sanya_deo.jpg";
import princemichal from "../assets/images/team 2k21/princemichal.jpg";
import shrutiroy from "../assets/images/team 2k21/shrutiroy.jpg";
import rudra from "../assets/images/team 2k21/rudra.jpg";
import ajaymahato from "../assets/images/team 2k21/ajaymahato.jpg";
import gautam from "../assets/images/team 2k21/Gautam.jpg";
import mehartalat from "../assets/images/team 2k21/mehartalat.jpg";
import abhipriya from "../assets/images/team 2k21/abhipriya.jpg";
import ayushi from "../assets/images/team 2k21/ayushi.jpg";
import sakshi from "../assets/images/team 2k21/sakshi.jpg";
import anurag from "../assets/images/team 2k21/anurag.jpg";
import vicky from "../assets/images/team 2k21/vicky.jpg";
import dimple from "../assets/images/team 2k21/dimple.jpg";
import sagarsaw from "../assets/images/team 2k21/sagarsaw.jpg";
import shivam from "../assets/images/team 2k21/shivam.jpg";
import khusboo from "../assets/images/team 2k21/khusboo.jpg";
import sakshidhan from "../assets/images/team 2k21/sakshidhan.jpg";
import rajshree from "../assets/images/team 2k21/rajshree.jpg";
import aditya from "../assets/images/team 2k21/adityanand.jpg";
import sagar from "../assets/images/team 2k21/SagarSaurabh.jpg";
import laxmi from "../assets/images/team 2k21/LakshmiKumari.jpg";
import kunal from "../assets/images/team 2k21/kunal.jpg";
import prabhat from "../assets/images/team 2k21/prabhat.jpg";

const Team2k21 = () => {
  const teamData = [
    {
      name: "Ashish Jha",
      position: "Counselling Team",
      image: ashish_jha,
      linkedin: "https://linkedin.com/in/ashish-jha",
      // email: "ashish.jha@bitsindri.ac.in"
    },
    {
      name: "Amarnath",
      position: "Operational Team",
      image: amarnath,
      linkedin: "https://linkedin.com/in/amarnath",
      // email: "amarnath@bitsindri.ac.in"
    },
    {
      name: "Sanya Deo",
      position: "Operational Team",
      image: sanya_deo,
      linkedin: "https://linkedin.com/in/sanya-deo",
      // email: "sanya.deo@bitsindri.ac.in"
    },
    {
      name: "Prince Michael",
      position: "Industrial relation Team",
      image: princemichal,
      linkedin: "https://linkedin.com/in/prince-michael",
      // email: "prince.michael@bitsindri.ac.in"
    },
    {
      name: "Shruti Roy",
      position: "Industrial relation Team",
      image: shrutiroy,
      linkedin: "https://linkedin.com/in/shruti-roy",
      // email: "shruti.roy@bitsindri.ac.in"
    },
    {
      name: "Rudra",
      position: "Alumni relation Team",
      image: rudra,
      linkedin: "https://linkedin.com/in/rudra",
      // email: "rudra@bitsindri.ac.in"
    },
    {
      name: "Ajay Mahato",
      position: "Designing Team",
      image: ajaymahato,
      linkedin: "https://linkedin.com/in/ajay-mahato",
      // email: "ajay.mahato@bitsindri.ac.in"
    },
    {
      name: "Gautam",
      position: "Designing Team",
      image: gautam,
      linkedin: "https://linkedin.com/in/gautam",
      // email: "gautam@bitsindri.ac.in"
    },
    {
      name: "Mehar Talat",
      position: "Designing Team",
      image: mehartalat,
      linkedin: "https://linkedin.com/in/mehar-talat",
      // email: "mehar.talat@bitsindri.ac.in"
    },
    {
      name: "Abhipriya",
      position: "Editorial Team",
      image: abhipriya,
      linkedin: "https://linkedin.com/in/abhipriya",
      // email: "abhipriya@bitsindri.ac.in"
    },
    {
      name: "Ayushi",
      position: "Editorial Team",
      image: ayushi,
      linkedin: "https://linkedin.com/in/ayushi",
      // email: "ayushi@bitsindri.ac.in"
    },
    {
      name: "Sakshi",
      position: "Research & Application",
      image: sakshi,
      linkedin: "https://linkedin.com/in/sakshi",
      // email: "sakshi@bitsindri.ac.in"
    },
    {
      name: "Anurag",
      position: "Ideation Team",
      image: anurag,
      linkedin: "https://linkedin.com/in/anurag",
      // email: "anurag@bitsindri.ac.in"
    },
    {
      name: "Vicky",
      position: "Public Relation Team",
      image: vicky,
      linkedin: "https://linkedin.com/in/vicky",
      // email: "vicky@bitsindri.ac.in"
    },
    {
      name: "Dimple",
      position: "Public Relation Team",
      image: dimple,
      linkedin: "https://linkedin.com/in/dimple",
      // email: "dimple@bitsindri.ac.in"
    },
    {
      name: "Sagar Saw",
      position: "GATe-ESE Forum",
      image: sagarsaw,
      linkedin: "https://linkedin.com/in/sagar-saw",
      // email: "sagar.saw@bitsindri.ac.in"
    },
    {
      name: "Shivam",
      position: "Ideation Team",
      image: shivam,
      linkedin: "https://linkedin.com/in/shivam",
      // email: "shivam@bitsindri.ac.in"
    },
    {
      name: "Khushboo",
      position: "Research & Application",
      image: khusboo,
      linkedin: "https://linkedin.com/in/khushboo",
      // email: "khushboo@bitsindri.ac.in"
    },
    {
      name: "Sakshi Dhan",
      position: "Research & Application",
      image: sakshidhan,
      linkedin: "https://linkedin.com/in/sakshi-dhan",
      // email: "sakshi.dhan@bitsindri.ac.in"
    },
    {
      name: "Rajshree",
      position: "Alumni relation Team",
      image: rajshree,
      linkedin: "https://linkedin.com/in/rajshree",
      // email: "rajshree@bitsindri.ac.in"
    },
    {
      name: "Aditya Anand",
      position: "Social Media Team",
      image: aditya,
      linkedin: "https://linkedin.com/in/aditya-anand",
      // email: "aditya.anand@bitsindri.ac.in"
    },
    {
      name: "Sagar Saurabh",
      position: "Social Media Team",
      image: sagar,
      linkedin: "https://linkedin.com/in/sagar-saurabh",
      // email: "sagar.saurabh@bitsindri.ac.in"
    },
    {
      name: "Lakshmi Kumari",
      position: "Operational Team",
      image: laxmi,
      linkedin: "https://linkedin.com/in/lakshmi-kumari",
      // email: "lakshmi.kumari@bitsindri.ac.in"
    },
    {
      name: "Kunal",
      position: "Alumni relation Team",
      image: kunal,
      linkedin: "https://linkedin.com/in/kunal",
      // email: "kunal@bitsindri.ac.in"
    },
    {
      name: "Prabhat",
      position: "Marketing Team",
      image: prabhat,
      linkedin: "https://linkedin.com/in/prabhat",
      // email: "prabhat@bitsindri.ac.in"
    },
    {
      name: "Suman Toppo",
      position: "CoEditorial Team",
      image: suman_topo,
      linkedin: "https://linkedin.com/in/suman-toppo",
      // email: "suman.toppo@bitsindri.ac.in"
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
              2K21 Team 2021-2022
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Dynamic Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated leaders and coordinators who drove ACE BITS to new heights of success
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
              <h3 className="text-3xl font-bold text-slate-900 mb-2">25</h3>
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
              <h3 className="text-3xl font-bold text-slate-900 mb-2">60+</h3>
              <p className="text-slate-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">3+</h3>
              <p className="text-slate-600">Years of Success</p>
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
              Meet the talented individuals who made ACE BITS a success through their dedication and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden group-hover:border-purple-200">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Member Image */}
                  <div className="relative mb-6 z-10">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300 group-hover:scale-105">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        2K21 Team
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                      {member.position}
                    </div>

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
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
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

      {/* Team Achievements */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The milestones and successes achieved by our dedicated team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Achieved outstanding results in technical competitions and events
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Introduced new technologies and modern approaches to civil engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leadership</h3>
              <p className="text-gray-300">
                Demonstrated exceptional leadership skills and team management
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team2k21;
