"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    id: "1",
    title: "5 Essential Compound Exercises for Strength",
    excerpt:
      "Discover the most effective compound movements to maximize strength gains and muscle development in your training program.",
    date: "April 15, 2025",
    category: "Strength Training",
    author: "Chris Dillon Fitness",
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Nutrition Strategies for Optimal Muscle Recovery",
    excerpt:
      "Learn how to fuel your body properly before and after workouts to enhance recovery, reduce soreness, and maximize your results.",
    date: "April 8, 2025",
    category: "Nutrition",
    author: "Chris Dillon Fitness",
    image: "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "The Truth About Fat Loss: Myths vs. Facts",
    excerpt:
      "Cutting through the noise and marketing hype to reveal what actually works for sustainable fat loss based on scientific evidence.",
    date: "March 30, 2025",
    category: "Weight Loss",
    author: "Chris Dillon Fitness",
    image: "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg",
    readTime: "10 min read",
  },
];

export function BlogPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Articles & Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Latest From The Blog
          </h2>
          <p className="text-muted-foreground text-lg">
            Fitness tips, nutrition advice, and evidence-based strategies to
            help you get the most out of your training.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                author={post.author}
                image={post.image}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
