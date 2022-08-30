import { Button, FormControl, Grid, InputLabel, Link, MenuItem, Modal, TextField } from '@mui/material'
import Select, {SelectChangeEvent} from "@mui/material/Select";
import { Box } from '@mui/system';
import React from 'react'


function Familymember() {
    const label = {inputProps: {"aria-label": "Switch demo"}};
  
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
    <Grid container spacing={0} className="familyMembers">
      <Grid item md={10} lg={7}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={6}>
            <h3 className="mb-0">Family Member</h3>
          </Grid>
          <Grid item xs={6} className="text-right">
              <Link
                href="#"
                className="greenBtn addfile"
                underline="none"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add member
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
                      <h5 className="popup-heading">Add New Member</h5>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} className="inputField">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6} className="inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Relationship
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={relation}
                          label="Relationship"
                          onChange={(e) => handleChange(e, "relation")}
                        >
                          <MenuItem value={"b"}>Brother</MenuItem>
                          <MenuItem value={"s"}>Sister</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} className="inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={(e) => handleChange(e, "age")}
                        >
                          <MenuItem value={"20"}>20 years</MenuItem>
                          <MenuItem value={"22"}>22 years</MenuItem>
                          <MenuItem value={"24"}>24 years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className="ctaBtn"
                      style={{textAlign: "center"}}
                    >
                      <Button className="submitBtn">
                        Submit Details
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
          </Grid>
          <Grid item md={12}>
            <Box className="memberDetails">
              <span className="memberIcon">
                <img src="./images/profile_vector_icon.svg" alt="profile" />
              </span>
              <span className="memberName">
                <h6>Shivani Raghuvanshi</h6>
                <p>Wife, 30 years</p>
                <Link href="#" underline="none">
                  Add KYC
                </Link>
              </span>
              <span className='actionBtns'>
                <Link href="#" className="redBtn delete" underline="none">
                  Remove
                </Link>
                <Link href="#" className="blueBtn edit" underline="none">
                  Edit
                </Link>
              </span>
            </Box>
            <Box className="memberDetails">
              <span className="memberIcon">
                <img src="./images/profile_vector_icon.svg" alt="profile" />
              </span>
              <span className="memberName">
                <h6>Devansh Raghuvanshi</h6>
                <p>Son, 30 years</p>
                <Link href="#" underline="none">
                  Add KYC
                </Link>
              </span>
              <span className='actionBtns'>
                <Link href="#" className="redBtn delete" underline="none">
                  Remove
                </Link>
                <Link href="#" className="blueBtn edit" underline="none">
                  Edit
                </Link>
              </span>
            </Box>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Familymember