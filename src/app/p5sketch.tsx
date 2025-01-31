import React, { useRef, useEffect } from "react";

const P5Sketch: React.FC<{ sketch: any }> = ({ sketch }) => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: any;

    // Ensure the code runs only in the client (browser)
    if (typeof window !== "undefined") {
      import("p5").then((p5) => {
        p5Instance = new p5.default(sketch, sketchRef.current!);
      });
    }

    return () => {
      if (p5Instance) {
        p5Instance.remove(); // Clean up p5 instance on unmount
      }
    };
  }, [sketch]);

  return <div ref={sketchRef} />;
};

export default P5Sketch;
