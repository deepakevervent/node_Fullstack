import {Button, Checkbox, FormControlLabel, Grid} from "@mui/material";
import React from "react";

function House() {
  return (
    <Grid container spacing={1} className="houseSection">
      <Grid item xs={12}>
        <h3 className="mb-0">House</h3>
      </Grid>
      <Grid item xs={12} className="pb-0">
        <FormControlLabel
          control={
            <Checkbox
              style={{
                color: "#6B62DC",
              }}
            />
          }
          label="Flat"
        />
      </Grid>
      <Grid item xs={12} className="pb-0">
        <FormControlLabel
          control={
            <Checkbox
              style={{
                color: "#6B62DC",
              }}
            />
          }
          label="Independent House"
        />
      </Grid>
      <Grid item xs={12} className="pb-0">
        <FormControlLabel
          control={
            <Checkbox
              style={{
                color: "#6B62DC",
              }}
            />
          }
          label="I live with parants"
        />
      </Grid>
      <Grid item xs={12} className="ctaBtn mb-5">
        <Button className="submitBtn">Save Changes</Button>
      </Grid>
    </Grid>
  );
}

export default House;
