import { useQuery } from "@apollo/client";
import { DEFINITIONS } from "./lib/queries";

const definitions = [
  {
    name: "Vintage Believer",
    description:
      "Awarded to users who have interacted with any Balancer v1 smart contract.",
    color: "bg-sky-500",
  },
  {
    name: "Adult Swim",
    description: "Awarded to users who have created pools on Balancer",
    color: "bg-amber-500",
  },
  {
    name: "Iron Bank",
    description: "Awarded to users who have provided liquidity to pools",
    color: "bg-emerald-500",
  },
  {
    name: "One to One",
    description:
      "Awarded to users who have provided liquidity to pools containing stable coins",
    color: "bg-pink-500",
  },
  {
    name: "Perfectly Balanced",
    description:
      "Awarded to users who have achieved BAL tokens in return for providing liquidity to pools. Perfectly balanced, as all things should be.",
    color: "bg-violet-500",
  },
];

export const BadgeDefinitions = () => {
  const { loading, error, data } = useQuery(DEFINITIONS);

  console.log(data);

  return (
    <ul className="pt-10 grid grid-cols-1 gap-x-16 gap-y-4 xl:grid-cols-2">
      {definitions.map((definition) => {
        return (
          <li className="relative flex items-start">
            <div
              className={`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none ${definition.color} dark:highlight-white/20`}
            >
              <div
                className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
                style={{
                  backgroundImage: `url("/_next/static/media/utility-first.e881b21fb6e06478ddff96759b2bb88d.png"`,
                }}
              ></div>
              <div
                className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
                style={{
                  backgroundImage: `url("/_next/static/media/utility-first.026b60de29ca82d161ad911ac5f526af.png"`,
                }}
              ></div>
            </div>
            <div className="peer group flex-auto ml-6">
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                <a
                  className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                  href="/docs/utility-first"
                >
                  {definition.name}
                  <svg
                    viewBox="0 0 3 6"
                    className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>{definition.description}</p>
              </div>
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
          </li>
        );
      })}
    </ul>
  );
};
