'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 md:py-20 stats-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm max-w-sm mx-auto"
        >
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-gradient"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              delay: 0.2
            }}
          >
            10+
          </motion.p>
          <p className="text-muted-foreground mt-2">Years Experience</p>
        </motion.div>
      </div>
    </section>
  );
}