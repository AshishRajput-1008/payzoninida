"use client";
import React, { useEffect, useState } from "react";
import { Users, Linkedin, Mail, Award, Sparkles } from "lucide-react";
import RamSir from "../assests/banana-Ram-Sir-5.png";
import shubhamSir from "../assests/shubhum sir PZI.png";
import SanjaySir from "../assests/banana-sanjay-sir.png";
import AnkitSir from "../assests/final-ankit-sir -banana.png";
import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";
import divyaniMam from "../assests/divyani mam.png";
import VarunSir from "../assests/varun-sir-gemini.png";
import MohitSir from "../assests/mohit-sir-2.png";
import Link from "next/link";

import ceoPZI from "../assests/CEO-PZI.png";
import MainshSen from "../assests/mainse sen gemeini.jpg";

const OurTeam = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    const gradients = sectorGradients["ourTeams"];
    setNavbarGradient(gradients.navbar);
    setPaymentGradient(gradients.payment);
    setLogoGradient(gradients.logo);

    return () => {
      const defaultGradients = sectorGradients["default"];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const teamMembers = [
    {
      name: "Divendu Prakash Verma",
      role: "CEO",
      category:
        "Management,Finance,Legal,Socail Welfare,Finance,Social Welfare",
      image: ceoPZI.src,
      bio: "Leading Payzon India's vision with 12+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Manish Sen",
      role: "taxation",
      category: "Management,Finance,Social Welfare",
      image: MainshSen.src,
      bio: "Leading Payzon India's vision with 8+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Subham Choudhary",
      role: "Head of Operations",
      category: "Technical,Management,Social Welfare",
      image: shubhamSir.src,
      bio: "Leading Payzon India's vision with 7+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Ram Bindal",
      role: "Senior Developer",
      category: "Technical,Social Welfare",
      image: RamSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Sanjay Patel",
      role: "Senior Developer",
      category: "Technical,Social Welfare",
      image: SanjaySir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Ankit Laxakar",
      role: "Senior Developer",
      category: "Technical,Social Welfare",
      image: AnkitSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },

    {
      name: "Varun Kumar Sen ",
      role: "Digital Markketing ",
      category: "Marketing,Social Welfare",
      image: VarunSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Mohit Merrill",
      role: "Digital Markketing ",
      category: "Marketing,Social Welfare",
      image: MohitSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },
    {
      name: "Divyani Jadon",
      role: "Digital Markketing",
      category: "Marketing,Legal,Social Welfare",
      image: divyaniMam.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      email: "info@payzonindia.com",
    },

    // {
    //   name: "Priya Shara",
    //   role: "Chief Technology Officer",
    //   category: "leadership",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    //   bio: "Driving innovation in IT services and digital solutions",
    //   linkedin: "#",
    //   email: "priya@payzonindia.com",
    // },
    // {
    //   name: "Rajesh Kumar",
    //   role: "Chief Executive Officer",
    //   category: "leadership",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    //   bio: "Leading Payzon India's vision with 15+ years of fintech expertise",
    //   linkedin: "#",
    //   email: "rajesh@payzonindia.com",
    // },
    // {
    //   name: "Amit Patel",
    //   role: "Head of Digital Marketing",
    //   category: "ventures",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    //   bio: "Crafting compelling digital strategies for brand growth",
    //   linkedin: "#",
    //   email: "amit@payzonindia.com",
    // },
    // {
    //   name: "Sneha Reddy",
    //   role: "E-Commerce Director",
    //   category: "ventures",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    //   bio: "Transforming online retail experiences",
    //   linkedin: "#",
    //   email: "sneha@payzonindia.com",
    // },
    // {
    //   name: "Vikram Singh",
    //   role: "Fintech Solutions Lead",
    //   category: "ventures",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    //   bio: "Building secure and scalable financial technology",
    //   linkedin: "#",
    //   email: "vikram@payzonindia.com",
    // },
    // {
    //   name: "Ananya Iyer",
    //   role: "Social Welfare Manager",
    //   category: "associations",
    //   image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    //   bio: "Creating positive impact through community initiatives",
    //   linkedin: "#",
    //   email: "ananya@payzonindia.com",
    // },
    // {
    //   name: "Rohan Mehta",
    //   role: "Cyber Security Expert",
    //   category: "sector",
    //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    //   bio: "Protecting digital assets with cutting-edge security",
    //   linkedin: "#",
    //   email: "rohan@payzonindia.com",
    // },
    // {
    //   name: "Kavya Nair",
    //   role: "Skills Development Head",
    //   category: "sector",
    //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    //   bio: "Empowering talent through comprehensive training programs",
    //   linkedin: "#",
    //   email: "kavya@payzonindia.com",
    // },
  ];

  const categories = [
    { id: "all", label: "All Team", icon: Users },
    { id: "Technical", label: "Technical", icon: Users },
    { id: "Management", label: "Management", icon: Award },
    { id: "Legal", label: "Legal", icon: Sparkles },
    { id: "Finance", label: "Finance", icon: Users },
    { id: "Marketing", label: "Marketing", icon: Users },
    { id: "Social Welfare", label: "Social Welfare", icon: Award },
  ];

  // Updated filtering logic to handle comma-separated categories
  const filteredMembers =
    activeCategory === "all"
      ? teamMembers
      : teamMembers.filter((member) => {
          const memberCategories = member.category
            .split(",")
            .map((cat) => cat.trim());
          return memberCategories.includes(activeCategory);
        });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-24 px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center pt-[176px] pb-[42px]">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind Payzon India's success, driving
            innovation across ventures, associations, and sectors
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
              50+ Team Members
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
              10+ Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={20} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] md:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Category Badge */}
              {/* <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
                  {member.category.split(',')[0].charAt(0).toUpperCase() +
                    member.category.split(',')[0].slice(1)}
                </span>
              </div> */}
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No team members found in this category.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <Link href="/contact">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our mission
              of innovation and excellence
            </p>
            <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Open Positions
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurTeam;
