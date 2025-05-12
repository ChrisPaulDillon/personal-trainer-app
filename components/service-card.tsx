import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  mostPopular?: boolean;
  image: string;
}

export function ServiceCard({
  title,
  description,
  features,
  price,
  mostPopular = false,
  image,
}: ServiceCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border ${
        mostPopular ? "border-primary shadow-lg" : "border-border"
      }`}
    >
      {mostPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-medium text-sm">
          Most Popular
        </div>
      )}

      {/* <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all hover:scale-105 duration-500"
          loading="lazy"
          quality={75}
        />
      </div> */}

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="dark:text-gray-200 mb-4">{description}</p>

        <div className="space-y-2 mt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm dark:text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-end justify-between mb-4">
            <span className="text-2xl font-bold">{price}</span>
            <span className="dark:text-gray-200 text-sm">
              Per session/month
            </span>
          </div>

          <Button asChild className="w-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
