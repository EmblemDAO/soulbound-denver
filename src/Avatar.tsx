import { useEffect, useRef } from "react";
import { DrawZzSprite } from "./DrawZzsprite";
import { formatUserAddress, Tag } from "./Tag";

interface AvatarProps {
  address: string;
  badgesEarned: number;
}

export const Avatar = ({ address, badgesEarned }: AvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    console.log(canvas);
    if (canvas) {
      const context = canvas.getContext("2d");
      const size = 12 + badgesEarned * 4;
      context?.scale(5, 5);
      context?.translate(size / 2, 1);
      DrawZzSprite({ context, seed: address, size });
    }
  }, [canvasRef, address, badgesEarned]);

  return (
    <div className="flex-col gap-2">
      <canvas height={160} width={200} ref={canvasRef} className="" />
      <Tag extra={<span>{badgesEarned} Badges</span>}>
        {formatUserAddress(address)}
      </Tag>
    </div>
  );
};
