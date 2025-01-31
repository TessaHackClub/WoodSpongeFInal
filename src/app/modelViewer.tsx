import React from 'react';

interface ModelViewerProps {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt = "A 3D model",
  ar = true,
  autoRotate = true,
  cameraControls = true,
}) => {
  // Construct the model-viewer HTML string
  const modelViewerHTML = `
    <model-viewer 
      src="${src}" 
      alt="${alt}" 
      ${ar ? 'ar="true"' : ''} 
      ${autoRotate ? 'auto-rotate="true"' : ''} 
      ${cameraControls ? 'camera-controls="true"' : ''} 
      style="width: 300px; height: 500px;">
    </model-viewer>
  `;
  console.log("Model source:", src);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: modelViewerHTML,
      }}
    />
  );
};

export default ModelViewer;
