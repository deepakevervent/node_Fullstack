import {Button, Grid, TextField} from "@mui/material";
import React from "react";

export default function ChangePassword() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3 className="mb-0">Create New Password</h3>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item md={6} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              type={"password"}
              id="outlined-basic"
              label="Old Password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              type={"password"}
              id="outlined-basic"
              label="New Password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              type={"password"}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} className="ctaBtn mb-5">
            <Button className="submitBtn">Submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
