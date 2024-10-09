import React from "react";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Service</h1>
            <p className="text-xl mb-8">
              We provide high-quality software, website, video editing, and
              graphic design services.
            </p>
            <a
              href="#services"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className=" bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                className="w-full h-40 object-cover mb-4 rounded-md hover:scale-105 transition-transform duration-300"
                src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Software Development"
              />
              <h3 className="text-xl font-semibold mb-2">
                Software Development
              </h3>
              <p>
                We offer custom software development to streamline your business
                processes.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                className="w-full h-40 object-cover mb-4 rounded-md hover:scale-105 transition-transform duration-300"
                src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Website Development"
              />
              <h3 className="text-xl font-semibold mb-2">
                Website Development
              </h3>
              <p>
                We design and develop responsive websites tailored to your
                business needs.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                className="w-full h-40 object-cover mb-4 rounded-md hover:scale-105 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1636971819476-aa41dc3db0d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Video Editing"
              />
              <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
              <p>
                Our team creates engaging and professional videos that bring
                your vision to life.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                className="w-full h-40 object-cover mb-4 rounded-md hover:scale-105 transition-transform duration-300"
                src="https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic Design"
              />
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p>
                We provide innovative graphic designs to make your brand stand
                out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4">
                "The website they built for us exceeded our expectations. Highly
                recommend their services!"
              </p>
              <p className="font-semibold">
                - Faisal Ansari, CEO of Tech Solutions
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4">
                "Amazing graphic design work! We are thrilled with the results."
              </p>
              <p className="font-semibold">
                {" "}
                - Adnan Ansari , Marketing Director
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4">
                "Their software development team is outstanding. They delivered
                a high-quality product on time."
              </p>
              <p className="font-semibold">- Shahid Khan, Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Contact us today to discuss your project and how we can help you
            achieve your goals.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
