import React, { useRef, useEffect } from "react";
import p5 from "p5"; // Import p5 as the actual instance


type P5SketchProps = {
  sketch: (p: p5) => void; // Now it expects an instance of p5
};

const P5Sketch: React.FC<P5SketchProps> = ({ sketch }) => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sketchRef.current) {
      const p5Instance = new p5(sketch, sketchRef.current);

      // Cleanup when the component unmounts
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]);

  return <div ref={sketchRef} />;
};

export default P5Sketch;
