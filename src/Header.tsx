export const Header = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <h2 className="text-white text-4xl mb-10 uppercase tracking-wide font-bold">
      {title}
    </h2>
  );
};
