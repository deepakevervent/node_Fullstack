import { Grid } from '@mui/material'
import React from 'react'
import "./RepairVehicle.scss"

function RepairVehicle() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3 className="mb-0">Repair Vehicle</h3>
      </Grid>
      <Grid item xs={12} className="text-center">
        <img src='./images/coming_soon.svg' className="mb-5" height="260px" alt='coming soon' />
        <div className="comingsoon">
            <h1><span></span></h1>
            {/* <div className="load"></div> */}
        </div>
        <h5>We are working on it.</h5>
      </Grid>
    </Grid>
  )
}

export default RepairVehicle