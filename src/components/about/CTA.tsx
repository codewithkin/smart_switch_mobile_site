"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

function CTA() {
  return (
    <motion.section
      className="section bg-slate-200 rounded-2xl p-10 text-center space-y-4 shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <article className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Ready to Make the Smart Switch?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From our local Mutare store to your doorstep, we’ve got all the latest
          devices waiting for you. Don’t wait — explore our full collection and
          shop today!
        </p>
      </article>
      <Button size="lg" variant="default" asChild>
        <Link href="/shop">Start Shopping</Link>
      </Button>
    </motion.section>
  );
}

export default CTA;
