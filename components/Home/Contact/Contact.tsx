import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              In Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-w-7xl mx-auto items-start gap-12">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;