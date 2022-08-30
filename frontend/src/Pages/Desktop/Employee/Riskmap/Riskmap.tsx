import { Box, Grid, Link } from '@material-ui/core';
import React from 'react'
import RiskScore from '../../../../Components/RiskScore/RiskScore';
import "./Riskmap.scss";

function Riskmap() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h3>Risk Map</h3>

            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box className='riskmapScore'>
                    <RiskScore class_name='svg-pi-wrapper riskmap' progress_one={50}></RiskScore>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box className='riskPolicyBox animate__animated animate__flipInX' >
                    <Grid className='py' container alignItems='center' spacing={3}>
                      <Grid item md={6} lg={3}>
                        <h6 className='healthIcon'>Health</h6>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='inrIcon'>0 INR</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='docIcon'>0 Policy</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                      <Link href="#" underline="none" className='eyeIcon'>View Quotes</Link>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Box className='riskPolicyBox animate__animated animate__flipInX' style={{animationDelay:"600ms"}}>
                    <Grid className='py' container alignItems='center' spacing={3}>
                      <Grid item md={6} lg={3}>
                        <h6 className='bikeIcon'>Bike</h6>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='inrIcon'>0 INR</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='docIcon'>0 Policy</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                      <Link href="#" underline="none" className='eyeIcon'>View Quotes</Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className='riskPolicyBox animate__animated animate__flipInX' style={{animationDelay:"300ms"}}>
                    <Grid className='py' container alignItems='center' spacing={3}>
                      <Grid item md={6} lg={3}>
                        <h6 className='carIcon'>Car</h6>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='inrIcon'>0 INR</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='docIcon'>0 Policy</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                      <Link href="#" underline="none" className='eyeIcon'>View Quotes</Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className='riskPolicyBox animate__animated animate__flipInX'style={{animationDelay:"900ms"}}>
                    <Grid className='py' container alignItems='center' spacing={3}>
                      <Grid item md={6} lg={3}>
                        <h6 className='termIcon'>Term</h6>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='inrIcon'>0 INR</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='docIcon'>0 Policy</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                      <Link href="#" underline="none" className='eyeIcon'>View Quotes</Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className='riskPolicyBox animate__animated animate__flipInX'style={{animationDelay:"1200ms"}}>
                    <Grid className='py' container alignItems='center' spacing={3}>
                      <Grid item md={6} lg={3}>
                        <h6 className='investmentIcon'>Investment</h6>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='inrIcon'>0 INR</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                        <p className='docIcon'>0 Policy</p>
                      </Grid>
                      <Grid item md={6} lg={3}>
                      <Link href="#" underline="none" className='eyeIcon'>View Quotes</Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Riskmap