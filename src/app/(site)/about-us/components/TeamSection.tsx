"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "David Anderson",
    title: "CEO & Co-founder",
    bio: "20+ years in recruitment & tech.",
    imageUrl: "/member1.jpg",
    alt: "David Anderson - CEO",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    bio: "Driving seamless tech experiences.",
    imageUrl: "/member2.png",
    alt: "Michael Chen - CTO",
  },
  {
    name: "Sarah Mitchell",
    title: "Head of Product",
    bio: "Passionate about user-centric solutions.",
    imageUrl: "/member3.jpg",
    alt: "Sarah Mitchell - Head of Product",
  },
];

export default function TeamSection() {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Meet The Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image - Circular */}
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg ring-4 ring-white group-hover:ring-purple-100 transition-all">
                <Image
                  src={member.imageUrl}
                  alt={member.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-purple-600 font-medium text-sm mt-1">
                {member.title}
              </p>

              {/* Bio */}
              <p className="mt-2 text-sm text-gray-600 max-w-xs">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
