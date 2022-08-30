import React from 'react'
import Progress_Bar from './Progress_Bar';
import "./RiskScore.scss";

interface Props {
  progress_one: number;
  class_name: string;
}

const RiskScore: React.FC<Props> = ({
    progress_one,
    class_name,
}) => {
    
  const [loading, setLoading] = React.useState(true)
  const [progress, setProgress] = React.useState(0)
  const[labelProgress, setLabelProgress] = React.useState(0)
  const loadingDuration = 3000 // 3 seconds
  const loadingDuration_label = 1500 // 1.5 seconds

  React.useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (labelProgress >= progress_one) return
      setLabelProgress(labelProgress + 1)
    }, loadingDuration_label/100)
    
    let loadingTimeout_one = setTimeout(() => {
      if (progress >= Math.round(progress_one/1.66)) return
      setProgress(progress + 1)
    }, loadingDuration/100)
    

    if (labelProgress == progress_one) {
      setLoading(false)
      clearTimeout(loadingTimeout)
      clearTimeout(loadingTimeout_one)
    }

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [progress, labelProgress, loading])

  React.useEffect(() => {
    document.title = "Employee Benefits"
  }, [])
  
  return (
    <div className="App">
      <Progress_Bar class_name={class_name} size={200} progress={progress} label_progress={labelProgress} trackWidth={8} trackColor={'#EEF6FE'} indicatorWidth={8} indicatorCap={"round"} label={""} labelColor={'#333'} spinnerMode={false} spinnerSpeed={1} indicatorColor={"red"} />
    </div>
  )
}

export default RiskScore