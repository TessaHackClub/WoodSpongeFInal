import P5Sketch from './p5sketch'; // Import the reusable sketch component
import mySketch from './sketches/waterOil'; // Import your sketch logic

const P5SketchWrapper = () => {
    console.log("Rendering P5SketchWrapper");  // Debugging render calls
    return <P5Sketch sketch={mySketch} />;
  };
  
export default P5SketchWrapper;

