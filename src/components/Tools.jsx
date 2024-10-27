import React from 'react';
import { MessageSquare, Star, FileText, Briefcase, ChevronRight, Wrench } from 'lucide-react';

const Tools = () => {
    const toolCategories = [
      {
        category: "Collaboration & Project Management",
        icon: MessageSquare,
        tools: ["Slack", "Notion", "Asana", "Jira", "Confluence"]
      },
      {
        category: "Design & Prototyping",
        icon: Star,
        tools: ["Figma", "Adobe XD", "Sketch"]
      },
      {
        category: "Content Creation & Video Editing",
        icon: FileText,
        tools: ["Camtasia", "iMovie", "Adobe Premiere Pro"]
      },
      {
        category: "Interactive Learning & eLearning",
        icon: Briefcase,
        tools: ["Articulate Storyline", "Articulate Rise"]
      },
      {
        category: "Data Analysis & Visualization",
        icon: ChevronRight,
        tools: ["Microsoft Excel", "Tableau (Basic)", "Python (Basic)"]
      },
      {
        category: "AI & Automation Tools",
        icon: Wrench,
        tools: ["OpenAI (e.g., ChatGPT)", "Zapier", "Make"]
      }
    ];
  
    return (
      <section id="tools" className="py-16 bg-white"> {/* Added bg-white for white background */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2 mb-4">
                  <category.icon className="text-indigo-600" size={24} />
                  <h3 className="text-lg font-semibold text-indigo-600">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Tools;
