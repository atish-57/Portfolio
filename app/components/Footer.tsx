import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <Toaster position="top-center" />
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to elevate <span className="text-purple">your</span> digital vision?
        </h1>
        <p className="text-white-500 md:mt-10 my-5 text-center">
        Let's connect and explore how we can turn your ideas into impactful digital experiences.

        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[600px] mt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue-500/20 rounded-2xl blur-3xl -z-10" />
          <div className="backdrop-blur-sm bg-black-200/30 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col group">
                <label htmlFor="name" className="text-white-500 mb-2 text-sm font-medium tracking-wide group-focus-within:text-purple transition-colors">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-200/50 border border-white/10 rounded-xl p-4 text-white-500 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 placeholder:text-white/30"
                    placeholder="Your name"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
              <div className="flex flex-col group">
                <label htmlFor="email" className="text-white-500 mb-2 text-sm font-medium tracking-wide group-focus-within:text-purple transition-colors">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-200/50 border border-white/10 rounded-xl p-4 text-white-500 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 placeholder:text-white/30"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-8 group">
              <label htmlFor="message" className="text-white-500 mb-2 text-sm font-medium tracking-wide group-focus-within:text-purple transition-colors">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black-200/50 border border-white/10 rounded-xl p-4 text-white-500 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 resize-none placeholder:text-white/30"
                  placeholder="Your message..."
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
            <div className="flex justify-center" onClick={handleSubmit}>
              <MagicButton
                title="Send Message"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Atish Ranjan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform duration-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;