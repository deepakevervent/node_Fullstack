import React from 'react'
import "./RiskScore.scss";

interface Props {
  size: number;
  progress: number;
  label_progress:number;
  trackWidth: number;
  trackColor: string;
  indicatorWidth: number;
  indicatorColor: string;
  indicatorCap: string;
  label: string;
  labelColor: string;
  spinnerMode: boolean;
  spinnerSpeed: number;
  class_name: string;
}

const Progress_Bar: React.FC<Props> = ({
    size,
    progress,
    label_progress,
    trackWidth,
    trackColor,
    indicatorWidth,
    indicatorColor,
    indicatorCap,
    label,
    labelColor,
    spinnerMode,
    spinnerSpeed,
    class_name
}) => {
    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

        

  return (
    <div className={class_name}>
      <svg className="svg-pi" style={{ width: size, height: size }}>
        <linearGradient id="gradient">
        <stop stop-color="green" offset="0%" />
          <stop stop-color="green" offset="5%" />
          <stop stop-color="yellow" offset="50%" />
          <stop stop-color="#F26D22" offset="80%" />
        <stop stop-color="red" offset="100%" />
      </linearGradient>
        <circle
          className="svg-pi-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={226}
          strokeLinecap={"round"}
        />
        <circle
          className={`svg-pi-indicator ${
            spinnerMode ? "svg-pi-indicator--spinner" : ""
          }`}
          style={{ animationDuration: (spinnerSpeed * 1000).toString() }}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={"round"}
        />
      </svg>
      <div className="dashCircle"></div>
      <h3>
        <span>Risk Cover:</span> {label_progress}%
        <p>Complete your profile to know your ideal insurance requirement</p>
      </h3>
      <div className='meterbox'>
        <div className='niddle' style={{rotate:progress*3+"deg"}}><img src='./images/niddle.svg' alt='niddle'/></div>
      </div>
  </div>
  )
}

export default Progress_Bar