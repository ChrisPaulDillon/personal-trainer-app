'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Apple, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'One-on-One Training',
    description: 'Personalized coaching tailored to your specific goals, fitness level, and preferences.',
    icon: Dumbbell,
    color: 'text-primary',
  },
  {
    title: 'Nutrition Coaching',
    description: 'Expert nutrition guidance to optimize your diet for muscle building, fat loss, or performance.',
    icon: Apple,
    color: 'text-green-500',
  },
  {
    title: 'Posture Restoration',
    description: 'Specialized assessment and corrective exercises to improve posture, reduce pain, and enhance movement quality.',
    icon: Ruler,
    color: 'text-blue-400',
  },
];

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <section ref={ref} className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Training Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Choose from a range of specialized training options designed to fit your goals, 
            lifestyle, and preferences.
          </p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className={`${service.color} mb-4`}>
                      <Icon size={36} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}