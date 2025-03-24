import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function SplineScene() {
  const [splineApp, setSplineApp] = useState(null);

  function onLoad(spline) {
    setSplineApp(spline);
  }

  useEffect(() => {
    if (!splineApp) return;

    const earth = splineApp.findObjectByName("Earth"); 
    if (!earth) return;

    let rotateSpeed = 0.01;

    const rotateEarth = () => {
      earth.rotation.y += rotateSpeed; 
      requestAnimationFrame(rotateEarth);
    };

    rotateEarth(); 
  }, [splineApp]);

  return (
    <div className="spline-container">
      <Spline
        scene="https://prod.spline.design/Wg2YvoDYGzueDq10/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
