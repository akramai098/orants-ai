"use client";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      title: "Natural Language Processing",
      desc: "Unlock human-like understanding from text and voice. Our NLP services power everything from intelligent chatbots to deep sentiment analysis, transforming how you interact with data.",
      button: "Get Started",
    },
    {
      title: "Computer Vision",
      desc: "Empower your systems to see and interpret the world. From object detection to facial recognition, our computer vision solutions provide critical insights from images and video streams.",
      button: "Explore Use Cases",
    },
    {
      title: "Predictive Analytics",
      desc: "Anticipate market trends and customer behavior with high-accuracy predictive models, enabling better business decisions.",
      button: "Learn More",
    },
    {
      title: "Data Automation",
      desc: "Automate data collection, processing, and analysis to boost efficiency and reduce human error in enterprise workflows.",
      button: "Explore Solutions",
    },
    {
      title: "Machine Learning",
      desc: "Deploy self-improving algorithms that learn from data to make smarter decisions over time for your business operations.",
      button: "See Capabilities",
    },
    {
      title: "AI for Business Intelligence",
      desc: "Leverage AI-powered analytics to gain insights, optimize performance, and accelerate your digital transformation journey.",
      button: "Get Demo",
    },
    {
      title: "Speech Recognition",
      desc: "Our advanced speech recognition converts spoken language into accurate, actionable data for automation and analytics.",
      button: "Try Now",
    },
    {
      title: "AI Chatbots",
      desc: "Enhance customer engagement with smart chatbots that understand context, provide accurate responses, and learn over time.",
      button: "Build Chatbot",
    },
    {
      title: "Data Visualization",
      desc: "Turn raw data into meaningful insights using our interactive AI-driven dashboards that make analytics intuitive and clear.",
      button: "View Dashboard",
    },
    {
      title: "AI-Powered Automation",
      desc: "Streamline repetitive tasks and improve accuracy using automation powered by machine intelligence and deep learning.",
      button: "Automate Today",
    },
    {
      title: "Recommendation Systems",
      desc: "Deliver personalized content and product recommendations powered by deep learning and behavioral analytics.",
      button: "Explore Engine",
    },
    {
      title: "Edge AI Solutions",
      desc: "Deploy AI at the edge for real-time decision-making and faster responses without relying on cloud connectivity.",
      button: "Learn More",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <div className="text-xl font-bold text-cyan-400">Orants AI</div>
        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About Us</li>
          <li className="hover:text-cyan-400 cursor-pointer">Services</li>
          <li className="hover:text-cyan-400 cursor-pointer">Technology</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          Request a Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          Transforming Businesses with AI
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Empowering organizations with intelligent automation, data-driven insights,
          and advanced AI capabilities tailored to your unique needs.
        </p>
      </section>

      {/* Alternating Sections */}
      <div className="flex flex-col gap-24 px-10 md:px-24 pb-24">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold text-white">{sec.title}</h2>
              <p className="text-gray-400">{sec.desc}</p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-semibold">
                {sec.button}
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-56 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
                <Image
                  src="/vercel.svg"
                  alt="AI Icon"
                  width={60}
                  height={60}
                  className="opacity-70 invert"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
        <p>© 2024 Orants AI. All rights reserved.</p>
        <p className="mt-2">Innovating the future with intelligent AI solutions that empower businesses and drive progress.</p>
      </footer>
    </main>
  );
}
