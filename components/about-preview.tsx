'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function AboutPreview() {
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider">About Your Trainer</p>
          <h2 className="text-3xl md:text-4xl font-bold">Meet The Athletic Monster</h2>
          <p className="text-lg text-foreground">
            With over a decade of experience transforming bodies and lives in Glasgow, 
            I bring scientific knowledge and practical expertise to every training session.
          </p>
          <p className="text-foreground">
            As a certified strength and conditioning specialist with multiple fitness 
            qualifications, I've developed a training methodology that delivers 
            consistent results for clients of all fitness levels.
          </p>
          <p className="text-foreground">
            My approach combines progressive strength training, strategic nutrition 
            planning, and accountability systems that ensure you not only reach your 
            goals but sustain your results long-term.
          </p>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}