import React from 'react';
import { ExternalLink, Github, Code2, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "kids Immunization Reminder System",
      description: "A comprehensive web application to track child vaccination schedules with user authentication, appointment booking, and admin dashboard. Features include form validation, user roles, and real-time notifications.",
      techStack: ["React.js", "Firebase", "Tailwind CSS", "Node.js"],
      features: ["Reminder EMAIL", "User Authentication", "Appointment Scheduling", "Admin Dashboard", "Real-time Updates"],
      liveDemo: "https://kids-immunization-reminder-system.vercel.app/homepage",
      github: "https://github.com/mohitkumar9966/Kids-Immunization-Reminder-System",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: "Career Compass",
      description: "A career guidance platform providing affordable, personalized recommendations for students from underserved communities. Features include student profiling, career path suggestions, mentorship matching, and progress tracking.",
      techStack: ["Php", "Javascript","Machine Learning", "Python", "Html","Css"],
      features: ["Student Profiling",
  "Career Path Suggestions",
  "Mentorship Matching",
  "Progress Tracking",
  "Dashboard for Insights"],
      liveDemo: "https://github.com/mohitkumar9966/Career-Compass",
      github: "https://github.com/mohitkumar9966/Career-Compass",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: "Cosmic Event Tracker",
      description: "A React web application that displays information about Near-Earth Objects (NEOs) and other cosmic events using NASA's Open APIs. Features include event listing, detailed views, authentication, filtering, sorting, and comparison graphs.",
      techStack: ["React", "TailwindCSS", "Supabase/Auth0", "NASA Open API"],
      features: [
          "User Authentication (Supabase/Auth0)",
          "Event Listing with Hazardous Indicators",
          "Event Detail View (modal/page)",
          "Filtering and Sorting (Hazardous, Date)",
          "Compare Mode with Graphs",
          "Incremental Loading & Error Handling"
        ],
      liveDemo: "https://cosmic-event-tracker-flame.vercel.app/",
      github: "https://github.com/mohitkumar9966/Cosmic_Event_Tracker",
      icon: <Code2 className="h-6 w-6" />

    },
    {
      title: "Curb Detection",
      description: "A computer vision project focused on detecting road curbs to support autonomous driving and advanced driver-assistance systems. Implements image processing and machine learning techniques for accurate curb identification.",
      techStack: ["Python", "OpenCV", "Machine Learning"],
      features: [
      "Curb detection from road images",
      "Preprocessing and feature extraction",
      "Model training and evaluation",
      "Visualization of detection results"
      ],
      liveDemo: "https://github.com/mohitkumar9966/Curb_Detection",
      github: "https://github.com/mohitkumar9966/Curb_Detection",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: "Snake Game",
      description: "A classic Snake game implemented in Python. The player controls a snake to eat food, growing longer with each bite, while avoiding collisions with the walls and itself.",
      techStack: ["Python", "Pygame"],
      features: [
        "Interactive gameplay with keyboard controls",
        "Snake grows longer when eating food",
        "Collision detection with walls and self",
        "Score tracking"
      ],
      liveDemo: "https://github.com/mohitkumar9966/Snake-Game-using-python",
      github: "https://github.com/mohitkumar9966/Snake-Game-using-python",
      icon: <Code2 className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest work and technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveDemo} 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    className="flex-1 border-2 border-gray-600 text-gray-300 px-4 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 border border-gray-700 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            View More Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;