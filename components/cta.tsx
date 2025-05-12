'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section ref={ref} className="py-16 md:py-24 cta-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Ready to Transform Your Body?</h2>
          <p className="text-xl mb-8 text-foreground">
            Take the first step towards the strongest, healthiest version of yourself. 
            Book a consultation today and let's create your personalized fitness plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg border-2">
              <Link href="/services">View Training Packages</Link>
            </Button>
          </div>
          <p className="text-sm mt-8 text-foreground font-medium">
            No contracts or long-term commitments. Free consultations available for new clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}