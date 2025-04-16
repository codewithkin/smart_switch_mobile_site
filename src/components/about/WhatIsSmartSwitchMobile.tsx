"use client";
import { motion } from "framer-motion";

function WhatIsSmartSwitchMobile() {
  return (
    <motion.section
      className="section mt-20 md:mt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="heading">What is Smart Switch Mobile?</h2>
      <p className="text-slate-600 max-w-3xl mx-auto">
        At Smart Switch Mobile, we're all about making mobile tech smarter,
        faster, and more accessible. Whether you're upgrading your old device or
        buying your first smartphone, we offer top-tier customer service,
        unbeatable prices, and a hassle-free shopping experience — all from our
        trusted Mutare-based store.
      </p>
    </motion.section>
  );
}

export default WhatIsSmartSwitchMobile;
