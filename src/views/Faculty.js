import React from "react";
import { Container } from "react-bootstrap";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Star,
  Mail,
  MapPin,
  Building,
  BookOpen,
  Target
} from "lucide-react";

// Import faculty photos
import jituhod from "../assets/images/faculty/jituhod.webp";
import prafullaSharma from "../assets/images/faculty/prafulla sharma .jpg";
import vikrama_pandey from "../assets/images/faculty/vikrama-pandey.webp";
import sanjay_shukla from "../assets/images/faculty/sanjay_shukla.webp";
import uksingh from "../assets/images/faculty/uksingh.webp";
import ranvijay from "../assets/images/faculty/ranvijay.webp";
import mayaray from "../assets/images/faculty/mayaray.webp";
import bdyadav from "../assets/images/faculty/bdyadav.webp";
import sheokumar from "../assets/images/faculty/sheokumar.webp";
import sarojmeena from "../assets/images/faculty/sarojmeena.webp";
import sumitkumar from "../assets/images/faculty/sumitkumar.webp";
import prakash from "../assets/images/faculty/prakash.webp";
import nishikant from "../assets/images/faculty/nishikant.webp";
import prashantmalvia from "../assets/images/faculty/prashantmalvia.webp";
import nipendas from "../assets/images/faculty/nipendas.webp";
import komal from "../assets/images/faculty/komal.webp";
import iqbal_sheikh from "../assets/images/faculty/iqbal_sheikh.webp";
import abhijeet_anand from "../assets/images/faculty/abhijeet_anand.webp";

const Faculty = () => {
  const facultyData = [
    {
      name: "Dr. Prafulla Sharma",
      position: "Head of Department",
      image: prafullaSharma,
      email: "prafulla.sharma@bitsindri.ac.in",
      specialization: "Structural Engineering"
    },
    {
      name: "Dr. Jitu Kujur",
      position: "Professor",
      image: jituhod,
      email: "jitu.kujur@bitsindri.ac.in",
      specialization: "Structural Engineering"
    },
    {
      name: "Dr. Vikrama Pandey",
      position: "Professor",
      image: vikrama_pandey,
      email: "vikrama.pandey@bitsindri.ac.in",
      specialization: "Geotechnical Engineering"
    },
    {
      name: "Dr. Sanjay Shukla",
      position: "Adjunct Professor",
      image: sanjay_shukla,
      email: "sanjay.shukla@bitsindri.ac.in",
      specialization: "Transportation Engineering"
    },
    {
      name: "Dr. U.K. Singh",
      position: "Professor",
      image: uksingh,
      email: "uk.singh@bitsindri.ac.in",
      specialization: "Water Resources Engineering"
    },
    {
      name: "Dr. Ranvijay Kumar",
      position: "Professor",
      image: ranvijay,
      email: "ranvijay.kumar@bitsindri.ac.in",
      specialization: "Environmental Engineering"
    },
    {
      name: "Dr. Maya Ray",
      position: "Associate Professor",
      image: mayaray,
      email: "maya.ray@bitsindri.ac.in",
      specialization: "Construction Management"
    },
    {
      name: "Dr. B.D. Yadav",
      position: "Assistant Professor",
      image: bdyadav,
      email: "bd.yadav@bitsindri.ac.in",
      specialization: "Structural Analysis"
    },
    {
      name: "Dr. Sheo Kumar",
      position: "Assistant Professor",
      image: sheokumar,
      email: "sheo.kumar@bitsindri.ac.in",
      specialization: "Surveying & GIS"
    },
    {
      name: "Dr. Saroj Meena",
      position: "Assistant Professor",
      image: sarojmeena,
      email: "saroj.meena@bitsindri.ac.in",
      specialization: "Hydraulics & Irrigation"
    },
    {
      name: "Dr. Sumit Kumar",
      position: "Assistant Professor",
      image: sumitkumar,
      email: "sumit.kumar@bitsindri.ac.in",
      specialization: "Concrete Technology"
    },
    {
      name: "Dr. Prakash Kumar",
      position: "Assistant Professor",
      image: prakash,
      email: "prakash.kumar@bitsindri.ac.in",
      specialization: "Soil Mechanics"
    },

    {
      name: "Dr. Nishikant Kumar",
      position: "Assistant Professor",
      image: nishikant,
      email: "nishikant.kumar@bitsindri.ac.in",
      specialization: "Building Materials"
    },
    {
      name: "Dr. Prashant Malvia",
      position: "Assistant Professor",
      image: prashantmalvia,
      email: "prashant.malvia@bitsindri.ac.in",
      specialization: "Transportation Planning"
    },
    {
      name: "Dr. Nipen Das",
      position: "Assistant Professor",
      image: nipendas,
      email: "nipen.das@bitsindri.ac.in",
      specialization: "Geotechnical Engineering"
    },
    {
      name: "Dr. Komal Kumari",
      position: "Assistant Professor",
      image: komal,
      email: "komal.kumari@bitsindri.ac.in",
      specialization: "Environmental Science"
    },
    {
      name: "Dr. Iqbal Sheikh",
      position: "Assistant Professor",
      image: iqbal_sheikh,
      email: "iqbal.sheikh@bitsindri.ac.in",
      specialization: "Structural Dynamics"
    },
    {
      name: "Dr. Abhijeet Anand",
      position: "Assistant Professor",
      image: abhijeet_anand,
      email: "abhijeet.anand@bitsindri.ac.in",
      specialization: "Construction Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <GraduationCap className="w-4 h-4 mr-2" />
              Civil Engineering Department
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Distinguished Faculty
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Experienced professors and researchers dedicated to shaping the future of civil engineering
            </p>
          </div>
        </Container>
      </div>



      {/* Faculty Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Expert
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Faculty Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet our distinguished professors who bring years of experience and expertise to civil engineering education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {facultyData.map((faculty, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Faculty Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {faculty.position}
                      </div>
                    </div>
                  </div>

                  {/* Faculty Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {faculty.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">{faculty.position}</p>
                    <p className="text-slate-600 text-sm mb-3">{faculty.specialization}</p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{faculty.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Department Excellence */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Department
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our faculty's commitment to academic excellence and research innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research</h3>
              <p className="text-gray-300">
                Cutting-edge research in structural, geotechnical, and environmental engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-gray-300">
                Comprehensive curriculum designed for industry-ready civil engineers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Modern laboratories and state-of-the-art facilities for practical learning
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Faculty;
