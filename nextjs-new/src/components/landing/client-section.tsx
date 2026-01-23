import Image from "next/image";

const clients = [
  { name: "Google", src: "/imgs/Google.svg" },
  { name: "Microsoft", src: "/imgs/Microsoft.svg" },
  { name: "GitHub", src: "/imgs/GitHub.svg" },
  { name: "Uber", src: "/imgs/Uber.svg" },
  { name: "Notion", src: "/imgs/Notion.svg" },
];

export function ClientSection() {
  return (
    <section id="clients" className="mx-auto max-w-7xl px-6 text-center md:px-8">
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              {clients.map((client) => (
                <li key={client.name}>
                  <Image
                    alt={client.name}
                    src={client.src}
                    className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                    width={112}
                    height={32}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
