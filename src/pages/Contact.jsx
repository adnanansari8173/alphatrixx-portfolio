import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          We'd love to hear from you! Send us a message or visit us at our
          office.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info and Location */}
        <div>
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>

            <p className="text-lg text-gray-700 mb-4">
              <strong>Address:</strong> Marol, Andheri
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Phone:</strong> (+91) 8173940380
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Email:</strong> adnanansari8173@gmail.com
            </p>
          </div>

          {/* Google Maps Location */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            <div className="h-72">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8049936974435!2d72.88344981490746!3d19.1160469870651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7cd99fffd03%3A0x70185afed13493f!2sMarol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1638264489923!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
