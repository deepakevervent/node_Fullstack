import React, {useEffect} from "react";
import "./Dashboard.scss";
import {
  Box,
  Button,
  Grid,
  Link,
  Modal,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Input,
} from "@mui/material";

import Select, {SelectChangeEvent} from "@mui/material/Select";
import RiskScore from "../../../../Components/RiskScore/RiskScore";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {styled} from "@mui/material/styles";
import {
  validatePincode,
  validateRegno,
} from "../../../../Supporting files/HelpingFunction";

interface Props {
  value_update: Function;
}

const Dashboard: React.FC<Props> = ({value_update}) => {
  //Health Form Variables
  const [ageData, setAgeData] = React.useState([
    {value: "18", label: "18 Years"},
  ]);
  const [healthPopupStatus, setHealthPopupStatus] = React.useState(false);
  const [noOfAdult, setNoOfAdult] = React.useState(1);
  const [noOfChild, setNoOfChild] = React.useState(0);
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [warnAge, setWarnAge] = React.useState(false);
  const [warnGender, setWarnGender] = React.useState(false);
  const [warnPincode, setWarnPincode] = React.useState(false);

  //Car Form Variables
  const [carPopupStatus, setCarPopupStatus] = React.useState(false);
  const [carFormPageStatus, setCarFormPageStatus] = React.useState(1);
  const [rto, setRto] = React.useState("");
  const [regNo, setRegNo] = React.useState("");
  const [policyExpiryStatus, setPolicyExpiryStatus] = React.useState("");
  const [makeModel, setMakeModel] = React.useState("");
  const [fuelType, setFuelType] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [prevInsurer, setPrevInsurer] = React.useState("");
  const [regDate, setRegDate] = React.useState("");
  const [claimStatus, setClaimStatus] = React.useState("");
  const [prevNCB, setPrevNCB] = React.useState(0);
  const [warnRegNo, setWarnRegNo] = React.useState(false);
  const [warnPolicyExpiryStatus, setWarnPolicyExpiryStatus] =
    React.useState(false);
  const [warnMakeModel, setWarnMakeModel] = React.useState(false);
  const [warnFuelType, setWarnFuelType] = React.useState(false);
  const [warnVariant, setWarnVariant] = React.useState(false);
  const [warnPrevInsurer, setWarnPrevInsurer] = React.useState(false);
  const [warnRegDate, setWarnRegDate] = React.useState(false);
  const [warnClaimStatus, setWarnClaimStatus] = React.useState(false);
  const [warnRTO, setWarnRTO] = React.useState(false);

  //TW Form Variables
  const [bikePopupStatus, setBikePopupStatus] = React.useState(false);
  const [bikeFormPageStatus, setBikeFormPageStatus] = React.useState(1);

  //Term from Variables
  const [termPopupStatus, setTermPopupStatus] = React.useState(false);
  const [doYouSmoke, setDoYouSmoke] = React.useState("N");
  const [termGender, setTermGender] = React.useState("M");
  const [annualIncome, setAnnualIncome] = React.useState("");
  const [termAge, setTermAge] = React.useState("");
  const [termPincode, setTermPincode] = React.useState("");
  const [warnAnnualIncome, setWarnAnnualIncome] = React.useState(false);
  const [warnTermAge, setWarnTermAge] = React.useState(false);
  const [warnTermPincode, setWarnTermPincode] = React.useState(false);

  //Investment Form Variables
  const [investmentPopupStatus, setInvestmentPopupStatus] =
    React.useState(false);
  const [wantToInvest, setWantToInvest] = React.useState("");
  const [payMode, setPayMode] = React.useState("");
  const [investmentAge, setInvestmentAge] = React.useState("");
  const [investmentGender, setInvestmentGender] = React.useState("");
  const [investmentPincode, setInvestmentPincode] = React.useState("");
  const [warnWantToInvest, setWarnWantToInvest] = React.useState(false);
  const [warnPayMode, setWarnPayMode] = React.useState(false);
  const [warnInvestmentAge, setWarnInvestmentAge] = React.useState(false);
  const [warnInvestmentGender, setWarnInvestmentGender] = React.useState(false);
  const [warnInvestmentPincode, setWarnInvestmentPincode] =
    React.useState(false);

  const [travelPopupStatus, setTravelPopupStatus] = React.useState(false);

  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [plan, setPlan] = React.useState("");

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 4,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#DCFFDD",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 4,
      backgroundColor: "#27AE60",
    },
  }));

  useEffect(() => {
    var age_data = [];
    for (var i = 18; i <= 100; i++) {
      age_data.push({value: i.toString(), label: i.toString() + " Years"});
    }
    setAgeData(age_data);
  });

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "age") {
      setAge(event.target.value as string);
      setWarnAge(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName === "gender") {
      setGender(event.target.value as string);
      setWarnGender(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName === "policyExpiryStatus") {
      setPolicyExpiryStatus(event.target.value as string);
      setWarnPolicyExpiryStatus(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName === "makeModel") {
      setMakeModel(event.target.value as string);
      setWarnMakeModel(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName === "fuelType") {
      setFuelType(event.target.value as string);
      setWarnFuelType(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName === "variant") {
      setVariant(event.target.value as string);
      setWarnVariant(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName === "prevInsurer") {
      setPrevInsurer(event.target.value as string);
      setWarnPrevInsurer(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName === "claimStatus") {
      setClaimStatus(event.target.value as string);
      setWarnClaimStatus(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName === "rto") {
      setRto(event.target.value as string);
      setWarnRTO(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName === "annualIncome") {
      setAnnualIncome(event.target.value as string);
      setWarnAnnualIncome(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName === "termAge") {
      setTermAge(event.target.value as string);
      setWarnTermAge(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName == "payMode") {
      setPayMode(event.target.value as string);
      setWarnPayMode(event.target.value.toString().length == 0 ? true : false);
    } else if (attrName == "investmentAge") {
      setInvestmentAge(event.target.value as string);
      setWarnInvestmentAge(
        event.target.value.toString().length == 0 ? true : false
      );
    } else if (attrName == "investmentGender") {
      setInvestmentGender(event.target.value as string);
      setWarnInvestmentGender(
        event.target.value.toString().length == 0 ? true : false
      );
    }
  };

  const handleChangeTextField = (value: string, attrName: string) => {
    if (attrName === "pincode") {
      setPincode(value);
      setWarnPincode(!validatePincode(value));
    } else if (attrName === "regNo") {
      setRegNo(value);
      setWarnRegNo(!validateRegno(value));
    } else if (attrName === "regDate") {
      setRegDate(value);
      setWarnRegDate(value.toString().length == 0 ? true : false);
    } else if (attrName === "termPincode") {
      setTermPincode(value);
      setWarnTermPincode(!validatePincode(value));
    } else if (attrName == "wantToInvest") {
      setWantToInvest(value);
      if (parseInt(value) >= 500 && parseInt(value) <= 500000) {
        setWarnWantToInvest(false);
      } else {
        setWarnWantToInvest(true);
      }
    } else if (attrName == "investmentPincode") {
      setInvestmentPincode(value);
      setWarnInvestmentPincode(!validatePincode(value));
    }
  };

  const validateHealthForm = () => {
    let warn_age = age.toString().length == 0 ? true : false;
    let warn_gender = gender.toString().length == 0 ? true : false;
    let warn_pincode = !validatePincode(pincode);

    setWarnAge(warn_age);
    setWarnGender(warn_gender);
    setWarnPincode(warn_pincode);

    if (warn_age == false && warn_gender == false && warn_pincode == false) {
    }
  };

  const validateCarForm = () => {
    if (carFormPageStatus == 1) {
      let warn_reg_no = !validateRegno(regNo);
      let warn_policy_expiry_status =
        policyExpiryStatus.toString().length == 0 ? true : false;

      setWarnRegNo(warn_reg_no);
      setWarnPolicyExpiryStatus(warn_policy_expiry_status);

      if (warn_reg_no == false && warn_policy_expiry_status == false) {
        setCarFormPageStatus(2);
      }
    } else if (carFormPageStatus == 2) {
      let warn_make_model = makeModel.toString().length == 0 ? true : false;
      let warn_fuel_type = fuelType.toString().length == 0 ? true : false;
      let warn_variant = variant.toString().length == 0 ? true : false;
      let warn_prev_insurer = prevInsurer.toString().length == 0 ? true : false;
      let warn_reg_date = regDate.toString().length == 0 ? true : false;
      let warn_claim_status = claimStatus.toString().length == 0 ? true : false;

      setWarnMakeModel(warn_make_model);
      setWarnFuelType(warn_fuel_type);
      setWarnVariant(warn_variant);
      setWarnPrevInsurer(warn_prev_insurer);
      setWarnRegDate(warn_reg_date);
      setWarnClaimStatus(warn_claim_status);

      if (
        warn_make_model == false &&
        warn_fuel_type == false &&
        warn_variant == false &&
        warn_prev_insurer == false &&
        warn_reg_date == false &&
        warn_claim_status == false
      ) {
      }
    } else if (carFormPageStatus == 3) {
      let warn_rto = rto.toString().length == 0 ? true : false;

      setWarnRTO(warn_rto);

      if (warn_rto == false) {
        setCarFormPageStatus(2);
      }
    }
  };

  const validateBikeForm = () => {
    if (bikeFormPageStatus == 1) {
      let warn_reg_no = !validateRegno(regNo);
      let warn_policy_expiry_status =
        policyExpiryStatus.toString().length == 0 ? true : false;

      setWarnRegNo(warn_reg_no);
      setWarnPolicyExpiryStatus(warn_policy_expiry_status);

      if (warn_reg_no == false && warn_policy_expiry_status == false) {
        setBikeFormPageStatus(2);
      }
    } else if (bikeFormPageStatus == 2) {
      let warn_make_model = makeModel.toString().length == 0 ? true : false;
      let warn_fuel_type = fuelType.toString().length == 0 ? true : false;
      let warn_variant = variant.toString().length == 0 ? true : false;
      let warn_prev_insurer = prevInsurer.toString().length == 0 ? true : false;
      let warn_reg_date = regDate.toString().length == 0 ? true : false;
      let warn_claim_status = claimStatus.toString().length == 0 ? true : false;

      setWarnMakeModel(warn_make_model);
      setWarnFuelType(warn_fuel_type);
      setWarnVariant(warn_variant);
      setWarnPrevInsurer(warn_prev_insurer);
      setWarnRegDate(warn_reg_date);
      setWarnClaimStatus(warn_claim_status);

      if (
        warn_make_model == false &&
        warn_fuel_type == false &&
        warn_variant == false &&
        warn_prev_insurer == false &&
        warn_reg_date == false &&
        warn_claim_status == false
      ) {
      }
    } else if (bikeFormPageStatus == 3) {
      let warn_rto = rto.toString().length == 0 ? true : false;

      setWarnRTO(warn_rto);

      if (warn_rto == false) {
        setBikeFormPageStatus(2);
      }
    }
  };

  const validateTermForm = () => {
    let warn_annual_income = annualIncome.toString().length == 0 ? true : false;
    let warn_age = termAge.toString().length == 0 ? true : false;
    let warn_pincode = termPincode.toString().length == 0 ? true : false;

    setWarnAnnualIncome(warn_annual_income);
    setWarnTermAge(warn_age);
    setWarnTermPincode(warn_pincode);

    if (
      warn_annual_income == false &&
      warn_age == false &&
      warn_pincode == false
    ) {
    }
  };

  const validateInvestmentForm = () => {
    let warn_want_to_invest = false;
    if (parseInt(wantToInvest) > 500 && parseInt(wantToInvest) < 500000) {
      warn_want_to_invest = false;
    } else {
      warn_want_to_invest = true;
    }
    let warn_pay_mode = payMode.toString().length == 0 ? true : false;
    let warn_age = investmentAge.toString().length == 0 ? true : false;
    let warn_gender = investmentGender.toString().length == 0 ? true : false;
    let warn_pincode = investmentPincode.toString().length == 0 ? true : false;

    setWarnWantToInvest(warn_want_to_invest);
    setWarnPayMode(warn_pay_mode);
    setWarnInvestmentAge(warn_age);
    setWarnInvestmentGender(warn_gender);
    setWarnInvestmentPincode(warn_pincode);

    if (
      warn_want_to_invest == false &&
      warn_pay_mode == false &&
      warn_age == false &&
      warn_gender == false &&
      warn_pincode == false
    ) {
    }
  };

  return (
    <Grid container spacing={3}>
      {/* <-----------------------Health Form Pop-up Start---------------------------> */}
      <Modal open={healthPopupStatus} className="modalWrapper">
        <Box className="modalInner lg-width">
          <Grid container spacing={1} className="mb-4">
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setHealthPopupStatus(false);
                }}
              />
              <h5 className="popup-heading mb-5">Health Insurance</h5>
            </Grid>
            <Grid item xs={5} sx={{textAlign: "center"}}>
              <p className="popup-subheading">Whom to Insure ?</p>
              <div className="main-border-ncb">
                <Button
                  className={noOfAdult == 1 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfAdult(1);
                  }}
                >
                  1 Adult
                </Button>
                <Button
                  className={noOfAdult == 2 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfAdult(2);
                  }}
                >
                  2 Adults
                </Button>
              </div>
            </Grid>
            <Grid item xs={7}>
              <p className="popup-subheading">Children</p>
              <div className="main-border-ncb">
                <Button
                  className={noOfChild == 0 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfChild(0);
                  }}
                >
                  0
                </Button>
                <Button
                  className={noOfChild == 1 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfChild(1);
                  }}
                >
                  1
                </Button>
                <Button
                  className={noOfChild == 2 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfChild(2);
                  }}
                >
                  2
                </Button>
                <Button
                  className={noOfChild == 3 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfChild(3);
                  }}
                >
                  3
                </Button>
                <Button
                  className={noOfChild == 4 ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setNoOfChild(4);
                  }}
                >
                  4
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <h5 className="popup-heading">Eldest Member's Details</h5>
            </Grid>
            <Grid item xs={4} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="health-age-label">Age</InputLabel>
                <Select
                  labelId="health-age-label"
                  id="health-age-select"
                  value={age}
                  label="Age"
                  onChange={(e) => handleChange(e, "age")}
                >
                  {ageData.map(({value, label}, index) => (
                    <MenuItem value={value}>{label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {warnAge == true ? (
                <span className="error">Please select age.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="health-gender-label">Gender</InputLabel>
                <Select
                  labelId="health-gender-label"
                  id="health-gender"
                  value={gender}
                  label="Gender"
                  onChange={(e) => handleChange(e, "gender")}
                >
                  <MenuItem value={"m"}>Male</MenuItem>
                  <MenuItem value={"f"}>Female</MenuItem>
                </Select>
              </FormControl>{" "}
              {warnGender == true ? (
                <span className="error">Please select gender.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="inputField mb-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                onChange={(e) =>
                  handleChangeTextField(e.target.value, "pincode")
                }
              />
              {warnPincode == true ? (
                <span className="error">Please enter pincode.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                className="submitBtn"
                onClick={() => {
                  validateHealthForm();
                }}
              >
                Get Quote
              </Button>
              {/* style={{ textAlign: "center" }}/> */}

              {/* <Button className="submitBtn">Get Quote</Button> */}
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-----------------------Health Form Pop-up End---------------------------> */}
      {/* <-----------------------Car Form Pop-up Start---------------------------> */}
      <Modal open={carPopupStatus} className="modalWrapper">
        <div>
          {carFormPageStatus == 1 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setCarPopupStatus(false);
                    }}
                  />
                  <h5 className="popup-heading mb-5">Car Insurance</h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} className="inputField mb-5">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className="regno"
                    placeholder="DL01AS5552"
                    value={regNo}
                    onChange={(e) => {
                      handleChangeTextField(e.target.value, "regNo");
                    }}
                  />
                  {warnRegNo == true ? (
                    <span className="error">Please enter valid reg no.</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-5">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Policy Expiry
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={policyExpiryStatus}
                      label="PolicyExpiry"
                      onChange={(e) => handleChange(e, "policyExpiryStatus")}
                    >
                      <MenuItem value={"not"}>Not Yet Expired</MenuItem>
                      <MenuItem value={"less"}>Less than 90 Days </MenuItem>
                      <MenuItem value={"more"}>More than 90 Days</MenuItem>
                    </Select>
                  </FormControl>
                  {warnPolicyExpiryStatus == true ? (
                    <span className="error">
                      Please select policy expiry status.
                    </span>
                  ) : null}
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Button
                    className="submitBtn"
                    onClick={() => {
                      validateCarForm();
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Link
                    className="md-link"
                    href="#"
                    underline="none"
                    onClick={() => {
                      setCarFormPageStatus(3);
                    }}
                  >
                    Bought a new Car ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {carFormPageStatus == 2 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="back-button"
                    onClick={() => {
                      setCarFormPageStatus(1);
                    }}
                  />

                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setCarPopupStatus(false);
                      setCarFormPageStatus(1);
                    }}
                  />
                  <h5 className="popup-heading mb-5">
                    Car Insurance - {regNo}
                  </h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Make & Model
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={makeModel}
                      label="Make & Model"
                      onChange={(e) => handleChange(e, "makeModel")}
                    >
                      <MenuItem value={"honda"}>Honda</MenuItem>
                      <MenuItem value={"suzuki"}>Suzuki </MenuItem>
                      <MenuItem value={"tata"}>Tata</MenuItem>
                    </Select>
                  </FormControl>
                  {warnMakeModel == true ? (
                    <span className="error">Please select make & model.</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Fuel Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={fuelType}
                      label="FuelType"
                      onChange={(e) => handleChange(e, "fuelType")}
                    >
                      <MenuItem value={"diesel"}>Diesel</MenuItem>
                      <MenuItem value={"petrol"}>Petrol</MenuItem>
                    </Select>
                  </FormControl>
                  {warnFuelType == true ? (
                    <span className="error">Please select fuel type.</span>
                  ) : null}
                </Grid>
                <Grid item xs={12} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Variant
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={variant}
                      label="Variant"
                      onChange={(e) => handleChange(e, "variant")}
                    >
                      <MenuItem value={"Nexon"}>Nexon</MenuItem>
                      <MenuItem value={"City ZXI"}>City Zxi</MenuItem>
                      <MenuItem value={"Brezza¯"}>Brezza</MenuItem>
                    </Select>
                  </FormControl>
                  {warnVariant == true ? (
                    <span className="error">Please select variant.</span>
                  ) : null}
                </Grid>
                <Grid item xs={12} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Previous Insurer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={prevInsurer}
                      label="Previous Insurer"
                      onChange={(e) => handleChange(e, "prevInsurer")}
                    >
                      <MenuItem value={"hdfc"}>HDFC</MenuItem>
                      <MenuItem value={"bajaj"}>BAJAJ</MenuItem>
                      <MenuItem value={"birla"}>BIRLA </MenuItem>
                    </Select>
                  </FormControl>
                  {warnPrevInsurer == true ? (
                    <span className="error">
                      Please select previous insurer.
                    </span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Reg. Date"
                      value={regDate}
                      onChange={(newValue) => {
                        handleChangeTextField(newValue as string, "regDate");
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  {warnRegDate == true ? (
                    <span className="error">Please select reg. date</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Claimed
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={claimStatus}
                      label="Claimed"
                      onChange={(e) => handleChange(e, "claimStatus")}
                    >
                      <MenuItem value={"no"}>No</MenuItem>
                      <MenuItem value={"yes"}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                  {warnClaimStatus == true ? (
                    <span className="error">Please select claim status</span>
                  ) : null}
                </Grid>
              </Grid>
              {claimStatus == "no" ? (
                <Grid container spacing={3}>
                  <Grid item xs={12} textAlign="center">
                    <h6 className="popup-subheading">No Bonus Claim</h6>
                    <div className="main-border-ncb">
                      <Button
                        className={prevNCB == 0 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(0);
                        }}
                      >
                        0%
                      </Button>
                      <Button
                        className={prevNCB == 20 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(20);
                        }}
                      >
                        20%
                      </Button>
                      <Button
                        className={prevNCB == 25 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(25);
                        }}
                      >
                        25%
                      </Button>
                      <Button
                        className={prevNCB == 35 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(35);
                        }}
                      >
                        35%
                      </Button>
                      <Button
                        className={prevNCB == 50 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(50);
                        }}
                      >
                        50%
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              ) : null}
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  {/* <Button
                            className="submitBtn"
                            onClick={() => {}}
                          /> */}
                  {/* style={{ textAlign: "center" }}> */}

                  <Button
                    className="submitBtn mt-5"
                    onClick={() => {
                      validateCarForm();
                    }}
                  >
                    Get Quotes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {carFormPageStatus == 3 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="back-button"
                    onClick={() => setCarFormPageStatus(1)}
                  />
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setCarPopupStatus(false);
                      setCarFormPageStatus(1);
                    }}
                  />
                  <h5 className="popup-heading">Car Insurance</h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      RTO / City Name
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={rto}
                      label="RTO / City Name"
                      onChange={(e) => handleChange(e, "rto")}
                    >
                      <MenuItem value={"Panipat"}>Panipat</MenuItem>
                      <MenuItem value={"Mohali"}>Mohali</MenuItem>
                      <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                    </Select>
                  </FormControl>
                  {warnRTO == true ? (
                    <span className="error">Please select rto</span>
                  ) : null}
                </Grid>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={() => {
                      validateCarForm();
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
        </div>
      </Modal>
      {/* <-----------------------Car Form Pop-up End---------------------------> */}
      {/* <-----------------------TW Form Pop-up Start---------------------------> */}
      <Modal open={bikePopupStatus} className="modalWrapper">
        <div>
          {bikeFormPageStatus == 1 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setBikePopupStatus(false);
                    }}
                  />
                  <h5 className="popup-heading mb-5">Bike Insurance</h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} className="inputField mb-5">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className="regno"
                    placeholder="DL01AS5552"
                    value={regNo}
                    onChange={(e) => {
                      handleChangeTextField(e.target.value, "regNo");
                    }}
                  />
                  {warnRegNo == true ? (
                    <span className="error">Please enter valid reg no.</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-5">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Policy Expiry
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={policyExpiryStatus}
                      label="PolicyExpiry"
                      onChange={(e) => handleChange(e, "policyExpiryStatus")}
                    >
                      <MenuItem value={"not"}>Not Yet Expired</MenuItem>
                      <MenuItem value={"less"}>Less than 90 Days </MenuItem>
                      <MenuItem value={"more"}>More than 90 Days</MenuItem>
                    </Select>
                  </FormControl>
                  {warnPolicyExpiryStatus == true ? (
                    <span className="error">
                      Please select policy expiry status.
                    </span>
                  ) : null}
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Button
                    className="submitBtn"
                    onClick={() => {
                      validateBikeForm();
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Link
                    className="md-link"
                    href="#"
                    underline="none"
                    onClick={() => {
                      setBikeFormPageStatus(3);
                    }}
                  >
                    Bought a new Bike ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {bikeFormPageStatus == 2 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="back-button"
                    onClick={() => {
                      setBikeFormPageStatus(1);
                    }}
                  />

                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setBikePopupStatus(false);
                      setBikeFormPageStatus(1);
                    }}
                  />
                  <h5 className="popup-heading mb-5">
                    Bike Insurance - {regNo}
                  </h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Make & Model
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={makeModel}
                      label="Make & Model"
                      onChange={(e) => handleChange(e, "makeModel")}
                    >
                      <MenuItem value={"honda"}>Honda</MenuItem>
                      <MenuItem value={"suzuki"}>Suzuki </MenuItem>
                      <MenuItem value={"tata"}>Tata</MenuItem>
                    </Select>
                  </FormControl>
                  {warnMakeModel == true ? (
                    <span className="error">Please select make & model.</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Fuel Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={fuelType}
                      label="FuelType"
                      onChange={(e) => handleChange(e, "fuelType")}
                    >
                      <MenuItem value={"diesel"}>Diesel</MenuItem>
                      <MenuItem value={"petrol"}>Petrol</MenuItem>
                    </Select>
                  </FormControl>
                  {warnFuelType == true ? (
                    <span className="error">Please select fuel type.</span>
                  ) : null}
                </Grid>
                <Grid item xs={12} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Variant
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={variant}
                      label="Variant"
                      onChange={(e) => handleChange(e, "variant")}
                    >
                      <MenuItem value={"Nexon"}>Nexon</MenuItem>
                      <MenuItem value={"City ZXI"}>City Zxi</MenuItem>
                      <MenuItem value={"Brezza¯"}>Brezza</MenuItem>
                    </Select>
                  </FormControl>
                  {warnVariant == true ? (
                    <span className="error">Please select variant.</span>
                  ) : null}
                </Grid>
                <Grid item xs={12} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Previous Insurer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={prevInsurer}
                      label="Previous Insurer"
                      onChange={(e) => handleChange(e, "prevInsurer")}
                    >
                      <MenuItem value={"hdfc"}>HDFC</MenuItem>
                      <MenuItem value={"bajaj"}>BAJAJ</MenuItem>
                      <MenuItem value={"birla"}>BIRLA </MenuItem>
                    </Select>
                  </FormControl>
                  {warnPrevInsurer == true ? (
                    <span className="error">
                      Please select previous insurer.
                    </span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Reg. Date"
                      value={regDate}
                      onChange={(newValue) => {
                        handleChangeTextField(newValue as string, "regDate");
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  {warnRegDate == true ? (
                    <span className="error">Please select reg. date</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} className="inputField mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Claimed
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={claimStatus}
                      label="Claimed"
                      onChange={(e) => handleChange(e, "claimStatus")}
                    >
                      <MenuItem value={"no"}>No</MenuItem>
                      <MenuItem value={"yes"}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                  {warnClaimStatus == true ? (
                    <span className="error">Please select claim status</span>
                  ) : null}
                </Grid>
              </Grid>
              {claimStatus == "no" ? (
                <Grid container spacing={3}>
                  <Grid item xs={12} textAlign="center">
                    <h6 className="popup-subheading">No Bonus Claim</h6>
                    <div className="main-border-ncb">
                      <Button
                        className={prevNCB == 0 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(0);
                        }}
                      >
                        0%
                      </Button>
                      <Button
                        className={prevNCB == 20 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(20);
                        }}
                      >
                        20%
                      </Button>
                      <Button
                        className={prevNCB == 25 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(25);
                        }}
                      >
                        25%
                      </Button>
                      <Button
                        className={prevNCB == 35 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(35);
                        }}
                      >
                        35%
                      </Button>
                      <Button
                        className={prevNCB == 50 ? "ncbSelect" : "ncb"}
                        onClick={() => {
                          setPrevNCB(50);
                        }}
                      >
                        50%
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              ) : null}
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  {/* <Button
                            className="submitBtn"
                            onClick={() => {}}
                          /> */}
                  {/* style={{ textAlign: "center" }}> */}

                  <Button
                    className="submitBtn mt-5"
                    onClick={() => {
                      validateBikeForm();
                    }}
                  >
                    Get Quotes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {bikeFormPageStatus == 3 ? (
            <Box className="modalInner md-width">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="back-button"
                    onClick={() => setBikeFormPageStatus(1)}
                  />
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setBikePopupStatus(false);
                      setBikeFormPageStatus(1);
                    }}
                  />
                  <h5 className="popup-heading">Bike Insurance</h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      RTO / City Name
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={rto}
                      label="RTO / City Name"
                      onChange={(e) => handleChange(e, "rto")}
                    >
                      <MenuItem value={"Panipat"}>Panipat</MenuItem>
                      <MenuItem value={"Mohali"}>Mohali</MenuItem>
                      <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                    </Select>
                  </FormControl>
                  {warnRTO == true ? (
                    <span className="error">Please select rto</span>
                  ) : null}
                </Grid>
                <Grid
                  item
                  xs={12}
                  className="ctaBtn"
                  style={{textAlign: "center"}}
                >
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={() => {
                      validateBikeForm();
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
        </div>
      </Modal>
      {/* <-----------------------TW Form Pop-up End---------------------------> */}
      {/* <-----------------------Term Form Pop-up Start---------------------------> */}
      <Modal open={termPopupStatus} className="modalWrapper">
        <Box className="modalInner md-width">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setTermPopupStatus(false);
                }}
              />
              <h5 className="popup-heading">Term Insurance</h5>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "center"}}>
              <p className="popup-subheading">Do you smoke?</p>
              <div className="main-border-ncb">
                <Button
                  style={{textTransform: "capitalize"}}
                  className={doYouSmoke == "N" ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setDoYouSmoke("N");
                  }}
                >
                  No
                </Button>
                <Button
                  style={{textTransform: "capitalize"}}
                  className={doYouSmoke == "Y" ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setDoYouSmoke("Y");
                  }}
                >
                  Yes
                </Button>
              </div>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "center"}}>
              <p className="popup-subheading">Gender</p>
              <div className="main-border-ncb">
                <Button
                  style={{textTransform: "capitalize"}}
                  className={termGender == "M" ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setTermGender("M");
                  }}
                >
                  Male
                </Button>
                <Button
                  style={{textTransform: "capitalize"}}
                  className={termGender == "F" ? "ncbSelect" : "ncb"}
                  onClick={() => {
                    setTermGender("F");
                  }}
                >
                  Female
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} className="mb-5 inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Annual Income
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={annualIncome}
                  label="Annual Income"
                  onChange={(e) => handleChange(e, "annualIncome")}
                >
                  <MenuItem value={"20"}>2,00,000</MenuItem>
                  <MenuItem value={"22"}>3,00,000</MenuItem>
                  <MenuItem value={"24"}>4,00,000</MenuItem>
                </Select>
              </FormControl>
              {warnAnnualIncome == true ? (
                <span className="error">Please select annual income.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="mb-5 inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={termAge}
                  label="Age"
                  onChange={(e) => handleChange(e, "termAge")}
                >
                  {ageData.map(({value, label}, index) => (
                    <MenuItem value={value}>{label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {warnTermAge == true ? (
                <span className="error">Please select age.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="mb-5 inputField">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                value={termPincode}
                onChange={(e) => {
                  handleChangeTextField(e.target.value, "termPincode");
                }}
              />
              {warnTermPincode == true ? (
                <span className="error">Please enter pincode.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                className="submitBtn"
                onClick={() => {
                  validateTermForm();
                }}
              >
                Get Quote
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-----------------------Term Form Pop-up End---------------------------> */}
      {/* <-----------------------Invest Form Pop-up Start---------------------------> */}
      <Modal open={investmentPopupStatus} className="modalWrapper">
        <Box className="modalInner lg-width">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setInvestmentPopupStatus(false);
                }}
              />
              <h5 className="popup-heading mb-5">Investment Plans</h5>
            </Grid>
            <Grid item xs={6} className="inputField">
              <TextField
                className="rupeeIcon"
                fullWidth
                id="outlined-basic"
                label="Want to invest"
                variant="outlined"
                value={wantToInvest}
                onChange={(e) => {
                  handleChangeTextField(e.target.value, "wantToInvest");
                }}
              />
              {warnWantToInvest == true ? (
                <span className="error">Please enter amount.</span>
              ) : null}
            </Grid>
            <Grid item xs={6} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pay Mode</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={payMode}
                  label="Payment Mode"
                  onChange={(e) => handleChange(e, "payMode")}
                >
                  <MenuItem value={"m"}>Monthly</MenuItem>
                  <MenuItem value={"q"}>Quaterly</MenuItem>
                  <MenuItem value={"y"}>Yearly</MenuItem>
                </Select>
              </FormControl>{" "}
              {warnPayMode == true ? (
                <span className="error">Please select payment mode.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={investmentAge}
                  label="Age"
                  onChange={(e) => handleChange(e, "investmentAge")}
                >
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>{" "}
              {warnInvestmentAge == true ? (
                <span className="error">Please select age.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={investmentGender}
                  label="Gender"
                  onChange={(e) => handleChange(e, "investmentGender")}
                >
                  <MenuItem value={"m"}>Male</MenuItem>
                  <MenuItem value={"f"}>Female</MenuItem>
                </Select>
              </FormControl>{" "}
              {warnInvestmentGender == true ? (
                <span className="error">Please select gender.</span>
              ) : null}
            </Grid>
            <Grid item xs={4} className="inputField mb-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                value={investmentPincode}
                onChange={(e) => {
                  handleChangeTextField(e.target.value, "investmentPincode");
                }}
              />
              {warnInvestmentPincode == true ? (
                <span className="error">Please select pincode.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                className="submitBtn"
                onClick={() => {
                  validateInvestmentForm();
                }}
              >
                Get Quote
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-----------------------Invest Form Pop-up End---------------------------> */}
      {/* <-----------------------Travel Form Pop-up Start---------------------------> */}
      <Modal open={travelPopupStatus} className="modalWrapper">
        <Box className="modalInner lg-width">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setTravelPopupStatus(false);
                }}
              />
              <h5 className="popup-heading">Travel Insurance</h5>
            </Grid>
            <Grid item xs={12} className="inputField mb-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Where do you want to travel ?"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6} className="inputField mb-5">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} className="inputField mb-5">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Plan Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={plan}
                  label="Plan Type"
                  onChange={(e) => handleChange(e, "plan")}
                >
                  <MenuItem value={"i"}>Individual/Family</MenuItem>
                  <MenuItem value={"s"}>Student</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={(e) => handleChange(e, "gender")}
                >
                  <MenuItem value={"st"}>Single Trip</MenuItem>
                  <MenuItem value={"mt"}>Multi Trip</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} className="inputField mb-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Traveller"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button className="submitBtn">Get Quote</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-----------------------Travel Form Pop-up End---------------------------> */}
      <Grid item xs={8}>
        <h3>Dashboard deepak123</h3>
        <Box className="briefDetails">
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/health_Insurance_Icon.svg" alt="img" />
                <span>
                  <p>Health Insurance</p>
                  <h4 className="inrIcon">5 Lakh</h4>
                  <p className="members">2 Adutls &amp; 1 Child</p>
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/life_insurance_icon.svg" alt="img" />
                <span>
                  <p>Life Insurance</p>
                  <h4 className="inrIcon">1 Crore</h4>
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/other_insurance.svg" alt="img" />
                <span>
                  <p>Other Insurance</p>
                  <h4>NA</h4>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className="highlightedTabs">
          <Grid container>
            <Grid item sm={12} lg={6}>
              <Box
                className="articleSection"
                onClick={() => {
                  value_update("activePage", "community");
                }}
              >
                <span>
                  <h6>Articles</h6>
                  <p>
                    Read our blog to learn about nuances of your insurance
                    policies.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                className="trendingdiscussion"
                onClick={() => {
                  value_update("activePage", "trendingquestions");
                }}
              >
                <span>
                  <h6>Trending Discussions</h6>
                  <p>
                    Connect, share and explore. Give feedback, discuss and find
                    answers.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                className="initiateclaim"
                onClick={() => {
                  value_update("activePage", "claimassistant");
                }}
              >
                <span>
                  <h6>Initiate Claim</h6>
                  <p>
                    Use your policies effectively by initiating claims using EB.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                className="riskmap"
                onClick={() => {
                  value_update("activePage", "riskmap");
                }}
              >
                <span>
                  <h6>Risk Map</h6>
                  <p>
                    Find your Riskscore and how your policies compare against
                    your ideal requirements.
                  </p>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className="buyInsurance">
          <h3>Buy Insurance</h3>
          <Grid container spacing={3}>
            <Grid item md={3} lg={2}>
              <button
                className="healthInsurance"
                onClick={() => {
                  setHealthPopupStatus(true);
                }}
              >
                Health
              </button>
            </Grid>
            <Grid item md={3} lg={2}>
              <button
                className="carInsurance"
                onClick={() => {
                  setCarPopupStatus(true);
                }}
              >
                Car
              </button>
            </Grid>
            <Grid item md={3} lg={2}>
              <button
                className="bikeInsurance"
                onClick={() => {
                  setBikePopupStatus(true);
                }}
              >
                Bike
              </button>
            </Grid>
            <Grid item md={3} lg={2}>
              <button
                className="termInsurance"
                onClick={() => {
                  setTermPopupStatus(true);
                }}
              >
                Term
              </button>
            </Grid>
            <Grid item md={3} lg={2}>
              <button
                className="investmentPlan"
                onClick={() => {
                  setInvestmentPopupStatus(true);
                }}
              >
                Investment
              </button>
            </Grid>
            <Grid item md={3} lg={2}>
              <button
                className="travelInsurance"
                onClick={() => {
                  setTravelPopupStatus(true);
                }}
              >
                Travel
              </button>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className="riskmapScore">
          <RiskScore class_name="svg-pi-wrapper" progress_one={50} />
        </Box>
        <Box className="todolist">
          <h4>To Do</h4>
          <Grid>
            <Link
              href="#"
              underline="none"
              className="addpolicy"
              onClick={() => {
                value_update("activePage", "policywallet");
              }}
            >
              Add Policies to the wallet.
            </Link>
          </Grid>
          <Grid>
            <Link
              href="#"
              underline="none"
              className="familyprofile"
              onClick={() => {
                value_update("activePage", "userprofile");
              }}
            >
              Complete family profile to share policies.
            </Link>
          </Grid>
          <Grid>
            <Link
              href="#"
              underline="none"
              className="riskscore"
              onClick={() => {
                value_update("activePage", "riskmap");
              }}
            >
              Find how to improve your Risk Score.
            </Link>
          </Grid>
          <Grid>
            <Link
              href="#"
              underline="none"
              className="addcity"
              onClick={() => {
                value_update("activePage", "userprofile");
              }}
            >
              Add city in the profile.
            </Link>
          </Grid>
        </Box>
        <Box>
          <h4>Requests</h4>
          <Box className="RequestBar">
            <p>
              Health Insurance <span className="green">Endorsement</span>
            </p>
            <h6>Member add, DOB &amp; Address</h6>
            <BorderLinearProgress variant="determinate" value={80} />
          </Box>
          <Box className="RequestBar">
            <p>
              Life Insurance <span className="red">Claim</span>
            </p>
            <BorderLinearProgress variant="determinate" value={20} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
