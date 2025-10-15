import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Microscope, 
  Cpu, 
  Building, 
  Layers, 
  Droplets, 
  Zap, 
  ChevronRight, 
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Wrench,
  Beaker,
  Activity,
  Eye
} from 'lucide-react';

// Import laboratory images
import Str from "../assets/images/laboratory/Structural_lab.png";
import Computor from "../assets/images/laboratory/Computor_lab.png";
import Concrete from "../assets/images/laboratory/Concrete_lab.png";
import Soil from "../assets/images/laboratory/3.png";
import Environmental from "../assets/images/laboratory/4.png";

const Lab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [isLabDetailOpen, setIsLabDetailOpen] = useState(false);

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const openLabDetail = (lab) => {
    setSelectedLab(lab);
    setIsLabDetailOpen(true);
  };

  const closeLabDetail = () => {
    setSelectedLab(null);
    setIsLabDetailOpen(false);
  };

  const laboratories = [
    {
      id: 1,
      name: "STRUCTURAL LAB",
      description: "Advanced structural analysis and testing facility with state-of-the-art equipment for strength, fatigue resistance, and safety analysis of various structures.",
      image: Str,
      icon: Building,
      equipment: ["Universal Testing Machine", "Dial Gauge", "Drawing Board", "Load Testing Apparatus"],
      applications: ["Structure Analysis", "Material Testing", "Safety Assessment", "Research Projects"],
      color: "from-blue-500 to-cyan-500",
      detailedInfo: {
        overview: "The Structural Laboratory is a state-of-the-art facility designed to provide comprehensive understanding of structural behavior, material properties, and engineering principles. This laboratory serves as the backbone for civil engineering education and research at BIT Sindri.",
        objectives: [
          "To provide hands-on experience in structural analysis and testing",
          "To understand the behavior of different structural materials under various loads",
          "To develop skills in using modern testing equipment",
          "To conduct research on innovative structural systems"
        ],
        detailedEquipment: [
          {
            name: "Universal Testing Machine (UTM)",
            description: "High-capacity machine for testing tensile, compressive, and flexural strength of materials",
            capacity: "Up to 2000 kN",
            applications: ["Concrete testing", "Steel reinforcement testing", "Composite material analysis"]
          },
          {
            name: "Dial Gauge System",
            description: "Precision instruments for measuring minute deformations and deflections",
            accuracy: "±0.01mm",
            applications: ["Deflection measurement", "Settlement analysis", "Strain monitoring"]
          },
          {
            name: "Load Testing Apparatus",
            description: "Specialized equipment for applying controlled loads to structural elements",
            range: "Variable load application",
            applications: ["Beam testing", "Column analysis", "Joint behavior study"]
          }
        ],
        experiments: [
          "Compression test on concrete cubes",
          "Tensile test on steel reinforcement",
          "Flexural test on concrete beams",
          "Load-deflection analysis of structures",
          "Failure pattern analysis",
          "Material characterization studies"
        ],
        researchAreas: [
          "High-performance concrete development",
          "Fiber-reinforced composites",
          "Seismic behavior of structures",
          "Sustainable construction materials"
        ]
      }
    },
    {
      id: 2,
      name: "CEMENT & CONCRETE TECHNOLOGY LAB",
      description: "Comprehensive concrete and materials testing laboratory for determining physical properties of construction materials including cement, aggregates, and concrete mix design.",
      image: Concrete,
      icon: Layers,
      equipment: ["Compression Testing Machine", "Slump Cone", "Vibratory Table", "Cube Molds"],
      applications: ["Mix Design", "Strength Testing", "Quality Control", "Material Analysis"],
      color: "from-green-500 to-emerald-500",
      detailedInfo: {
        overview: "The Cement & Concrete Technology Laboratory is equipped with advanced testing equipment for comprehensive analysis of cement, aggregates, and concrete properties. This facility plays a crucial role in developing sustainable and high-performance concrete mixtures.",
        objectives: [
          "To study the properties of cement and its various types",
          "To understand aggregate characteristics and grading",
          "To design concrete mixes for different applications",
          "To evaluate concrete strength and durability parameters"
        ],
        detailedEquipment: [
          {
            name: "Compression Testing Machine",
            description: "Digital compression testing machine for concrete cubes and cylinders",
            capacity: "Up to 3000 kN",
            applications: ["Concrete cube testing", "Cylinder testing", "Mortar strength analysis"]
          },
          {
            name: "Slump Cone Apparatus",
            description: "Standard equipment for measuring concrete workability",
            accuracy: "Standard ASTM specifications",
            applications: ["Workability testing", "Mix design validation", "Quality control"]
          },
          {
            name: "Vibratory Table",
            description: "Mechanical vibration system for concrete compaction",
            range: "Variable frequency control",
            applications: ["Concrete compaction", "Density testing", "Void content analysis"]
          }
        ],
        experiments: [
          "Cement fineness test (Blaine method)",
          "Standard consistency test",
          "Setting time determination",
          "Compressive strength of concrete",
          "Slump test for workability",
          "Aggregate gradation analysis"
        ],
        researchAreas: [
          "Green concrete development",
          "Self-compacting concrete",
          "Recycled aggregate concrete",
          "High-strength concrete mixtures"
        ]
      }
    },
    {
      id: 3,
      name: "TRANSPORTATION/HIGHWAY ENGINEERING LAB",
      description: "Quality assurance and control testing facility for roads and traffic engineering with focus on road improvement plans and safety enhancement.",
      image: Environmental,
      icon: Zap,
      equipment: ["Los Angeles Machine", "Impact Testing Machine", "CBR Testing", "Marshall Apparatus"],
      applications: ["Road Quality Testing", "Traffic Engineering", "Pavement Design", "Safety Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "ADVANCED SOIL MECHANICS LAB",
      description: "Geotechnical engineering laboratory providing comprehensive understanding of soil and rock mechanics for foundation design and construction applications.",
      image: Soil,
      icon: Microscope,
      equipment: ["Casagrande Apparatus", "Pycnometer", "Triaxial Testing", "Consolidation Test"],
      applications: ["Foundation Design", "Soil Analysis", "Stability Assessment", "Research"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "SOIL MECHANICS LAB",
      description: "Fundamental soil testing laboratory for analyzing texture, density, moisture, compaction, and strength properties essential for civil engineering projects.",
      image: Soil,
      icon: Beaker,
      equipment: ["Standard Proctor", "Direct Shear Test", "Liquid Limit Device", "Sieve Analysis"],
      applications: ["Soil Classification", "Compaction Testing", "Shear Strength", "Index Properties"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "ENVIRONMENTAL ENGINEERING LAB",
      description: "Advanced environmental analysis laboratory equipped with modern instruments for water, wastewater, and air quality testing and environmental research.",
      image: Environmental,
      icon: Droplets,
      equipment: ["pH Meter", "BOD Incubator", "Turbidity Meter", "Spectrophotometer"],
      applications: ["Water Quality Testing", "Wastewater Analysis", "Air Quality Monitoring", "Environmental Research"],
      color: "from-teal-500 to-green-500"
    },
    {
      id: 7,
      name: "COMPUTER AIDED DESIGN LAB",
      description: "State-of-the-art CADD laboratory with latest design software for creative and innovative engineering solutions in civil engineering design.",
      image: Computor,
      icon: Cpu,
      equipment: ["AutoCAD Workstations", "MIDAS CIVIL", "Civil 3D", "High-Performance PCs"],
      applications: ["Structural Design", "3D Modeling", "Project Visualization", "Technical Drawing"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 8,
      name: "BUILDING MATERIALS & CONSTRUCTION LAB",
      description: "Essential laboratory for material analysis with crucial equipment for comprehensive testing of building materials and construction technologies.",
      image: Concrete,
      icon: Wrench,
      equipment: ["Compression Testing Machine", "Electronic Balance", "Specific Gravity Apparatus", "Water Absorption Test"],
      applications: ["Material Testing", "Quality Assessment", "Construction Technology", "Standards Compliance"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Total Labs", value: "8+", icon: Building },
    { label: "Equipment Units", value: "150+", icon: Wrench },
    { label: "Students Trained", value: "500+", icon: Users },
    { label: "Research Projects", value: "25+", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Microscope className="w-4 h-4 mr-2" />
              Advanced Laboratory Facilities
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              <span className="block">CIVIL ENGINEERING</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                LABORATORIES
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 px-4">
              State-of-the-art laboratory facilities equipped with modern instruments and equipment for comprehensive learning and advanced research in civil engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Activity className="w-5 h-5 mr-2" />
                Explore Labs
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                <Award className="w-5 h-5 mr-2" />
                View Equipment
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Laboratory Grid Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container>
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Laboratory
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive range of specialized laboratories designed to provide hands-on experience and advanced research opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {laboratories.map((lab, index) => (
              <div key={lab.id} className="group bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Lab Icon & Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${lab.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <lab.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {lab.name}
                      </h3>
                      <div className={`w-8 sm:w-12 h-1 bg-gradient-to-r ${lab.color} rounded-full`}></div>
                    </div>
                  </div>

                  {/* Lab Image - Clickable */}
                  <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer" onClick={() => openImageModal(lab.image, lab.name)}>
                    <img 
                      src={lab.image} 
                      alt={lab.name}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'}}></div>
                    {/* Click Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                      <div className="bg-white rounded-full p-3">
                        <Eye className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {lab.description}
                  </p>

                  {/* Equipment & Applications */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center text-sm sm:text-base">
                        <Wrench className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                        Key Equipment
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {lab.equipment.slice(0, 2).map((item, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full font-medium">
                            {item}
                          </span>
                        ))}
                        {lab.equipment.length > 2 && (
                          <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full font-medium">
                            +{lab.equipment.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center text-sm sm:text-base">
                        <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {lab.applications.slice(0, 2).map((item, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 text-xs sm:text-sm rounded-full font-medium">
                            {item}
                          </span>
                        ))}
                        {lab.applications.length > 2 && (
                          <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full font-medium">
                            +{lab.applications.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => openLabDetail(lab)}
                      className={`inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-2`}
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Explore Our
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Laboratory Facilities?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join us for a guided tour of our state-of-the-art laboratories and discover the advanced equipment and research opportunities available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Users className="w-5 h-5 mr-2" />
                Schedule Lab Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                <Award className="w-5 h-5 mr-2" />
                Contact Laboratory
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Lab Detail Modal */}
      {isLabDetailOpen && selectedLab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
          <div className="relative max-w-6xl w-full max-h-screen overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closeLabDetail}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">
                <span className="text-sm font-medium">Close</span>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${selectedLab.color} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                  <selectedLab.icon className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{selectedLab.name}</h1>
                <div className={`w-24 h-1 bg-gradient-to-r ${selectedLab.color} rounded-full mx-auto`}></div>
              </div>

              {/* Lab Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={selectedLab.image} 
                  alt={selectedLab.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}>
                  <h3 className="text-white text-2xl font-bold">{selectedLab.name}</h3>
                </div>
              </div>

              {/* Overview Section */}
              {selectedLab.detailedInfo && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Building className="w-6 h-6 mr-3 text-blue-500" />
                      Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedLab.detailedInfo.overview}
                    </p>
                  </div>

                  {/* Objectives */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-3 text-green-500" />
                      Laboratory Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedLab.detailedInfo.objectives?.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Equipment */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Wrench className="w-6 h-6 mr-3 text-purple-500" />
                      Equipment & Instrumentation
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {selectedLab.detailedInfo.detailedEquipment?.map((equipment, index) => (
                        <div key={index} className="bg-purple-50 rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{equipment.name}</h3>
                          <p className="text-gray-600 mb-3">{equipment.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-purple-600">Capacity/Accuracy:</span>
                              <span className="text-sm text-gray-700">{equipment.capacity || equipment.accuracy || equipment.range}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-purple-600">Applications:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {equipment.applications?.map((app, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">
                                    {app}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experiments */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Activity className="w-6 h-6 mr-3 text-orange-500" />
                      Laboratory Experiments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedLab.detailedInfo.experiments?.map((experiment, index) => (
                        <div key={index} className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                          <p className="text-gray-800 font-medium">{experiment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Research Areas */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3 text-teal-500" />
                      Research Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedLab.detailedInfo.researchAreas?.map((area, index) => (
                        <div key={index} className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
                          <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                          <p className="text-gray-800 font-medium">{area}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <button 
                  onClick={closeLabDetail}
                  className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium"
                >
                  Close Details
                </button>
                <button 
                  onClick={() => openImageModal(selectedLab.image, selectedLab.name)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  View Lab Image
                </button>
              </div>
            </div>
          </div>

          {/* Background Overlay - Click to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLabDetail}
          ></div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">
                <span className="text-sm font-medium">Close</span>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Modal Header */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>

              {/* Large Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full max-h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'}}>
                  <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                  <p className="text-white text-sm mt-1 opacity-90">Click outside to close</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button 
                  onClick={closeImageModal}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium"
                >
                  Close View
                </button>
                <button 
                  onClick={() => window.open(selectedImage.image, '_blank')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  Open Full Size
                </button>
              </div>
            </div>
          </div>

          {/* Background Overlay - Click to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeImageModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Lab;