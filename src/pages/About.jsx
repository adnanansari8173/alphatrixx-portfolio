import React from "react";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa"; // Importing only the icons needed

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Faisal Ansari",
      role: "Software Engineer",
      email: "me.developer.faisal@gmail.com",
      linkedIn: "https://www.linkedin.com/in/mefaisalansari/",
      image:
        "https://media.istockphoto.com/id/648979956/photo/portrait-of-male-graphic-designer-working-on-laptop.jpg?s=2048x2048&w=is&k=20&c=JmKqyLsHn8CrtEtWkm6zXAv5qemRUIZiGYlgGN1USOI=", // Placeholder image
    },
    {
      id: 2,
      name: "Adnan Ansari",
      role: "UI/UX Designer",
      email: "adnanansari8173@gmail.com",
      linkedIn: "https://www.linkedin.com/in/itsadnan/",
      image:
        "https://media.istockphoto.com/id/536686644/photo/earning-success-through-hard-work.jpg?s=2048x2048&w=is&k=20&c=Yj4kobylRKhoFEYSRki7vpelA67cytKi5rWxx9ARlYs=",
    },
    {
      id: 3,
      name: "Shahid Khan",
      role: "Project Manager",
      email: "shahidkhan09112001@gmail.com",
      linkedIn: "https://www.linkedin.com/in/shahidkhan0911/",
      image:
        "https://media.istockphoto.com/id/2105378314/photo/confident-businessman-working-late-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=gybtJzE6lBYGomSCqvkGrDtISFFKINoYvBlKS5bANKE=",
    },
    {
      id: 4,
      name: "Faisal Ansari",
      role: "Graphic Designer",
      email: "me.developer.faisal@gmail.com",
      linkedIn: "https://www.linkedin.com/in/mefaisalansari/",
      image:
        "https://media.istockphoto.com/id/648979956/photo/portrait-of-male-graphic-designer-working-on-laptop.jpg?s=2048x2048&w=is&k=20&c=JmKqyLsHn8CrtEtWkm6zXAv5qemRUIZiGYlgGN1USOI=",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Meet our dedicated team of professionals.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-center">
                {member.name}
              </h2>
              <p className="text-lg text-gray-600 text-center mb-4">
                {member.role}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-500 hover:underline"
                >
                  <FaRegEnvelope className="text-2xl" />
                </a>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
