import { PageHeader } from '@/components/page-header';
import { BlogCard } from '@/components/blog-card';

export const metadata = {
  title: 'Fitness Blog | The Athletic Monster',
  description: 'Read the latest fitness tips, nutrition advice, and training strategies from Glasgow\'s top personal trainer.',
};

const blogPosts = [
  {
    id: '1',
    title: '5 Essential Compound Exercises for Strength',
    excerpt: 'Discover the most effective compound movements to maximize strength gains and muscle development in your training program.',
    date: 'April 15, 2025',
    category: 'Strength Training',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'Nutrition Strategies for Optimal Muscle Recovery',
    excerpt: 'Learn how to fuel your body properly before and after workouts to enhance recovery, reduce soreness, and maximize your results.',
    date: 'April 8, 2025',
    category: 'Nutrition',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'The Truth About Fat Loss: Myths vs. Facts',
    excerpt: 'Cutting through the noise and marketing hype to reveal what actually works for sustainable fat loss based on scientific evidence.',
    date: 'March 30, 2025',
    category: 'Weight Loss',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
    readTime: '10 min read'
  },
  {
    id: '4',
    title: 'How to Break Through Strength Plateaus',
    excerpt: 'Stuck at the same weights for weeks? Discover proven techniques to overcome plateaus and continue making progress in your training.',
    date: 'March 22, 2025',
    category: 'Strength Training',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    readTime: '7 min read'
  },
  {
    id: '5',
    title: 'The Importance of Progressive Overload',
    excerpt: 'Learn why progressive overload is the fundamental principle behind all successful training programs and how to implement it effectively.',
    date: 'March 15, 2025',
    category: 'Training',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg',
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Pre-Workout Nutrition: What to Eat Before Training',
    excerpt: 'Optimize your performance with the right pre-workout meal timing and composition based on your training goals and preferences.',
    date: 'March 8, 2025',
    category: 'Nutrition',
    author: 'The Athletic Monster',
    image: 'https://images.pexels.com/photos/8844393/pexels-photo-8844393.jpeg',
    readTime: '6 min read'
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <PageHeader 
        title="Fitness Knowledge Base" 
        description="Training tips, nutrition advice, and fitness insights"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map(post => (
          <BlogCard 
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
            author={post.author}
            image={post.image}
            readTime={post.readTime}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Subscribe to our newsletter to receive the latest fitness articles in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-2 bg-background border rounded-md flex-grow"
          />
          <button className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}