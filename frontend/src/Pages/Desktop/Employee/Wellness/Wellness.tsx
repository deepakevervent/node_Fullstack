import {FormControl, Grid, InputLabel, MenuItem} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import React from "react";
import "./Wellness.scss";

function Wellness() {
  const all_video_data = [
    {
      link: "https://www.youtube.com/embed/8fdYt5R1uUw",
      video_title: "Yoga for Complete Begineers",
      date: "12 days ago",
      views: "6k",
    },
    {
      link: "https://www.youtube.com/embed/LrJe22ekcF8",
      video_title:
        "Surya Namaskara | Flexibility & Strength Asanas | Learn with Shilpa Shetty Kundra",
      date: "14 days ago",
      views: "3k",
    },
    {
      link: "https://www.youtube.com/embed/cVRnZa3_ing",
      video_title:
        "Warm Up Routine | Shilpa Shetty Kundra | Health and Fitness",
      date: "01 months ago",
      views: "24k",
    },
    {
      link: "https://www.youtube.com/embed/GHNMnPRkNng",
      video_title:
        "10 Asanas to Improve Flexibility | The Art of Balance | Shilpa Shetty Kundra",
      date: "01 months ago",
      views: "1.2k",
    },
    {
      link: "https://www.youtube.com/embed/yKItGCpL73M",
      video_title:
        "Quick 5-Minute Morning Stretches | The Art of Balance | Shilpa Shetty Kundra",
      date: "02 months ago",
      views: "24k",
    },
    {
      link: "https://www.youtube.com/embed/u5JN-DO1Bfc",
      video_title:
        "Gomukhasana | Flexibility Asanas | Learn Yoga with Shilpa Shetty",
      date: "03 months ago",
      views: "2k",
    },
  ];

  const [videoType, setVideoType] = React.useState("all");
  const [videoData, setVideoData] = React.useState(all_video_data);

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "videoType") {
      setVideoType(event.target.value as string);
    }
  };

  return (
    <Grid container spacing={3} className="wellness">
      <Grid item md={9} lg={10}>
        <h3 className="mb-0">Wellness</h3>
      </Grid>
      <Grid item md={3} lg={2} className="inputField">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={videoType}
            label="Category"
            onChange={(e) => handleChange(e, "videoType")}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"health"}>Health</MenuItem>
            <MenuItem value={"yoga"}>Yoga</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {videoData.map((data, index) => {
            return (
              <Grid item xs={12} md={4} lg={3}>
                <div className="wellnessCards">
                  <div className="videoWrapper">
                    <iframe
                      width="100%"
                      height="264"
                      src={data.link}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <h6 title={data.video_title}>{data.video_title}</h6>
                  <p className="subDetail">
                    {data.date}
                    <span>{data.views} Views</span>
                  </p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Wellness;
