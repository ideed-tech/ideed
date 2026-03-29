import { CinematicHero } from "./ui/cinematic-landing-hero";

const steps = [
  {
    num: "1",
    title: "Idea",
    description: "Defining the core concept and goals.",
  },
  {
    num: "2",
    title: "Planning",
    description: "Structuring the roadmap and UX.",
  },
  {
    num: "3",
    title: "Design",
    description: "Visualizing the ethereal interface.",
  },
  {
    num: "4",
    title: "Development",
    description: "Architecting the robust engine.",
  },
  {
    num: "5",
    title: "Launch",
    description: "Deploying to the global ecosystem.",
  },
  {
    num: "6",
    title: "Growth",
    description: "Iterating for long-term impact.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#050914]">
      <CinematicHero
        brandName="iDEED"
        tagline1="How We"
        tagline2="Build"
        cardHeading="How We Build"
        cardDescription={
          <>
            <p className="mb-6 text-white font-medium">Our systematic approach to building digital excellence.</p>
            <div className="flex flex-col gap-4 max-h-[40vh] md:max-h-max overflow-y-auto pr-2">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0 border border-blue-500/30">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-md m-0">{step.title}</h4>
                    <p className="text-gray-400 text-sm mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
        ctaHeading="Start your project."
        ctaDescription="Connect with us immediately and turn your bold ideas into scalable digital reality."
      />
    </section>
  );
}
