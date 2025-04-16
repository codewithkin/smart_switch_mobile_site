"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Heading from "../ui/heading";

const teamMembers = [
  { name: "Tariro M.", role: "Founder & CEO", image: "/avatars/tariro.jpg" },
  {
    name: "Kudzai N.",
    role: "Head of Operations",
    image: "/avatars/kudzai.jpg",
  },
  {
    name: "Blessing Z.",
    role: "Marketing Specialist",
    image: "/avatars/blessing.jpg",
  },
];

function MeetTheTeam() {
  return (
    <motion.section
      className="section space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading>Meet the Team</Heading>
      <div className="flex space-x-8 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="w-16 h-16">{member.name.charAt(0)}</AvatarFallback>
              <AvatarImage className="w-16 h-16" src={member.image || ""} alt={member.name} />
            </Avatar>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default MeetTheTeam;
