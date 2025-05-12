'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transform Your Body with <span className="text-gradient">Expert Guidance</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
                The Arc<br />
                Cowcaddens Road<br />
                Glasgow G4 0BA
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild className="text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
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
      </div>
    </div>
  );
}