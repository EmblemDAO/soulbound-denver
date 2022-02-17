import { useEffect, useRef } from "react";
import { DrawZzSprite } from "./DrawZzsprite";

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
      context?.scale(5, 5);
      // context?.translate(10, 0);
      console.log(context);
      DrawZzSprite({ context, seed: address, size: 12 + badgesEarned * 4 });
    }
  }, [canvasRef, address, badgesEarned]);

  return (
    <div className="flex-col gap-2">
      <canvas
        height={200}
        width={200}
        ref={canvasRef}
        className="border border-gray-50"
      />
    </div>
  );
};
