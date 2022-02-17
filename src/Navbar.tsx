import { BalancerSVG } from "./BalancerSVG";
import { EmblemSVG } from "./EmblemSVG";

export const Navbar = () => {
  return (
    <div className="bg-blue-800 flex gap-12 justify-center items-center py-1 border-blue-900">
      <EmblemSVG />

      <BalancerSVG />
    </div>
  );
};
