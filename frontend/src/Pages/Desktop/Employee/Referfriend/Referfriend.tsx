import {
  Grid,
  Checkbox,
  InputLabel,
  FormControl,
  FormControlLabel,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import React from "react";
import "./Referfriend.scss";


function Referfriend() {
  const [referralCode, setReferralCode] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [howDoYouKnow, setHowDoYouKnow] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    switch (attrName) {
      case "age":
        setAge(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "howDoYouKnow":
        setHowDoYouKnow(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={2} className="referFriend">
      <Grid item xs={12}>
        <h3 className="mb-0">Refer a friend</h3>
      </Grid>
      <Grid item xs={12} className="checkbox">
        <FormControlLabel
          control={
            <Checkbox
              style={{
                color: "#6B62DC"
              }}
              checked={referralCode}
              onClick={() => {
                setReferralCode(!referralCode);
              }}
            />
          }
          label="I have a referral code."
        />
      </Grid>
      <Grid item xs={12}>
        {referralCode == true ? (
          <Grid container spacing={2}>
            <Grid item xs={4} md={3} lg={2} className="inputField mb-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Referral Code"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ) : null}

        <Grid container spacing={2}>
          <Grid item xs={8} md={6} lg={4} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} lg={2} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="refer-select-small-label">Gender</InputLabel>
              <Select
                labelId="refer-select-small-label"
                id="refer-select-small"
                value={gender}
                label="Gender"
                onChange={(e) => handleChange(e, "gender")}
              >
                <MenuItem value={"m"}>Male</MenuItem>
                <MenuItem value={"f"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} lg={2} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="refer-select-small-label">Age</InputLabel>
              <Select
                labelId="refer-select-small-label"
                id="refer-select-small"
                value={age}
                label="Age"
                onChange={(e) => handleChange(e, "age")}
              >
                <MenuItem value={"18"}>18 Yyars</MenuItem>
                <MenuItem value={"19"}>19 years</MenuItem>
                <MenuItem value={"20"}>20 years</MenuItem>
                <MenuItem value={"21"}>21 years</MenuItem>
                <MenuItem value={"22"}>22 years</MenuItem>
                <MenuItem value={"23"}>23 years</MenuItem>
                <MenuItem value={"24"}>24 years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} className="inputField mb-5">
            <FormControl fullWidth>
              <InputLabel id="refer-select-small-label">
                How do you know?
              </InputLabel>
              <Select
                labelId="refer-select-small-label"
                id="refer-select-small"
                value={howDoYouKnow}
                label="How do you know?"
                onChange={(e) => handleChange(e, "howDoYouKnow")}
              >
                <MenuItem value={"m"}>Friend</MenuItem>
                <MenuItem value={"f"}>Collegue</MenuItem>
                <MenuItem value={"f"}>Family Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} lg={2} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={4} lg={3} className="inputField mb-5">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className="ctaBtn mb-5">
            <Button className="submitBtn">Save Changes</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Referfriend;
