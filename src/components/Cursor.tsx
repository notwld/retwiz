import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <div className="relative">
        <div className=" absolute inset-0 rounded-full bg-slate-600 blur-3xl"></div>
        <div className="relative z-10 w-16 h-16 ring-2 ring-violet rounded-full"></div>
      </div>
    </div>
  );
};

export default Cursor;
