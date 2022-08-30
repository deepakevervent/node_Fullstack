import {Box, Grid, Link} from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import moment from "moment";

import React, {useEffect} from "react";
import "./Policywallet.scss";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArticleIcon from "@mui/icons-material/Article";

function Policywallet() {
  const [dataGroupPolicy, setDataGroupPolicy] = React.useState([
    {
      logo: "",
      line_one: "",
      line_two_titile: "",
      line_two_desc: "",
      line_three_title: "",
      line_three_desc: "",
      background_color: "",
      icon_color: "",
      text_color: "",
    },
  ]);

  //Add Policy Variables
  const [addPolicyStatus, setAddPolicyStatus] = React.useState(false);
  const [policyType, setPolicyType] = React.useState("");
  const [policyExpiry, setPolicyExpiry] = React.useState("");
  const [policyName, setPolicyName] = React.useState("");
  const [uploadDocument, setUploadDocument] = React.useState({
    name: "file_path",
  });
  const [warnPolicyType, setWarnPolicyType] = React.useState(false);
  const [warnPolicyExpiry, setWarnPolicyExpiry] = React.useState(false);
  const [warnPolicyName, setWarnPolicyName] = React.useState(false);
  const [warnUploadDocument, setWarnUploadDocument] = React.useState(false);

  //New Claim Request Variables
  const [claimNewRequest, setClaimNewRequest] = React.useState(false);
  const [relation, setRelation] = React.useState("");
  const [kycDocumentStatus, setKycDocumentStatus] = React.useState("kyc");
  const [selectDocument, setSelectDocument] = React.useState("");
  const [claimPolicyName, setClaimPolicyName] = React.useState("");
  const [insuredPerson, setInsuredPerson] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [hospital, setHospital] = React.useState("");
  const [myDocument, setMyDocument] = React.useState("");
  const [claimUploadDocument, setClaimUploadDocument] = React.useState("");
  const [warnClaimPolicyName, setWarnClaimPolicyName] = React.useState(false);
  const [warnInsuredPerson, setWarnInsuredPerson] = React.useState(false);
  const [warnState, setWarnState] = React.useState(false);
  const [warnCity, setWarnCity] = React.useState(false);
  const [warnHospital, setWarnHospital] = React.useState(false);
  const [warnMyDocument, setWarnMyDocument] = React.useState(false);
  const [warnClaimUploadDocument, setWarnClaimUploadDocument] =
    React.useState(false);

  //Add Member variables
  const [addMemberStatus, setAddMemberStatus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [relationship, setRelationship] = React.useState("");
  const [age, setAge] = React.useState("");
  const [warnName, setWarnName] = React.useState(false);
  const [warnRelationship, setWarnRelationship] = React.useState(false);
  const [warnAge, setWarnAge] = React.useState(false);

  const [endorsementStatus, setEndorsementStatus] = React.useState(false);
  const [expiry, setExpiryStatus] = React.useState("");
  const [oldValue, setOldValue] = React.useState<Date | null>(new Date());
  const [newValue, setNewValue] = React.useState<Date | null>(new Date());
  const [selectValue, setSelectValue] = React.useState("");
  const [oldsValue, setOldsValue] = React.useState("");
  const [newsValue, setNewsValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "policyType") {
      setPolicyType(event.target.value as string);
      setWarnPolicyType(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName === "policyName") {
      setPolicyName(event.target.value as string);
      setWarnPolicyName(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName == "claimPolicyName") {
      setClaimPolicyName(event.target.value.toString());
      setWarnClaimPolicyName(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName == "insuredPerson") {
      setInsuredPerson(event.target.value.toString());
      setWarnInsuredPerson(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName == "state") {
      setState(event.target.value.toString());
      setWarnState(event.target.value.toString().length > 0 ? false : true);
    } else if (attrName == "city") {
      setCity(event.target.value.toString());
      setWarnCity(event.target.value.toString().length > 0 ? false : true);
    } else if (attrName == "hospital") {
      setHospital(event.target.value.toString());
      setWarnHospital(event.target.value.toString().length > 0 ? false : true);
    } else if (attrName == "myDocument") {
      setMyDocument(event.target.value.toString());
      setWarnMyDocument(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName == "relationship") {
      setRelationship(event.target.value.toString());
      setWarnRelationship(
        event.target.value.toString().length > 0 ? false : true
      );
    } else if (attrName == "age") {
      setAge(event.target.value.toString());
      setWarnAge(event.target.value.toString().length > 0 ? false : true);
    }
  };

  const handleChangeTextField = (value: string, attrName: string) => {
    if (attrName === "policyExpiry") {
      setPolicyExpiry(value);
      setWarnPolicyExpiry(value.toString().length > 0 ? false : true);
    } else if (attrName == "name") {
      setName(value);
      setWarnName(value.toString().length > 0 ? false : true);
    }
  };

  useEffect(() => {
    setDataGroupPolicy([
      {
        logo: "https://static.hellopolicy.com/images/Royal_Sundaram.svg",
        line_one: "Health Insurance",
        line_two_titile: "Sum Insured",
        line_two_desc: "5 Lakh",
        line_three_title: "Coverage for",
        line_three_desc: "2 Adults & 1 Child",
        background_color: "#E5E3FF",
        text_color: "#6B62DC",
        icon_color: "#6B62DC",
      },
      {
        logo: "https://static.hellopolicy.com/images/aditya_birla_health.svg",
        line_one: "Life Insurance",
        line_two_titile: "Sum Assured",
        line_two_desc: "1 Crore",
        line_three_title: "Policy Term",
        line_three_desc: "20 Years",
        background_color: "#FFD8E3",
        text_color: "#EB5757",
        icon_color: "#EB5757",
      },
      {
        logo: "https://static.hellopolicy.com/images/CignaTTK-Health-Insurance-Company-Limited.svg",
        line_one: "Travel Insurance",
        line_two_titile: "Sum Insured",
        line_two_desc: "50,000",
        line_three_title: "Travellers",
        line_three_desc: "1",
        background_color: "#ACD4FB",
        text_color: "#247BCF",
        icon_color: "#247BCF",
      },
    ]);
  });

  const validateAddPolicy = () => {
    let warn_policy_type = policyType.toString().length > 0 ? false : true;
    let warn_policy_expiry = policyExpiry.toString().length > 0 ? false : true;
    let warn_policy_name = policyName.toString().length > 0 ? false : true;
    let warn_upload_document =
      uploadDocument.toString().length > 0 ? false : true;

    setWarnPolicyType(warn_policy_type);
    setWarnPolicyExpiry(warn_policy_expiry);
    setWarnPolicyName(warn_policy_name);
    setWarnUploadDocument(warn_upload_document);
    console.log(warn_policy_expiry);
    if (
      warn_policy_type == false &&
      warn_policy_expiry == false &&
      warn_policy_name == false &&
      warn_upload_document == false
    ) {
    }
  };

  const validateClaimRequest = () => {
    let warn_policy_name = claimPolicyName.toString().length > 0 ? false : true;
    let warn_insured_person =
      insuredPerson.toString().length > 0 ? false : true;
    let warn_state = state.toString().length > 0 ? false : true;
    let warn_city = city.toString().length > 0 ? false : true;
    let warn_hospital = hospital.toString().length > 0 ? false : true;
    let warn_my_document = myDocument.toString().length > 0 ? false : true;
    let warn_upload_document =
      claimUploadDocument.toString().length > 0 ? false : true;

    setWarnClaimPolicyName(warn_policy_name);
    setWarnInsuredPerson(warn_insured_person);
    setWarnState(warn_state);
    setWarnCity(warn_city);
    setWarnHospital(warn_hospital);
    setWarnMyDocument(warn_my_document);
    setWarnClaimUploadDocument(warn_upload_document);
    console.log("Umesh", warn_policy_name, warn_insured_person);
    if (
      warn_policy_name == false &&
      warn_insured_person == false &&
      warn_state == false &&
      warn_city == false &&
      warn_hospital == false &&
      warn_my_document == false &&
      warn_upload_document == false
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
    <Grid container spacing={3}>
      {/* <-------------------------Endorsement Pop up Start------------------------------> */}
      <Modal open={endorsementStatus} className="modalWrapper">
        <Box className="modalInner xl-width">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setEndorsementStatus(false);
                }}
              />
              <h5 className="popup-heading mb-2">Endorsement</h5>
              <p className="sm-font mb-5">
                Please select the values you wish to update and enter the new
                value.
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            className="mb-5"
          >
            <Grid item xs={4} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Value
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={policyType}
                  label="policyType"
                  onChange={(e) => handleChange(e, "policyType")}
                >
                  <MenuItem value={"dob"}>DOB</MenuItem>
                  <MenuItem value={"name"}>Name</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Old Value"
                  value={oldValue}
                  onChange={(newValue) => {
                    setOldValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={3} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="New Value"
                  value={newValue}
                  onChange={(newValue) => {
                    setNewValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2}>
              <Link
                href="#"
                className="redBtn delete"
                underline="none"
                onClick={() => {}}
              >
                Remove
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            className="mb-5"
          >
            <Grid item xs={4} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Value
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={policyType}
                  label="policyType"
                  onChange={(e) => handleChange(e, "policyType")}
                >
                  <MenuItem value={"dob"}>Gender</MenuItem>
                  <MenuItem value={"mobile"}>Mobile</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Old Value</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={oldsValue}
                  label="setOldsValue"
                  onChange={(e) => handleChange(e, "oldsValue")}
                >
                  <MenuItem value={"females"}>Female</MenuItem>
                  <MenuItem value={"males"}>Male</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">New Value</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newsValue}
                  label="setNewsValue"
                  onChange={(e) => handleChange(e, "newsValue")}
                >
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"male"}>Male</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Link
                href="#"
                className="greenBtn addfile"
                underline="none"
                onClick={() => {}}
              >
                Add
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button className="submitBtn">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-------------------------Endorsement Pop up End------------------------------> */}
      {/* <-------------------------Add policy Pop up Start------------------------------> */}
      <Modal open={addPolicyStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddPolicyStatus(false);
                }}
              />
              <h5 className="popup-heading">Upload Your Policy</h5>
              <Link className="sm-link">Have a PDF Policy handy?</Link>
              <p className="sm-font">
                Use our automated tool by simply uploading the document.
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={policyType}
                  label="policyType"
                  onChange={(e) => handleChange(e, "policyType")}
                >
                  <MenuItem value={"h"}>Health</MenuItem>
                  <MenuItem value={"c"}>Car</MenuItem>
                </Select>
              </FormControl>
              {warnPolicyType == true ? (
                <span className="error">Please select policy type.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Policy Expiry"
                  value={policyExpiry}
                  onChange={(newValue) => {
                    handleChangeTextField(newValue as string, "policyExpiry");
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {warnPolicyExpiry == true ? (
                <span className="error">Please select policy expiry.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="mb-5 inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={policyName}
                  label="setPolicyName"
                  onChange={(e) => handleChange(e, "policyName")}
                >
                  <MenuItem value={"hd"}>HDFC</MenuItem>
                  <MenuItem value={"ta"}>TATA</MenuItem>
                  <MenuItem value={"ba"}>BAJAJ</MenuItem>
                </Select>
              </FormControl>
              {warnPolicyName == true ? (
                <span className="error">Select policy name.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="mb-5 inputField">
              <input
                type="file"
                onChange={(e) => {
                  // setUploadDocument(e.target.value);
                }}
              />
              {warnUploadDocument == true ? (
                <span className="error">Select file.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={0} justifyContent="center" className="mb-5 ">
            {/* <Grid item xs={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Upload Document"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                className="browsebtn"
                onClick={() => onFileUpload()}
              >
                Browse
              </Button>
            </Grid> */}
            <p className="policy-sm">
              By proceeding ahead you expressly agree to the Access-Insure{" "}
              <Link>Terms of Use</Link> and <Link> Privacy Policy.</Link>
            </p>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                variant="contained"
                className="submitBtn"
                onClick={() => {
                  validateAddPolicy();
                }}
              >
                Submit Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-------------------------Add policy Pop up End------------------------------> */}
      {/* <-------------------------Claim new request Pop up Start------------------------------> */}
      <Modal
        open={claimNewRequest}
        onClose={() => {
          setClaimNewRequest(false);
        }}
        className="modalWrapper"
      >
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => setClaimNewRequest(false)}
              ></Link>
              <h5 className="popup-heading">Initiate New Claim Request</h5>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="mb-3">
            <Grid item xs={12}>
              <div className="selector width-per-item">
                <Button
                  className={kycDocumentStatus === "kyc" ? "selection" : ""}
                  style={{color: "#000"}}
                  onClick={() => {
                    setKycDocumentStatus("kyc");
                  }}
                >
                  <ArticleIcon /> Claim Intimation
                </Button>
                <Button
                  className={kycDocumentStatus === "policy" ? "selection" : ""}
                  style={{color: "#000"}}
                  onClick={() => {
                    setKycDocumentStatus("policy");
                  }}
                >
                  <AccountBalanceWalletIcon /> Cashless Request
                </Button>
              </div>
              <p className="small-text">
                Use Cashless Request for planned hospitalisation where bills are
                settled directly by Insurer.
              </p>
            </Grid>

            <Grid item xs={12} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={claimPolicyName}
                  label="Policy Name"
                  onChange={(e) => handleChange(e, "claimPolicyName")}
                >
                  <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                  <MenuItem value={"pan"}>PAN</MenuItem>
                </Select>
              </FormControl>
              {warnClaimPolicyName == true ? (
                <span className="error">Select policy name.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Insured Person
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={insuredPerson}
                  label="Insured Person"
                  onChange={(e) => handleChange(e, "insuredPerson")}
                >
                  <MenuItem value={"i"}>Umesh Gemini</MenuItem>
                  <MenuItem value={"h"}>Rahul Raghuvanshi</MenuItem>
                </Select>
              </FormControl>
              {warnInsuredPerson == true ? (
                <span className="error">Select insured person.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={3} className="mb-3">
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="State"
                  onChange={(e) => handleChange(e, "state")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
              {warnState == true ? (
                <span className="error">Select State</span>
              ) : null}
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="city"
                  onChange={(e) => handleChange(e, "city")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>{" "}
              {warnCity == true ? (
                <span className="error">Select city.</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={hospital}
                  label="Hospital"
                  onChange={(e) => handleChange(e, "hospital")}
                >
                  <MenuItem value={"i"}>Max Hospital</MenuItem>
                  <MenuItem value={"h"}>Fortis Hospital</MenuItem>
                </Select>
              </FormControl>
              {warnHospital == true ? (
                <span className="error">Select Hospital</span>
              ) : null}
            </Grid>
            <Grid item xs={12} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  My Document
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={myDocument}
                  label="My Document"
                  onChange={(e) => handleChange(e, "myDocument")}
                >
                  <MenuItem value={"i"}>Policy</MenuItem>
                  <MenuItem value={"h"}>Other</MenuItem>
                </Select>
              </FormControl>
              {warnMyDocument == true ? (
                <span className="error">Select document</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={0} className="mb-4 inputField">
            {/* <Grid item xs={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Upload Document"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" className="browsebtn">
                Browse
              </Button>
            </Grid> */}
            <Grid item xs={12} className="mb-5 inputField">
              <input
                type="file"
                onChange={(e) => {
                  // setUploadDocument(e.target.value);
                }}
              />
              {warnClaimUploadDocument == true ? (
                <span className="error">Select file.</span>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button
                variant="contained"
                className="submitBtn"
                onClick={() => {
                  validateClaimRequest();
                }}
              >
                Submit Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <-------------------------Claim new request Pop up End------------------------------> */}
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
      <Grid item xs={6}>
        <h3 className="mb-0">Policy Wallet</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="greenBtn docs"
          onClick={() => {
            setAddPolicyStatus(true);
          }}>
          Add Policy <span className="docs"></span>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h5 className="mb-0">Group Policy</h5>
          </Grid>
          {dataGroupPolicy.map((item, index) => (
            <Grid item md={6} lg={4}>
              <Box className="walletPolicyBox">
                <Box className="walletPolicyBox_inner">
                  <Grid
                    container
                    spacing={2}
                    className="forntSide"
                    style={{backgroundColor: item.background_color}}
                  >
                    <Grid item xs={6}>
                      <img
                        src={item.logo}
                        className="insurerlogo"
                        alt="Insurer"
                      />
                    </Grid>
                    <Grid className="text-right align-self-center" item xs={6}>
                      <p>{item.line_one}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className="valuedText">
                        {item.line_two_titile}{" "}
                        <span className="inrIcon">{item.line_two_desc}</span>
                      </p>
                    </Grid>
                    <Grid className="text-right" item xs={6}>
                      <p className="valuedText">
                        {item.line_three_title}{" "}
                        <span>{item.line_three_desc}</span>
                      </p>
                    </Grid>
                  </Grid>
                  <Grid
                    className="backSide"
                    container
                    spacing={2}
                    style={{backgroundColor: item.background_color}}
                  >
                    <Grid item xs={6} className="endorsement">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                        onClick={() => {
                          setEndorsementStatus(true);
                        }}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Endorsement
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="ecard">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        E-card
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="registerclaim">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                        onClick={() => {
                          setClaimNewRequest(true);
                        }}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Register Claim
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="addmember">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                        onClick={() => {
                          setAddMemberStatus(true);
                        }}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Add Member
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <h5 className="mb-0">Retail Policy</h5>
          </Grid>
          {dataGroupPolicy.map((item, index) => (
            <Grid item md={6} lg={4}>
              <Box className="walletPolicyBox">
                <Box className="walletPolicyBox_inner">
                  <Grid
                    container
                    spacing={2}
                    className="forntSide"
                    style={{backgroundColor: item.background_color}}
                  >
                    <Grid item xs={6}>
                      <img
                        src={item.logo}
                        className="insurerlogo"
                        alt="Insurer"
                      />
                    </Grid>
                    <Grid className="text-right align-self-center" item xs={6}>
                      <p>{item.line_one}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className="valuedText">
                        {item.line_two_titile}{" "}
                        <span className="inrIcon">{item.line_two_desc}</span>
                      </p>
                    </Grid>
                    <Grid className="text-right" item xs={6}>
                      <p className="valuedText">
                        {item.line_three_title}{" "}
                        <span>{item.line_three_desc}</span>
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className="valuedText">
                        Premium/year
                        <span className="inrIcon">2,086</span>
                      </p>
                    </Grid>
                    <Grid item xs={6} className="text-right">
                      <p className="valuedText">
                        01/08/2022
                        <div className="ctaBtn mt-1">
                          <Button className="mediumBtn">Renew</Button>
                        </div>
                      </p>
                    </Grid>
                  </Grid>
                  {/* Flip Side */}
                  <Grid
                    className="backSide"
                    container
                    spacing={2}
                    style={{backgroundColor: item.background_color}}
                  >
                    <Grid item xs={6} className="endorsement">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Endorsement
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="ecard">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        E-card
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="registerclaim">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Register Claim
                      </Link>
                    </Grid>
                    <Grid item xs={6} className="addmember">
                      <Link
                        href="#"
                        underline="none"
                        style={{color: item.text_color}}
                      >
                        <span
                          className="icon"
                          style={{backgroundColor: item.icon_color}}
                        ></span>
                        Add Member
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Policywallet;
