import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import "./Support.scss";
import Select, {SelectChangeEvent} from "@mui/material/Select";

function Support() {
  const [reason, setReason] = React.useState("");
  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "reason") {
      setReason(event.target.value as string);
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3 className="mb-0">Want to talk to us? Write below.</h3>
      </Grid>
      <Grid item md={8} lg={4}>
        <Grid container spacing={1}>
          <Grid item xs={12} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Reason of writing to us
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={reason}
                label="Reason of writing to us"
                onChange={(e) => handleChange(e, "reason")}
              >
                <MenuItem value={"b"}>Facing Issue</MenuItem>
                <MenuItem value={"s"}>Feedback</MenuItem>
                <MenuItem value={"s"}>Complaint</MenuItem>
                <MenuItem value={"s"}>Need Support</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className="mb-5">
            <p>Describe here</p>
            <textarea
              className="textareabox"
              placeholder="Writing here..."
            ></textarea>
          </Grid>
          <Grid item xs={12} className="ctaBtn mb-5">
            <Button className="submitBtn">Submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Support;
