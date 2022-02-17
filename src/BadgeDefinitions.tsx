export const BadgeDefinitions = () => (
  <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
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
            Utility-First Fundamentals
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
          <p>
            Using a utility-first workflow to build complex components from a
            constrained set of primitive utilities.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url("/_next/static/media/mobile-first.c6fc0dafe6fc9216570cb2de13b45b7a.png"`,
          }}
        ></div>
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url("/_next/static/media/mobile-first.b45aeb2383c2d7959ae999da63f33bd7.png"`,
          }}
        ></div>
      </div>
      <div className="peer group flex-auto ml-6">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
          <a
            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
            href="/docs/responsive-design"
          >
            Responsive Design
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
          <p>
            Build fully responsive user interfaces that adapt to any screen size
            using responsive modifiers.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-blue-500 dark:highlight-white/20">
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url("/_next/static/media/state-variants.59ea0c04efe1681e59fbdd84ac42c4af.png"`,
          }}
        ></div>
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url("/_next/static/media/state-variants.591b0b870f83326c3f962c00d22af7cd.png"`,
          }}
        ></div>
      </div>
      <div className="peer group flex-auto ml-6">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
          <a
            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
            href="/docs/hover-focus-and-other-states"
          >
            Hover, Focus &amp; Other States
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
          <p>
            Style elements in interactive states like hover, focus, and more
            using conditional modifiers.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-slate-600 dark:highlight-white/20">
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url("/_next/static/media/dark-mode.6314a2ce83949930550506e5eb9fe3eb.png"`,
          }}
        ></div>
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url("/_next/static/media/dark-mode.c8bf473eb48fcbb60bc9923cc7de17b7.png"`,
          }}
        ></div>
      </div>
      <div className="peer group flex-auto ml-6">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
          <a
            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
            href="/docs/dark-mode"
          >
            Dark Mode
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
          <p>
            Optimize your site for dark mode directly in your HTML using the
            dark mode modifier.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-sky-500 dark:highlight-white/20">
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url("/_next/static/media/component-driven.4d06a0fe2f59709e7be49ee9b605d1ad.png"`,
          }}
        ></div>
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url("/_next/static/media/component-driven.4942ff30ad4c461811106f345f086c3d.png"`,
          }}
        ></div>
      </div>
      <div className="peer group flex-auto ml-6">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
          <a
            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
            href="/docs/reusing-styles"
          >
            Reusing Styles
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
          <p>
            Manage duplication and keep your projects maintainable by creating
            reusable abstractions.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
    <li className="relative flex items-start">
      <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-pink-500 dark:highlight-white/30">
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url("/_next/static/media/customization.968c9d40470d28e00fa688a6e3a2e494.png"`,
          }}
        ></div>
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url("/_next/static/media/customization.d8cbd0ed4ac0c508a5fe7858b99f9cd1.png"`,
          }}
        ></div>
      </div>
      <div className="peer group flex-auto ml-6">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
          <a
            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
            href="/docs/adding-custom-styles"
          >
            Customizing the Framework
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
          <p>
            Customize the framework to match your brand and extend it with your
            own custom styles.
          </p>
        </div>
      </div>
      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
    </li>
  </ul>
);
