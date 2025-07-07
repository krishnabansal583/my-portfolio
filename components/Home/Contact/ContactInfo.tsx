import React from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      info: "krishnabansal583@gmail.com",
      link: "mailto:krishnabansal583@gmail.com",
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      info: "+91 8650156202",
      link: "tel:+91 8650156202",
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      title: "Location",
      info: "Ghaziabad",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h2>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="group">
            <a
              href={detail.link}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:bg-gray-800/70"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                {detail.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold">{detail.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                  {detail.info}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-3">
          Why Work With Me?
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400" size={16} />
            Quick response within 24 hours
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400" size={16} />
            Professional and reliable service
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400" size={16} />
            Competitive pricing and quality work
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400" size={16} />
            Ongoing support and maintenance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
