import { useQuery } from "@apollo/client";
import { groupBy } from "lodash";
import { DEFINITIONS } from "./lib/queries";
import { Tag } from "./Tag";

const colors = [
  {
    color: "bg-sky-500",
  },
  {
    color: "bg-emerald-500",
  },
  {
    color: "bg-amber-500",
  },
];

export const BadgeDefinitions = () => {
  const { loading, error, data } = useQuery(DEFINITIONS);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error!</div>;
  }

  const badgeDefinitions = groupBy(data.badgeDefinitions, "metric.id");

  return (
    <ul className="grid grid-cols-1 gap-x-16 gap-y-4 xl:grid-cols-2">
      {Object.entries(badgeDefinitions).map(([metric, definitions]) => {
        return (
          <li className="border-slate-500 border rounded-lg space-y-4 p-4">
            {definitions.map((definition, i) => {
              return (
                <div className="relative flex items-center justify-between">
                  <div
                    className={`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none ${colors[i].color} dark:highlight-white/20`}
                  >
                    <div className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"></div>
                  </div>
                  <div className="peer group flex-auto ml-6">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-200">
                      {definition.id}
                    </h3>
                    <div className="prose prose-slate prose-sm text-slate-500 dark:prose-dark">
                      <p>{definition.description}</p>
                    </div>
                  </div>
                  <div>
                    <Tag>{definition.earnedBadgeCount} Winners</Tag>
                  </div>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};
