import { Box } from "@material-ui/core";
import {Button, Grid, TextField} from "@mui/material";
import React from "react";
import "../Setting.scss";

export default function Location() {
  return (
    <Grid container spacing={3} className="permissions">
      <Grid item xs={12}>
        <h3 className="mb-0">Location</h3>
      </Grid>
      <Grid item xs={12}>
        <h5 className="mb-0">Enable / Disable the permissions</h5>
      </Grid>
      <Grid item xs={12}>
        <Box className="bluetopbar">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <h5>User</h5>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
              <span className="equalWidth"><h5>Admin</h5></span>
              <span className="equalWidth"><h5>Super-Admin</h5></span>
              <span className="equalWidth"><h5>Employee</h5></span>
            </Grid>
          </Grid>
        </Box>
        <Box className="allowsetting">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={4}>
              <h5>Evervent</h5>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              
            </Grid>
          </Grid>
        </Box>
        <Box className="allowsetting">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={4}>
              <h5>Evervent</h5>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
            <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
            </Grid>
          </Grid>
        </Box>
        <Box className="allowsetting">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={4}>
              <h5>Evervent</h5>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
            <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
              <span className="equalWidth">
                <input type="checkbox" className="switch"/>
              </span>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      
    </Grid>
  );
}
