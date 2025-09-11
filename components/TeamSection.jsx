
'use client'
import { Linkedin, Mail } from 'lucide-react';


const team = [
  {
    name: 'Dr. Jane Smith',
    role: 'Chief Scientific Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'PhD in Agricultural Sciences with over 15 years of experience in product development.',
    linkedin: '#',
    email: 'jane@magnetar.com'
  },
  {
    name: 'John Davis',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in agricultural supply chain management and operations optimization.',
    linkedin: '#',
    email: 'john@magnetar.com'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Lead Researcher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Specialized in biological pest control and sustainable farming practices.',
    linkedin: '#',
    email: 'maria@magnetar.com'
  },
  {
    name: 'Robert Kim',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Dedicated to communicating the value of sustainable agriculture to farmers and stakeholders.',
    linkedin: '#',
    email: 'robert@magnetar.com'
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Meet Our <span className="text-primary-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to agricultural innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRlYW0gTWVtYmVyPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
