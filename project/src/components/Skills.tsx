import React from 'react';
import { Code, Database, Globe, Cpu, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 60 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "C++", level: 95 },
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <GitBranch className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name : "Cursor" , level: 70},
        { name : "IntelliJ IDEA" , level: 80},
        { name: "AWS", level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set covering full-stack development and modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center space-x-3 mb-8">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST APIs', 'AWS Cloud', 'DSA','Webpack', 'Selenium', 'Material-UI', 'Bootstrap'].map((tech, index) => (
              <span key={index} className="bg-gray-700 border border-gray-600 text-gray-300 px-4 py-2 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;