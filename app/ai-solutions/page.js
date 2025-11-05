"use client";
import { motion } from "framer-motion";

export default function AISolutions() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Custom AI Solutions for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Empower your organization with cutting-edge AI tools, chatbots, and automation systems built to optimize efficiency and decision-making.
        </motion.p>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-8 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Predictive Analytics",
            desc: "Transform raw data into actionable insights using advanced forecasting models to make smarter business decisions.",
          },
          {
            title: "Natural Language Processing",
            desc: "Create intelligent chatbots and voice systems that understand and communicate like humans — powered by RAG and LLMs.",
          },
          {
            title: "AI-Powered Applications",
            desc: "Integrate AI into your web and mobile apps to automate processes, enhance personalization, and scale performance.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-600/30 transition-all border border-gray-800 hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-24 bg-gradient-to-t from-gray-900 to-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s design intelligent systems that redefine the way you work and innovate.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2025 Waseem Akram. All Rights Reserved.
      </footer>
    </main>
  );
}
