import Image from "next/image";

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
    imageUrl: "/member1.jpg", // replace with real image path
    alt: "David Anderson - CEO",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    bio: "Driving seamless tech experiences.",
    imageUrl: "/member2.png", // replace with real image path
    alt: "Michael Chen - CTO",
  },
  {
    name: "Sarah Mitchell",
    title: "Head of Product",
    bio: "Passionate about user-centric solutions.",
    imageUrl: "/member3.jpg", // replace with real image path
    alt: "Sarah Mitchell - Head of Product",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Meet The Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
