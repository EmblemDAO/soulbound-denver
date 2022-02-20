export const Header = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-white text-4xl  uppercase tracking-wide font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-slate-300">{description}</p>
      )}
    </div>
  );
};
