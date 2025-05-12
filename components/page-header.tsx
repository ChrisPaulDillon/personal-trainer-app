export function PageHeader({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  );
}