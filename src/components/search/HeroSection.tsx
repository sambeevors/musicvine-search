interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Free music for creators",
  subtitle = "No copyright claims. Your favorite beatmakers.",
}: HeroSectionProps) => {
  return (
    <div className="container mx-auto mb-8 flex flex-col gap-4 pt-4 sm:mb-16 sm:pt-8 sm:text-center">
      <h1 className="text-[40px] font-black leading-10 sm:text-[56px]">
        {title}
      </h1>
      <h2 className="text-2xl font-black">{subtitle}</h2>
    </div>
  );
};

export default HeroSection;
