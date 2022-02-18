/* This example requires Tailwind CSS v2.0+ */

const steps = [
  {
    id: "01",
    name: "Track meaningful network activity on Balancer with The Graph",
    description: "View Subgraph on Github",
    href: "#",
    status: "complete",
  },
  {
    id: "02",
    name: "Query subgraph to create Leaderboard of Balancer users",
    description: "Users ordered by # of badges earned",
    href: "#",
    status: "current",
  },
  {
    id: "03",
    name: "Mint Soulbound (Non-Transferrable) NFT Badges",
    description: "Inspired by Vitalik's Soulbound essay.",
    href: "#",
    status: "upcoming",
  },
  {
    id: "04",
    name: "Use Soulbound Badge for Snapshot Voting Strategy",
    description: "View Snapshot Space",
    href: "#",
    status: "upcoming",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Steps() {
  return (
    <div className="lg:border-t lg:border-b lg:border-sky-200">
      <nav className="mx-8" aria-label="Progress">
        <ol
          role="list"
          className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-sky-200 lg:rounded-none"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                  stepIdx === steps.length - 1 ? "border-t-0 rounded-b-md" : "",
                  "border border-sky-200 overflow-hidden lg:border-0"
                )}
              >
                <a href={step.href} className="group">
                  <span
                    className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-sky-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      stepIdx !== 0 ? "lg:pl-9" : "",
                      "px-6 py-5 flex items-start text-sm font-medium bg-sky-900 "
                    )}
                  >
                    <span className="flex-shrink-0">
                      <span className="w-10 h-10 flex items-center justify-center border-2 border-sky-300 rounded-full">
                        <span className="text-sky-100">{step.id}</span>
                      </span>
                    </span>
                    <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                      <span className="text-xs font-semibold text-sky-100 tracking-wide uppercase">
                        {step.name}
                      </span>
                      <span className="text-sm font-medium text-sky-100">
                        {step.description}
                      </span>
                    </span>
                  </span>
                </a>

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div
                      className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-sky-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0V31L10.5 41L0.5 51V82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
