"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "Do you deliver outside Mutare?",
    answer:
      "Yes we do! We offer delivery services across Zimbabwe through trusted courier partners. Just place your order and we’ll handle the logistics.",
  },
  {
    question: "Are your phones brand new?",
    answer:
      "Absolutely. All our devices are 100% brand new, sealed in the box, and come with valid warranty and receipts.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "If you're in Mutare, we usually deliver same-day. Outside Mutare? You can expect your order within 1–3 business days, depending on the courier.",
  },
  {
    question: "Do your phones come with warranty?",
    answer:
      "Yes. Every phone we sell comes with a warranty — typically ranging from 6 to 12 months depending on the brand.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept EcoCash, bank transfers, ZIPIT, USD cash, and swipe. Just choose what’s convenient for you during checkout.",
  },
  {
    question: "Can I pay on delivery?",
    answer:
      "In Mutare, yes — we offer cash on delivery. For deliveries outside the city, we require full or partial payment before dispatch.",
  },
  {
    question: "Do you only sell phones?",
    answer:
      "Phones are our main thing, but we also stock accessories like chargers, earphones, phone cases, and screen protectors.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "We offer returns within 7 days if the item is faulty or damaged on delivery. Just make sure it’s in original condition with the packaging intact.",
  },
];

function FAQ() {
  return (
    <section className="section">
      <article className="flex flex-col gap-2 items-center text-center mb-8">
        <h2 className="heading">Frequently Asked Questions</h2>
        <p className="text-slate-500 max-w-2xl">
          Still curious? These are the most common things people ask us. If your
          question isn't here, feel free to reach out!
        </p>
      </article>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto space-y-2"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="border rounded-xl"
          >
            <AccordionTrigger className="text-left text-base font-medium px-4 py-3">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-600 px-4 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
