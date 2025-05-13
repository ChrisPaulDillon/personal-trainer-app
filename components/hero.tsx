"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "1",
    question: "What can I expect in the first session?",
    answer:
      "Your first session includes a comprehensive fitness assessment, goal setting discussion, and a personalized training plan tailored to your current fitness level and aspirations.",
  },
  {
    id: "2",
    question: "How often should I train?",
    answer:
      "Training frequency depends on your goals, current fitness level, and schedule. I typically recommend 2-4 sessions per week for optimal results.",
  },
  {
    id: "3",
    question: "Do you provide nutrition guidance?",
    answer:
      "Yes, nutrition is a crucial part of your fitness journey. I offer personalized nutrition advice to complement your training program.",
  },
  {
    id: "4",
    question: "Where are you based?",
    answer:
      "I'm currently based in Glasgow town centre at The Arc Gym next to Glasgow Caledonian University.",
  },
  {
    id: "5",
    question: "Is The Arc gym open to the public?",
    answer:
      "Yes The Arc is open to the public and has a wide range of people who attend.",
  },
  {
    id: "6",
    question: "Is a gym membership required to attend a PT session?",
    answer:
      "Gym membership is not strictly required. A day pass is able to be purchased at the desk. Gym membership is recommended if you are attending regularly.",
  },
];

export function Hero() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <div className="relative min-h-[600px] md:h-screen md:max-h-[800px] overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-0 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Transform Your Body with{" "}
                <span className="text-gradient">Expert Guidance</span>
              </h1>

              <div className="grid grid-cols-1 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-card/20 backdrop-blur-sm p-6 rounded-lg border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The Arc
                    <br />
                    Cowcaddens Road
                    <br />
                    Glasgow G4 0BA
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  asChild
                  className="text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex items-center gap-2 text-muted-foreground"
              >
                <Mail className="h-5 w-5" />
                <span>chrispauldillon@live.com</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg"
                alt="Fitness training equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-background py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/50"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === faq.id ? null : faq.id)
                    }
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
