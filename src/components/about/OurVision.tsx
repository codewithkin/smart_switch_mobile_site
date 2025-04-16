"use client";
import { motion } from "framer-motion";
import Heading from "../ui/heading"; // Assuming you have a Heading component

function OurVision() {
  return (
    <motion.section
      className="section bg-slate-200 py-10 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading>Our Vision</Heading>
      <p className="text-slate-600 max-w-3xl mx-auto">
        Our vision is simple: to make top-quality mobile phones and tech
        available to everyone in Zimbabwe, starting with Mutare. We believe in a
        world where technology empowers individuals, enhances lifestyles, and
        opens new opportunities. From the latest models to essential
        accessories, we're here to ensure you make the smart choice every time.
      </p>
    </motion.section>
  );
}

export default OurVision;
