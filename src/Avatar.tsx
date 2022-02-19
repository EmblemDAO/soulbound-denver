import { useEffect, useRef } from "react";
import { DrawZzSprite } from "./DrawZzsprite";
import { Tag } from "./Tag";

interface AvatarProps {
  address: string;
  badgesEarned: number;
}

export const Avatar = ({ address, badgesEarned }: AvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      const size = 8 + badgesEarned;
      context?.scale(5, 5);
      context?.translate(size / 2, 1);
      DrawZzSprite({ context, seed: `${badgesEarned}`, size });
    }
  }, [canvasRef, address, badgesEarned]);

  return (
    <div className="flex-col gap-2">
      <canvas height={120} width={200} ref={canvasRef} className="" />
      <Tag>{badgesEarned} Badges Earned</Tag>
    </div>
  );
};
