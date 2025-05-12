"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote:
      "Working with Chris Dillon Fitness transformed not just my body, but my entire approach to fitness. I've lost 30kg and gained more confidence than I ever thought possible.",
    name: "Michael Robertson",
    role: "Lost 30kg in 9 months",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    quote:
      "After struggling with other trainers, I finally found someone who understood my goals. Chris Dillon Fitness's methodical approach and constant encouragement helped me add 15kg of muscle.",
    name: "Sarah Campbell",
    role: "Gained 15kg of muscle",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    quote:
      "As a competitive athlete, I needed a trainer who could take my performance to the next level. Chris Dillon Fitness's programming improved my strength, speed, and recovery beyond my expectations.",
    name: "James McIntyre",
    role: "Semi-professional athlete",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Success Stories
          </h2>
          <p className="text-lg dark:text-gray-200">
            Don't just take my word for it. Hear from clients who have
            transformed their bodies and lives through personalized training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                  <p className="mb-6 dark:text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-gray-200">
                        {testimonial.name}
                      </p>
                      <p className="text-sm dark:text-gray-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
