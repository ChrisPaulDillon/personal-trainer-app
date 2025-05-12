import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image: string;
  readTime: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  category,
  author,
  image,
  readTime,
}: BlogCardProps) {
  return (
    <article className="rounded-lg overflow-hidden border border-border transition-all hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={`Featured image for article: ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all hover:scale-105 duration-500"
          loading="lazy"
          quality={75}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link href="#" className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground" aria-label="Article metadata">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
            <time dateTime={new Date(date).toISOString()}>{date}</time>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Link 
            href="#" 
            className="text-primary font-medium hover:underline"
            aria-label={`Read full article: ${title}`}
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}