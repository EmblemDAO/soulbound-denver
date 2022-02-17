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
      console.log(context);
      DrawZzSprite({ context, seed: address, size: 12 + badgesEarned * 4 });
    }
  }, [canvasRef, address, badgesEarned]);

  return <canvas className="w-16 h-4 transform" ref={canvasRef} />;
};
