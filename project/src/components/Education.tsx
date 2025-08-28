import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "Bachelor's Degree",
      course: "B.Tech in Computer Science Engineering",
      institution: "KLE Dr. MS Sheshgiri College of Engineering and Technology",
      year: "2021 - 2025",
      grade: "CGPA: 8.3/10",
      description: "Specialized in Software Engineering, Data Structures, and Web Development"
    },
    {
      level: "Higher Secondary",
      course: "Class 12 - Science (PCM)",
      institution: "Kasidih High School",
      year: "2019 - 2020",
      grade: "Percentage: 75.6%",
      description: "Physics, Chemistry, Mathematics with Computer Science"
    },
    {
      level: "Secondary",
      course: "Class 10 - CBSE",
      institution: "Kasidih High School",
      year: "2017 - 2018",
      grade: "Percentage: 73%%",
      description: "All subjects with distinction in Mathematics and Science"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and qualifications that shaped my technical foundation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">{edu.course}</h4>
                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;