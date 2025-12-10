"use client";

import React, { useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext";

const ITServicesPage: React.FC = () => {
  const services = [
    { name: "IT Services", href: "/ventures/it-services/" },
    { name: "Digital Marketing", href: "/ventures/digital-marketing/" },
    { name: "E-commerce", href: "/ventures/e-commerce/" },
    { name: "Fintech Solutions", href: "/ventures/fintech-solutions/" },
  ];

   const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();


 useEffect(() => {
           // Get gradients for this sector
           const gradients = sectorGradients['sectorGradients'];
           
           // Set all three gradients
           setNavbarGradient(gradients.navbar);
           setPaymentGradient(gradients.payment);
           setLogoGradient(gradients.logo);
           
           // Cleanup: Reset to default
           return () => {
             const defaultGradients = sectorGradients['default'];
             setNavbarGradient(defaultGradients.navbar);
             setPaymentGradient(defaultGradients.payment);
             setLogoGradient(defaultGradients.logo);
           };
         }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to <span className="text-blue-500">Payzon</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            IT Services Excellence — Empower Your Business with Innovative Solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Ventures
                </h2>
                <div className="flex flex-col gap-6">
                  {services.map((service, index) => (
                    <Link key={index} href={service.href}>
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {service.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <Link href={"/contact"}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/bg-info-box1.jpg"
                    alt="Business People Silhouette"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <motion.svg
                      className="w-16 h-16 text-blue-300 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
                    </motion.svg>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Need Assistance?
                    </h3>
                    <div className="mb-4 flex flex-col items-center">
                      <div className="flex items-center text-white mb-2">
                        <Phone className="w-6 h-6 mr-2" />
                        <span className="text-2xl font-semibold">
                          +91 755 485 9540
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-lg mb-6">
                      Or reach out via our contact form:
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Contact</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <section className="rounded-2xl shadow-xl overflow-hidden bg-white">
              {/* IT Services Header */}
              <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 py-16 px-8">
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                  className="relative z-10 text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                      <span className="text-white font-semibold text-sm tracking-wider">
                        TECHNOLOGY EXCELLENCE
                      </span>
                    </div>
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                      IT SERVICES
                    </span>
                  </h1>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-1 w-20 bg-white/50 rounded"></div>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H14V9H16V11H12V12H15A1,1 0 0,1 16,13V16A1,1 0 0,1 15,17H11Z" />
                    </svg>
                    <div className="h-1 w-20 bg-white/50 rounded"></div>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
                    Empowering Digital Transformation Through Innovation
                  </p>
                </motion.div>
              </div>

              <div className="p-8 prose prose-lg max-w-none text-gray-800">
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At Payzon IT Services, we specialize in delivering cutting-edge IT solutions designed to help businesses build smarter, scale faster, and secure their operations in the digital era. With over 10 years of experience, our IT services are tailored to meet the unique needs of startups, enterprises, and everything in between.
                </motion.p>

                {/* Web & App Development */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Web & App Development Solutions
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=500&fit=crop&q=80"
                    alt="Web Development"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Build Smarter, Scale Faster. Our custom web and mobile app solutions are tailored to your business needs—responsive, secure, and future-ready for the digital era. We focus on creating user-centric applications using React, Next.js, Flutter, and more.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <li>Custom solutions for web and mobile applications</li>
                  <li>Responsive design for various devices</li>
                  <li>Secure and scalable architecture</li>
                </motion.ul>

                {/* B2B API Portal */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Ready-Made B2B API Portal
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=500&fit=crop&q=80"
                    alt="API Integration"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Seamless Integrations, Infinite Possibilities. Empower your business with powerful APIs for payments, verification, recharges, and more—easy integration, secure, and scalable.
                </motion.p>

                {/* Shopping Portal */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Complete Shopping Portal
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=500&fit=crop&q=80"
                    alt="E-commerce Shopping"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Shop Smarter, Experience Better. Feature-rich eCommerce portals with secure payments, smooth navigation, and personalized shopping experiences that customers love.
                </motion.p>

                {/* Cyber Security */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Cyber Security
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=500&fit=crop&q=80"
                    alt="Cybersecurity"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Fortify Your Future, Secure Your Now. Protect your business with cutting-edge cybersecurity solutions—advanced firewalls, real-time threat detection, and proactive monitoring.
                </motion.p>

                {/* KYC Verification */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  KYC Verification Services
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop&q=80"
                    alt="KYC Verification"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Trust Built Fast, Verified with Ease. Streamline KYC and compliance with secure, automated verification services powered by AI and government API integration.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <li><strong>Aadhaar Verification:</strong> Instant verification with 99.9% accuracy</li>
                  <li><strong>PAN Verification:</strong> Real-time verification</li>
                  <li><strong>GST Verification:</strong> Comprehensive GSTIN verification</li>
                  <li><strong>Live Face Verification:</strong> AI-powered biometric verification</li>
                  <li><strong>Corporate Verification:</strong> CIN, DIN verification</li>
                  <li><strong>e-KYC Services:</strong> Multi-document verification</li>
                </motion.ul>

                {/* Hosting Solutions */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Premium Hosting Solutions
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=500&fit=crop&q=80"
                    alt="Cloud Hosting"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  Enterprise-grade hosting solutions designed to power your digital success with unmatched performance and reliability.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <li><strong>Forex VPS Server:</strong> Ultra-low latency for trading</li>
                  <li><strong>Cyber Panel VPS:</strong> Lightweight with built-in security</li>
                  <li><strong>Cloud Server:</strong> Auto-scaling and global availability</li>
                  <li><strong>MS SQL Database:</strong> Enterprise-grade database servers</li>
                </motion.ul>

                {/* Portal Solutions */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  Revolutionary Portal Solutions
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop&q=80"
                    alt="Business Portal Solutions"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-base leading-relaxed mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  Ready-made portal solutions for immediate deployment. Transform your business with cutting-edge technology and seamless integration.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  <li><strong>Travel Portal:</strong> Complete booking platform</li>
                  <li><strong>Recharge Portal:</strong> Multi-operator solution</li>
                  <li><strong>Shopping Portal:</strong> Full-featured e-commerce</li>
                  <li><strong>B2B API Portal:</strong> Enterprise API management</li>
                  <li><strong>B2B Courier:</strong> Real-time tracking system</li>
                </motion.ul>

                {/* Why Choose Us */}
                <motion.h2
                  className="text-3xl font-bold text-black mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Why Choose Payzon IT Services?
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  With innovation and reliability at our core, Payzon IT Services delivers end-to-end solutions that are secure, scalable, and customized. Our expert team ensures proactive support and cutting-edge technology adoption. Whether you're a startup or an enterprise, we help you achieve digital excellence.
                </motion.p>
              </div>
            </section>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;