import Image from "next/image";

export default function Home() {
  const bentoItems: {
    title: string;
    subtitle: string;
    image: string;
    spanClass: string;
  }[] = [
    {
      title: "Pomodoro timer",
      subtitle: "Work time tracking",
      image: "/timer.jpeg",
      spanClass: "col-span-2",
    },
    {
      title: "Inmersive Environment",
      subtitle: "Soothing background sounds and dynamic climate changes.",
      image: "/inmersive-environment.webp",
      spanClass: "col-span-4",
    },
    {
      title: "Visual Progress",
      subtitle:
        "Rack up coins for tasks, customize your character, and level up!",
      image: "/chinju-forest.jpeg",
      spanClass: "col-span-3",
    },
    {
      title: "Healthy habits reminder",
      subtitle: "Timely prompts for breaks, hydration, and short walks.",
      image: "/japanese-building.jpeg",
      spanClass: "col-span-3",
    },
    {
      title: "Customizable Playlist",
      subtitle: "Fine-tune your work ambiance with easy music controls.",
      image: "/isolation.jpeg",
      spanClass: "col-span-2",
    },
    {
      title: "Organize your day in time-blocks",
      subtitle: "Craft personalized timetables for efficient scheduling.",
      image: "/building.jpeg",
      spanClass: "col-span-4",
    },
  ];
  return (
    <div className="max-w-5xl py-40">
      <main className="flex flex-col justify-center items-center p-40 pt-0 gap-2">
        <h1 className="text-neutral-300 text-6xl font-bold text-center">
          Introducing <span className="text-blue-300">Centrum</span>
        </h1>
        <h2 className="text-neutral-400 text-xl [text-wrap:_balance;] text-center ">
          Elevate your work experience improving your time managment.
        </h2>
      </main>
      <section className="grid grid-cols-6 grid-rows-3 gap-5">
        {bentoItems.map((item, index) => (
          <article
            key={index}
            className={`${item.spanClass} p-8 pt-40 border-[1px] border-neutral-600 rounded-xl bg-neutral-800 flex items-end relative overflow-hidden`}
          >
            <div className="w-full h-full absolute top-0 left-0 z-0 [-webkit-mask-image:_radial-gradient(at_center,_#262626,_rgba(1,_1,_1,_0.0)_90%);] [mask-image:_radial-gradient(at_center,_#262626,_rgba(1,_1,_1,_0.0)_90%);]">
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt={item.title}
                className="object-cover w-full h-full object-center brightness-75"
              />
            </div>
            <div className="z-10">
              <h3 className="text-blue-300 font-semibold text-xl">
                {item.title}
              </h3>
              <span className="text-neutral-300" text-neutral-400>
                {item.subtitle}
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
