import React from 'react';
import { Star } from 'lucide-react';


const Skills = () => {
    const skills = [
      {
        category: "Instructional Design",
        description: "Core competencies in analyzing, designing, and implementing effective learning solutions",
        items: [
          {
            name: "Learning Needs Analysis",
            description: "Experience conducting organizational needs assessments, gap analyses, and learner persona development. Led 12+ major needs analysis projects for Fortune 500 clients."
          },
          {
            name: "Curriculum Development",
            description: "Designed and implemented comprehensive learning curricula across various industries. Specialized in competency-based curriculum design and microlearning frameworks."
          },
          {
            name: "Course Authoring",
            description: "Created over 200 hours of interactive e-learning content using modern authoring tools. Expert in scenario-based learning and adaptive learning paths."
          },
          {
            name: "Assessment Design",
            description: "Developed performance-based assessments, knowledge checks, and evaluation frameworks. Focus on authentic assessment methods and meaningful feedback systems."
          }
        ]
      },
      {
        category: "Digital Learning",
        description: "Expertise in modern learning technologies and digital content creation",
        items: [
          {
            name: "E-Learning Development",
            description: "6+ years of experience creating engaging digital learning experiences. Proficient in rapid development and responsive design principles."
          },
          {
            name: "LMS Management",
            description: "Managed enterprise-level LMS platforms, including content migration, user management, and analytics tracking. Experience with multiple LMS platforms."
          },
          {
            name: "Interactive Content",
            description: "Skilled in creating branching scenarios, simulations, and gamified learning experiences that drive engagement and retention."
          }
        ]
      },
      {
        category: "Professional Impact",
        description: "Demonstrated success in driving learning outcomes and organizational change",
        items: [
          {
            name: "Project Leadership",
            description: "Successfully led cross-functional teams in delivering complex learning programs. Managed budgets up to $500K and timelines of 6+ months."
          },
          {
            name: "Stakeholder Management",
            description: "Strong track record of collaborating with executives, SMEs, and diverse stakeholders to align learning initiatives with business goals."
          },
          {
            name: "Learning Impact",
            description: "Consistently achieved 90%+ learner satisfaction scores. Programs resulted in measurable performance improvements and positive ROI."
          }
        ]
      }
    ];
  
    return (
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Professional Expertise</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Bringing together instructional design excellence, technical expertise, and proven business impact
          </p>
          
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    {skillGroup.category}
                  </h3>
                  <p className="text-gray-600">{skillGroup.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-2">
                        <Star className="text-indigo-600 w-5 h-5 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{skill.name}</h4>
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;