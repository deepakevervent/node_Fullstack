import React from "react";
import {
  Button,
  Grid,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Box,
} from "@mui/material";
import "../../Employee/Profile/Profile.scss";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function Profile() {
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

  const [open, setOpen] = React.useState(false);

  return (
    <Grid container spacing={3} className="profileSection">
      <Grid item xs={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className="mb-0">Profile</h3>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="profilePicture">
              <span className="profileIcon">
                <img src="./images/profile_vector_icon.svg" alt="profile" />
              </span>
              <span className="profileName">
                <h6>Evervent</h6>
                <Link href="#" underline="none">
                  Change Picture
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
            />
          </Grid>
        </Grid>
    
        <Grid container spacing={3}>
          <Grid item xs={4} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item md={4} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Pincode"
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} className="mb-5">
            <p>Mohali, Punjab</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Organization Type"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="GSTIN"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} className="ctaBtn mb-5">
            <Button className="submitBtn">Save Changes</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
