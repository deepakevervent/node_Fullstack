import { Button, FormControl, Grid, InputLabel, Link, MenuItem, Modal, TextField } from '@mui/material'
import Select, {SelectChangeEvent} from "@mui/material/Select";
import { Box } from '@mui/system';
import React from 'react'
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


function Vehicles() {
    const label = {inputProps: {"aria-label": "Switch demo"}};
    const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  
    const [annualIncome, setAnnualIncome] = React.useState<
      number | string | Array<number | string>
    >(300000);
    const [gender, setGender] = React.useState("");
    const [maritalStatus, setMaritalStatus] = React.useState("");
    const [relation, setRelation] = React.useState("");
    const [age, setAge] = React.useState("");
    const [dob, setDob] = React.useState<Date | null>(
      new Date("2014-08-18T21:11:54")
    );
  
    const handleChange = (event: SelectChangeEvent, attrName: string) => {
      if (attrName === "gender") {
        setGender(event.target.value as string);
      } else if (attrName === "maritalStatus") {
        setMaritalStatus(event.target.value as string);
      } else if (attrName === "relation") {
        setRelation(event.target.value as string);
      } else if (attrName === "age") {
        setAge(event.target.value as string);
      }
    };
  
    const handleChangeDate = (newValue: Date | null) => {
      setDob(newValue);
    };
  
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setAnnualIncome(newValue);
    };
  
    const [open, setOpen] = React.useState(false);
  
    
  return (
    <Grid container spacing={0} className="addedVehicles">
      <Grid item md={9} lg={7}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={6}>
            <h3 className="mb-0">Vehicles</h3>
          </Grid>
          <Grid item xs={6} className="text-right">
            <Link
              href="#"
              className="greenBtn addfile"
              underline="none"
              onClick={() => {
                setOpen(true);
              }}>
              Add Vehicle
            </Link>
            <Modal open={open} className="modalWrapper">
              <Box className="modalInner">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Link
                      href="#"
                      className="close-button"
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                    <h5 className="popup-heading">Add New Vehicle</h5>
                  </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={8} className="inputField">
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      className="regno"
                      placeholder="DL01AS5552"
                    />
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Vehicle Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={relation}
                        label="Relationship"
                        onChange={(e) => handleChange(e, "relation")}>
                        <MenuItem value={"b"}>Four Wheeler</MenuItem>
                        <MenuItem value={"s"}>Two Wheeler</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Policy Expiry Date"
                        value={startDate}
                        onChange={(newValue) => {
                          setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Make &amp; Model
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={(e) => handleChange(e, "age")}>
                        <MenuItem value={"i10"}>Hyundai i10</MenuItem>
                        <MenuItem value={"grandi10"}>
                          Hyundai Grand i10
                        </MenuItem>
                        <MenuItem value={"grandi10nios"}>
                          Hyundai Grand i10 NIOS
                        </MenuItem>
                        <MenuItem value={"i20"}>Hyundai i20</MenuItem>
                        <MenuItem value={"i20elite"}>
                          Hyundai i20 Elite
                        </MenuItem>
                        <MenuItem value={"verna"}>Hyundai Verna</MenuItem>
                        <MenuItem value={"fludicverna"}>
                          Hyundai Fludic Verna
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Fuel Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={relation}
                        label="Fuel Type"
                        onChange={(e) => handleChange(e, "relation")}>
                        <MenuItem value={"Diesel"}>Diesel</MenuItem>
                        <MenuItem value={"petrol"}>Petrol</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className="inputField">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Variant
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={relation}
                        label="Variant"
                        onChange={(e) => handleChange(e, "relation")}>
                        <MenuItem value={"Diesel"}>Diesel</MenuItem>
                        <MenuItem value={"petrol"}>Petrol</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Reg. Date"
                        value={startDate}
                        onChange={(newValue) => {
                          setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6} className="inputField">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Previous Insurer
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={relation}
                        label="Previous Insurer"
                        onChange={(e) => handleChange(e, "relation")}>
                        <MenuItem value={"Diesel"}>Diesel</MenuItem>
                        <MenuItem value={"petrol"}>Petrol</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="ctaBtn"
                    style={{ textAlign: "center" }}>
                    <Button className="submitBtn">
                      Submit Details
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </Grid>
          <Grid item md={12}>
            <h5>Four Wheeler</h5>
            <Box className="vehicleDetails">
              <span className="vehicleIcon">
                <img src="./../images/four_wheeler_icon.svg" alt="vehicle" />
              </span>
              <span className="vehicleName">
                <h6>Maruti Suzuki Alto VXi</h6>
                <p>Petrol, 800 cc</p>
              </span>
              <span className="actionBtns">
                <Link href="#" className="redBtn delete" underline="none">
                  Remove
                </Link>
                <Link href="#" className="orangeBtn reload" underline="none">
                  Renew
                </Link>
              </span>
              <div className="regDetails">
                <span>
                  <p>Vehicle Number</p>
                  <h6>PB01AB1234</h6>
                </span>
                <span className="text-right">
                  <p>Policy Status</p>
                  <h6 className="expired">Expired</h6>
                </span>
              </div>
            </Box>

          </Grid>
          <Grid item md={12}>
            <h5>Two Wheeler</h5>
            <Box className="vehicleDetails">
              <span className="vehicleIcon">
                <img src="./../images/two_wheeler_icon.svg" alt="vehicle" />
              </span>
              <span className="vehicleName">
                <h6>Honda Active 5G</h6>
                <p>160 cc</p>
              </span>
              <span className="actionBtns">
                <Link href="#" className="redBtn delete" underline="none">
                  Remove
                </Link>
                <Link href="#" className="orangeBtn reload" underline="none">
                  Renew
                </Link>
              </span>
              <div className="regDetails">
                <span>
                  <p>Vehicle number</p>
                  <h6>PB01AB1234</h6>
                </span>
                <span className="text-right">
                  <p>Policy Status</p>
                  <h6 className="active">Active</h6>
                </span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Vehicles