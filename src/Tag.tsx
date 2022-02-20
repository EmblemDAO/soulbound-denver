import { ReactNode } from "react";

export const formatUserAddress = (address: string) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};

export const Tag = ({
  children,
  extra,
  primary = true,
  ...props
}: {
  children: ReactNode;
  extra?: string | ReactNode;
  primary?: true;
}) => (
  <span
    {...props}
    className={`ml-3 justify-center text-xs leading-5 font-medium cursor-pointer ${
      primary
        ? "text-sky-600 dark:text-sky-400 bg-sky-400/10"
        : "text-rose-600 dark:text-rose-400 bg-rose-400/10"
    } rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20`}
  >
    <strong className="font-semibold">{children}</strong>
    {extra && (
      <>
        <svg
          width="2"
          height="2"
          fill="currentColor"
          aria-hidden="true"
          className={`ml-2 ${
            primary
              ? "text-sky-600 dark:text-sky-400/70"
              : "text-rose-600 dark:text-rose-400/70"
          }`}
        >
          <circle cx="1" cy="1" r="1"></circle>
        </svg>
        <span className="ml-2">{extra}</span>
      </>
    )}
    <svg
      width="3"
      height="6"
      className={`ml-3 overflow-visible ${
        primary
          ? "text-sky-300 dark:text-sky-400"
          : "text-rose-300 dark:text-rose-400"
      }`}
      aria-hidden="true"
    >
      <path
        d="M0 0L3 3L0 6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </span>
);
