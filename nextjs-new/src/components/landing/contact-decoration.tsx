export const ContactDecoration = () => {
  return (
    <svg
      viewBox="0 0 369 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 bottom-0 pointer-events-none hidden xl:block w-[300px] xl:w-[369px] opacity-10 dark:opacity-20"
    >
      <path
        d="M369 233V0C301.5 25.5 245.5 89 208 142.5C170.5 196 114.5 233 0 233H369Z"
        fill="currentColor"
        className="text-[var(--color-one)]"
      />
      <circle
        cx="280"
        cy="80"
        r="10"
        fill="currentColor"
        className="text-blue-400"
      />
      <circle
        cx="320"
        cy="180"
        r="15"
        fill="currentColor"
        className="text-purple-400"
      />
      <circle
        cx="150"
        cy="220"
        r="5"
        fill="currentColor"
        className="text-indigo-400"
      />
    </svg>
  );
};
