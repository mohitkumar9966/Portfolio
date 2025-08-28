import React from 'react';
import { Code2, Camera, BookOpen, Gamepad2, Music, Plane } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Coding & DSA",
      description: "Passionate about solving algorithmic problems and competitive programming",
      icon: <Code2 className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tech Content",
      description: "Staying updated with latest tech trends and watching educational content",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Gaming",
      description: "Enjoying strategic games and exploring virtual worlds",
      icon: <Gamepad2 className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Traveling",
      description: "Exploring new places and experiencing different cultures",
      icon: <Plane className="h-8 w-8" />,
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hobbies & Interests
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beyond coding, I enjoy exploring various interests that fuel creativity and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="text-center space-y-4">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {hobby.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {hobby.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-400">Problems Solved on LeetCode</p>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-gray-400">Tech Articles Read Weekly</p>
            </div> */}
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                7+
              </div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;