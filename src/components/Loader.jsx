import { useEffect, useState } from "react";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExit(true), 300);
        setTimeout(() => setHide(true), 1400);
      }
    }

    requestAnimationFrame(tick);
  }, []);

  if (hide) return null;

  return (
    <div className={`loader-overlay ${exit ? "loader-exit" : ""}`}>
      <div className="loader-panel loader-panel-top"></div>
      <div className="loader-panel loader-panel-bottom"></div>
      <div className={`loader-center ${exit ? "loader-center-fade" : ""}`}>
        <span className="loader-number">{count}</span>
        <span className="loader-percent">%</span>
      </div>
    </div>
  );
}