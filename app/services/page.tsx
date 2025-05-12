import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Services",
  description:
    "Explore our range of personal training services in Glasgow, including one-on-one training, group sessions, nutrition coaching, and online programs.",
};

const services = [
  {
    id: "consultation",
    title: "Initial Consultation",
    description:
      "Start your fitness journey with a comprehensive consultation. We'll discuss your goals, assess your current fitness level, and create a personalized plan for success.",
    features: [
      "In-depth fitness assessment",
      "Goal setting session",
      "Body composition analysis",
      "Training style discussion",
      "Nutrition strategy overview",
      "Program recommendations",
    ],
    price: "FREE",
    mostPopular: false,
    image: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg",
  },
  {
    id: "one-on-one",
    title: "One-on-One Training",
    description:
      "Personalized training sessions designed exclusively for your goals, fitness level, and preferences. Includes customized workouts, nutrition guidance, and continuous support.",
    features: [
      "Initial fitness assessment and goal setting",
      "Customized workout programs",
      "Nutrition guidance",
      "Regular progress tracking",
      "Technique correction and form guidance",
      "Flexible scheduling options",
    ],
    price: "£25 per session",
    mostPopular: true,
    image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg",
  },
];

const specialties = [
  {
    title: "Weight Loss",
    description:
      "Science-based programs focused on sustainable fat loss through proper training and nutrition strategies.",
  },
  {
    title: "Muscle Building",
    description:
      "Specialized hypertrophy training to increase lean muscle mass and transform your physique.",
  },
  {
    title: "Strength Training",
    description:
      "Powerlifting and strength-focused programs to help you break personal records and build functional strength.",
  },
  {
    title: "Posture Restoration",
    description:
      "Specialized assessment and corrective exercises to improve posture, reduce pain, and enhance movement quality.",
  },
  {
    title: "Rehabilitation",
    description:
      "Post-injury training focused on safe return to full function and prevention of future injuries.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <PageHeader
        title="Training Services"
        description="Choose the perfect training option to achieve your fitness goals"
      />

      <Tabs defaultValue="services" className="mt-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="services">Training Packages</TabsTrigger>
          <TabsTrigger value="specialties">Training Specialties</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="mt-8">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                mostPopular={service.mostPopular}
                image={service.image}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specialties" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                <p className="dark:text-gray-200">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which approach is right for you?
            </h3>
            <p className="dark:text-gray-200 max-w-2xl mx-auto mb-6">
              Book a free 30-minute consultation call to discuss your goals and
              find the perfect training solution.
            </p>
            <Button size="lg">Schedule Consultation</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Book your FREE initial consultation and let&apos;s discuss how we can
          help you achieve your fitness goals. No pressure, no obligations -
          just a friendly chat about your aspirations and how we can work
          together.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
          <Link href="/contact">Book Free Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
