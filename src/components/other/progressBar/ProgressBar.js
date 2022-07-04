import React from "react";
import "./Progress.css";

function ProgressBar({ progress }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      background:
        progress < 50 ? "#ef5350" : progress > 90 ? "#66bb6a" : "#ffa726",
      width: `${progress}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
