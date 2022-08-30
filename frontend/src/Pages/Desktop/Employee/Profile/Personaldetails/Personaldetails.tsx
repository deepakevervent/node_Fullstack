import React from "react";
import {
  Button,
  Grid,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  Slider,
  Switch,
  Modal,
  Box,
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

import TextField from "@mui/material/TextField";
import {
  validateEmail,
  validateFullName,
  validateMobileNumber,
  validatePincode,
} from "../../../../../Supporting files/HelpingFunction";

function Personaldetails() {
  //Profiel Variables
  const [fullName, setFullName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [maritalStatus, setMaritalStatus] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [warnFullName, setWarnFullName] = React.useState(false);
  const [warnGender, setWarnGender] = React.useState(false);
  const [warnDob, setWarnDob] = React.useState(false);
  const [warnMaritalStatus, setWarnMaritalStatus] = React.useState(false);
  const [warnMobile, setWarnMobile] = React.useState(false);
  const [warnEmail, setWarnEmail] = React.useState(false);
  const [warnPincode, setWarnPincode] = React.useState(false);

  //Add Member variables
  const [addMemberStatus, setAddMemberStatus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [relationship, setRelationship] = React.useState("");
  const [age, setAge] = React.useState("");
  const [warnName, setWarnName] = React.useState(false);
  const [warnRelationship, setWarnRelationship] = React.useState(false);
  const [warnAge, setWarnAge] = React.useState(false);

  const [annualIncome, setAnnualIncome] = React.useState<
    number | string | Array<number | string>
  >(300000);

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "gender") {
      setGender(event.target.value as string);
      setWarnGender(event.target.value.toString().length > 0 ? false : true);
    } else if (attrName === "maritalStatus") {
      setMaritalStatus(event.target.value as string);
      setWarnMaritalStatus(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName === "relationship") {
      setRelationship(event.target.value as string);
      setWarnRelationship(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName === "age") {
      setAge(event.target.value as string);
      setWarnAge(event.target.value.toString().length > 0 ? false : true);
    }
  };

  const handleChangeTextField = (value: string, attrName: string) => {
    if (attrName == "fullName") {
      setFullName(value);
      setWarnFullName(!validateFullName(value));
    } else if (attrName == "dob") {
      setDob(value);
      setWarnDob(value.toString().length > 0 ? false : true);
    } else if (attrName === "mobile") {
      setMobile(value as string);
      setWarnMobile(!validateMobileNumber(value.toString()));
    } else if (attrName === "email") {
      setEmail(value as string);
      setWarnEmail(!validateEmail(value.toString()));
    } else if (attrName === "pincode") {
      setPincode(value as string);
      setWarnPincode(!validatePincode(value.toString()));
    } else if (attrName == "name") {
      setName(value);
      setWarnName(!validateFullName(value.toString()));
    }
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setAnnualIncome(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const validatePersonalDetails = () => {
    let warn_full_name = !validateFullName(fullName);
    let warn_gender = gender.toString().length > 0 ? false : true;
    let warn_dob = dob.toString().length > 0 ? false : true;
    let warn_marital_status =
      maritalStatus.toString().length > 0 ? false : true;
    let warn_mobile = !validateMobileNumber(mobile);
    let warn_email = !validateEmail(email);
    let warn_pincode = !validatePincode(pincode);

    setWarnFullName(warn_full_name);
    setWarnGender(warn_gender);
    setWarnDob(warn_dob);
    setWarnMaritalStatus(warn_marital_status);
    setWarnMobile(warn_mobile);
    setWarnEmail(warn_email);
    setWarnPincode(warn_pincode);

    if (
      warn_full_name == false &&
      warn_gender == false &&
      warn_dob == false &&
      warn_marital_status == false &&
      warn_mobile == false &&
      warn_email == false &&
      warn_pincode == false
    ) {
    }
  };

  const validateAddMember = () => {
    let warn_name = name.toString().length > 0 ? false : true;
    let warn_relationship = relationship.toString().length > 0 ? false : true;
    let warn_age = age.toString().length > 0 ? false : true;

    setWarnName(warn_name);
    setWarnRelationship(warn_relationship);
    setWarnAge(warn_age);

    if (warn_name == false && warn_relationship == false && warn_age == false) {
    }
  };

  return (
    <Grid container spacing={0} className="profileSection">
      {/* <-------------------------Add new member Pop up Start------------------------------> */}
      <Modal open={addMemberStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddMemberStatus(false);
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
                value={name}
                onChange={(e) => handleChangeTextField(e.target.value, "name")}
              />
              {warnName == true ? (
                <span className="error">Enter full name.</span>
              ) : null}
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Relationship
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relationship}
                  label="Relationship"
                  onChange={(e) => handleChange(e, "relationship")}
                >
                  <MenuItem value={"b"}>Brother</MenuItem>
                  <MenuItem value={"s"}>Sister</MenuItem>
                </Select>
              </FormControl>
              {warnRelationship == true ? (
                <span className="error">Select Relationship.</span>
              ) : null}
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
              {warnAge == true ? (
                <span className="error">Select Age.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                className="submitBtn"
                onClick={() => {
                  validateAddMember();
                }}
              >
                Submit Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-------------------------Add new member Pop up End------------------------------> */}
      <Grid item xs={8}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <h3 className="mb-0">Profile</h3>
          </Grid>
          <Grid item xs={6} className="text-right">
            <Link
              href="#"
              className="greenBtn addfile"
              underline="none"
              onClick={() => {
                setAddMemberStatus(true);
              }}
            >
              Add Member
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="profilePicture">
              <span className="profileIcon">
                <img src="./images/profile_vector_icon.svg" alt="profile" />
              </span>
              <span className="profileName">
                <h6>Rahul Raghuvanshi</h6>
                <Link href="#" underline="none">
                  Change Picture
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => {
                handleChangeTextField(e.target.value, "fullName");
              }}
            />
            {warnFullName == true ? (
              <span className="error">Enter full name.</span>
            ) : null}
            <span className="error">Enter valid input.</span>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => handleChange(e, "gender")}
              >
                <MenuItem value={"m"}>Male</MenuItem>
                <MenuItem value={"f"}>Female</MenuItem>
              </Select>
            </FormControl>
            {warnGender == true ? (
              <span className="error">Select gender.</span>
            ) : null}
          </Grid>
          <Grid item xs={4} className="inputField mb-5">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                className="dateCalendar"
                label="DOB"
                value={dob}
                onChange={(newValue) => {
                  handleChangeTextField(newValue as string, "dob");
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>{" "}
            {warnDob == true ? (
              <span className="error">Select DOB.</span>
            ) : null}
          </Grid>
          <Grid item xs={4} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Marital Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={maritalStatus}
                label="Marital Status"
                onChange={(e) => handleChange(e, "maritalStatus")}
              >
                <MenuItem value={"single"}>Single</MenuItem>
                <MenuItem value={"married"}>Married</MenuItem>
              </Select>
            </FormControl>
            {warnMaritalStatus == true ? (
              <span className="error">Select marital status.</span>
            ) : null}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              value={mobile}
              onChange={(e) => {
                handleChangeTextField(e.target.value, "mobile");
              }}
            />
            {warnMobile == true ? (
              <span className="error">Enter mobile no.</span>
            ) : null}
          </Grid>
          <Grid item xs={6} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                handleChangeTextField(e.target.value, "email");
              }}
            />
            {warnEmail == true ? (
              <span className="error">Enter email</span>
            ) : null}
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={4} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Pincode"
              variant="outlined"
              value={pincode}
              onChange={(e) => {
                handleChangeTextField(e.target.value, "pincode");
              }}
            />
            {warnPincode == true ? (
              <span className="error">Enter pincode</span>
            ) : null}
          </Grid>
          <Grid item md={6} className="mb-5">
            <p>
              {city}, {state}
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h6 className="fontMontserrat font-bold">Annual Income</h6>
          </Grid>
          <Grid item xs={12} className="annualIncomeValue inputField">
            <div className="amountRange">
              <span className="inr">0</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="inr">10,00,000</span>
            </div>
            <Slider
              className="incomeSlider"
              value={typeof annualIncome === "number" ? annualIncome : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={0}
              max={10000000}
            />
            <TextField
              value={annualIncome.toLocaleString("en-US")}
              className="rupeeIcon"
              id="outlined-basic"
              variant="outlined"
            />
            <p className="amountinWords">
              Ten lakh ninty thousand five hundred
            </p>
          </Grid>

          <Grid item xs={12} className="ctaBtn mb-5">
            <Button
              className="submitBtn"
              onClick={() => validatePersonalDetails()}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={0} className="otherDetails">
          <Grid item xs={12}>
            <h5 className="mb-0">Other Details</h5>
          </Grid>

          <Grid container item xs={12} className="switchDetails">
            <p>My parents are dependent</p>
            <input type="checkbox" className="switch" />
          </Grid>

          <Grid container item xs={12} className="switchDetails">
            <p>I have a bike</p>
            <input type="checkbox" className="switch" />
          </Grid>

          <Grid container item xs={12} className="switchDetails">
            <p>I have a Car</p>
            <input type="checkbox" className="switch" />
          </Grid>

          <Grid container item xs={12} className="switchDetails">
            <p>I have a house</p>
            <input type="checkbox" className="switch" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Personaldetails;
