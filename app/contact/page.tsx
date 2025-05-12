import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Glasgow's premier personal trainer. Book a consultation, ask questions, or find our training location.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <PageHeader
        title="Get In Touch"
        description="Book a session, ask questions, or schedule a consultation"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-8 animate-fade-right">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re ready to start your fitness journey or just
              have questions, I&apos;m here to help. Fill out the form or use
              the contact information below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Training Location</h3>
                <p className="text-muted-foreground">The Arc</p>
                <p className="text-muted-foreground">Cowcaddens Road</p>
                <p className="text-muted-foreground">Glasgow G4 0BA</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-muted-foreground">
                  chrispauldillon@live.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4">Free Consultation</h3>
            <p className="text-muted-foreground">
              Book a free 30-minute consultation to discuss your fitness goals
              and how I can help you achieve them. This is a no-pressure
              opportunity to see if we&apos;re a good fit for working together.
            </p>
          </div>
        </div>

        <div className="animate-fade-left">
          <ContactForm />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="rounded-lg overflow-hidden h-[400px] shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.941237276517!2d-4.252780684087659!3d55.86660998058181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888441f1c2c4693%3A0x91c0b93d77645d78!2sARC%20Health%20%26%20Fitness!5e0!3m2!1sen!2suk!4v1648641234567!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
