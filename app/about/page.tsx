import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/page-header';

export const metadata = {
  title: 'About | The Athletic Monster',
  description: 'Learn about Glasgow\'s premier personal trainer, qualifications, training philosophy, and journey to becoming The Athletic Monster.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <PageHeader 
        title="About The Athletic Monster" 
        description="Meet your trainer and discover the philosophy behind the results"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 animate-fade-right">
          <h2 className="text-3xl font-bold">The Journey</h2>
          <p className="text-lg text-muted-foreground">
            With over 15 years of experience in personal training and sports science, 
            I've helped hundreds of clients in Glasgow transform their bodies and lives.
          </p>
          <p className="text-muted-foreground">
            My journey began as a competitive athlete, where I discovered my passion
            for understanding human performance. After earning degrees in Exercise Science
            and Sports Nutrition, I dedicated my career to helping others achieve results
            they never thought possible.
          </p>
          <h3 className="text-2xl font-bold mt-8">Qualifications</h3>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            <li>BSc in Exercise Science - University of Glasgow</li>
            <li>MSc in Sports Nutrition - University of Edinburgh</li>
            <li>Certified Strength and Conditioning Specialist (CSCS)</li>
            <li>Level 3 Personal Trainer</li>
            <li>Precision Nutrition Coach</li>
            <li>Functional Movement Specialist</li>
            <li>TRX Certified Trainer</li>
          </ul>
        </div>
        
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-left">
          <Image 
            src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" 
            alt="The Athletic Monster Personal Trainer" 
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      
      <Separator className="my-16" />
      
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Training Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Science-Based Approach</h3>
            <p className="text-muted-foreground">
              Every program is built on proven exercise science principles, 
              not fitness trends or quick fixes. I leverage the latest research
              to create programs that deliver sustainable results.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Personalized Plans</h3>
            <p className="text-muted-foreground">
              No two bodies are the same. I create customized training and nutrition 
              plans based on your unique goals, fitness level, lifestyle, and preferences.
              Your plan evolves as you progress.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Holistic Development</h3>
            <p className="text-muted-foreground">
              True transformation goes beyond physical appearance. I focus on improving
              functional strength, mobility, nutrition habits, and mental resilience
              to create sustainable lifestyle changes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Becoming the best version of yourself starts with a single decision. 
          Let's work together to unleash your inner monster.
        </p>
        <Button size="lg" className="text-lg px-8">Book a Consultation</Button>
      </div>
    </div>
  );
}