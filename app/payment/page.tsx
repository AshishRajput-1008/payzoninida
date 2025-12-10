'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, CreditCard, Building2, QrCode, Smartphone, Sparkles } from 'lucide-react';
import {Code, ShoppingCart, Wallet, TrendingUp } from 'lucide-react';

import Image from 'next/image';
import QR from "../assests/myQR.png"
import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext"

interface PaymentDetails {
  accountNumber: string;
  accountName: string;
  ifsc: string;
  upi: string;
}

interface DetailCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  field: string;
  onCopy: (value: string, field: string) => void;
  isCopied: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  field, 
  onCopy, 
  isCopied 
}) => (
  <div className="group relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            {label}
          </span>
        </div>
        <p className="text-lg font-bold text-white break-all">
          {value}
        </p>
      </div>
      <button
        onClick={() => onCopy(value, field)}
        className="p-2.5 hover:bg-cyan-500/20 rounded-xl transition-all duration-300 flex-shrink-0 hover:scale-110 active:scale-95"
        aria-label={`Copy ${label}`}
      >
        {isCopied ? (
          <Check className="w-5 h-5 text-emerald-400 animate-bounce" />
        ) : (
          <Copy className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        )}
      </button>
    </div>
  </div>
);

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string>('');
  const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

  const paymentDetails: PaymentDetails = {
    accountNumber: '2223009376343981',
    accountName: 'PAYZONINDIA PRIVATE LIMITED',
    ifsc: 'UTIB000RAZP',
    upi: 'payzonindiapriv292341.rzp@rxairtel'
  };

   const services = [
     {
       icon: Code,
       title: 'PayzonIndia IT Services',
       description: 'Custom software development, cloud solutions, and IT consulting',
       link: 'https://payzonitservices.com',
       gradient: 'from-blue-500 to-cyan-500',
       shadowColor: 'blue-500'
     },
     {
       icon: ShoppingCart,
       title: 'PayzonIndia E-commerce',
       description: 'Complete online store solutions with secure payment integration',
       link: 'https://payzonshoppy.com',
       gradient: 'from-emerald-500 to-green-500',
       shadowColor: 'emerald-500'
     },
     {
       icon: Wallet,
       title: 'PayzonIndia Fintech Solutions',
       description: 'Payment gateways, digital wallets, and financial platforms',
       link: 'https://payzonapi.com',
       gradient: 'from-purple-500 to-pink-500',
       shadowColor: 'purple-500'
     },
     {
       icon: TrendingUp,
       title: 'PayzonIndia Digital Marketing',
       description: 'SEO, social media marketing, and growth strategies',
       link: 'https://payzonmarketing.com',
       gradient: 'from-orange-500 to-red-500',
       shadowColor: 'orange-500'
     }
   ];
   
  useEffect(() => {
    // Set payment page gradients (cyan/emerald/blue theme)
    setNavbarGradient('from-cyan-600 via-emerald-600 to-blue-600');
    setPaymentGradient('from-cyan-500 to-emerald-500');
    setLogoGradient('from-cyan-400 to-emerald-400');
    
    // Cleanup: Reset to default when leaving page
    return () => {
      const defaultGradients = sectorGradients['default'];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const copyToClipboard = (text: string, field: string): void => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-5xl mx-auto relative z-10 pt-16 md:pt-[90px] sm:pt-20">
        {/* Header with Animation */}
        <div className="text-center mb-12 animate-fadeIn md:pt-[90px] ">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 via-emerald-500 to-blue-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-cyan-500/50 animate-float relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4 animate-slideDown">
            Payment Information
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-medium animate-slideUp">
            Secure payment methods available
          </p>
        </div>

        {/* Payment Methods Grid with Staggered Animation */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* UPI & QR Section */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/10 p-6 sm:p-8 border border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-emerald-500/30 transition-all duration-500 animate-slideInLeft">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl shadow-lg shadow-emerald-500/50 animate-pulse-slow relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl blur-md opacity-50"></div>
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                UPI Payment
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {/* QR Code Section */}
              <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-2.5 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl shadow-lg shadow-cyan-500/50">
                    <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Scan QR Code
                  </span>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
                    <div className="relative bg-slate-800 p-4 sm:p-6 rounded-3xl shadow-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-105">
                      <Image 
                        src={QR}
                        alt="Payment QR Code" 
                        width={320}
                        height={320}
                        className="rounded-2xl w-full h-auto max-w-[320px] sm:max-w-[280px]"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-sm text-cyan-400 font-medium mt-4 sm:mt-6 animate-pulse">
                  Scan with any UPI app
                </p>
              </div>

              <DetailCard
                icon={Smartphone}
                label="UPI ID"
                value={paymentDetails.upi}
                field="upi"
                onCopy={copyToClipboard}
                isCopied={copiedField === 'upi'}
              />
            </div>
          </div>

          {/* Bank Transfer Section */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/10 p-6 sm:p-8 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/30 transition-all duration-500 animate-slideInRight">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/50 animate-pulse-slow animation-delay-1000 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-md opacity-50"></div>
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bank Transfer
              </h2>
            </div>
            
            <div className="space-y-4">
              <DetailCard
                icon={CreditCard}
                label="Account Number"
                value={paymentDetails.accountNumber}
                field="accountNumber"
                onCopy={copyToClipboard}
                isCopied={copiedField === 'accountNumber'}
              />
              <DetailCard
                icon={Building2}
                label="Account Name"
                value={paymentDetails.accountName}
                field="accountName"
                onCopy={copyToClipboard}
                isCopied={copiedField === 'accountName'}
              />
              <DetailCard
                icon={Building2}
                label="IFSC Code"
                value={paymentDetails.ifsc}
                field="ifsc"
                onCopy={copyToClipboard}
                isCopied={copiedField === 'ifsc'}
              />
              
              {/* Payment Instructions */}
              <div className="mt-6 bg-slate-900/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20">
                <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  Transfer Instructions
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Use NEFT/RTGS/IMPS for instant transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Double-check account details before transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Save transaction ID as payment proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Processing time: Instant to 2 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note with Animation */}
        <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl animate-fadeIn animation-delay-2000 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5"></div>
          <p className="text-center text-slate-300 text-base sm:text-lg relative z-10">
            <span className="font-bold text-cyan-400">💡 Important:</span> After completing the payment, please save the transaction reference for your records
          </p>
        </div>

  {/* Our Top Services Section */}
        <div className="relative animate-fadeIn animation-delay-3000 mt-12 lg:mt-16">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Our Top Services
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Empowering businesses with cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="text-cyan-400 text-xs font-semibold flex items-center gap-1">
                    <span>Visit Site</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            ))}
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}