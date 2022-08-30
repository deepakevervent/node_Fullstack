import {Grid, } from "@mui/material";
import React, {useEffect} from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {DataGrid, GridColDef, GridValueGetterParams, gridClasses} from "@mui/x-data-grid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArticleIcon from "@mui/icons-material/Article";

function Claimassistant() {
  const [productTabsStatus, setProductTabsStatus] = React.useState("health");
  const [claimNewRequest, setClaimNewRequest] = React.useState(false);
  const [addFilter, setAddFilter] = React.useState(false);
  const [addPolicyStatus, setAddPolicyStatus] = React.useState(false);

  const [policyType, setPolicyType] = React.useState("");
  const [policyname, setPolicyName] = React.useState("");
  const [expiry, setExpiryStatus] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [kycDocumentStatus, setKycDocumentStatus] = React.useState("kyc");
  const [selectDocument, setSelectDocument] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "policyType") {
      setPolicyType(event.target.value as string);
    } else if (attrName === "expiry") {
      setExpiryStatus(event.target.value as string);
    } else if (attrName === "policyname") {
      setPolicyName(event.target.value as string);
    } else if (attrName === "relation") {
      setRelation(event.target.value as string);
    }
  };
  const columns: GridColDef[] = [
    {field: "id", headerName: "Claim. ID", width: 70},
    {field: "empid", headerName: "Emp. ID", flex: 0.5},
    {field: "name", headerName: "Name", flex: 1},
    {field: "designation", headerName: "Designation", flex: 1},
    {field: "department", headerName: "Department", flex: 0.6},
    {field: "policyType", headerName: "Policy Type", flex: 1},
    {field: "status", headerName: "Status", flex: 0.4},
    {field: "insuredPerson", headerName: "Insured Person", flex: 1.5},
    {field: "requestType", headerName: "Request Type", flex: 0.6},
    {field: "action", headerName: "Action", flex: 0.6},
  ];

  const rows = [
    {
      id: 1,
      empid: "EV0023",
      name: "Rahul Raghuvanshi",
      designation: "AVP Design",
      department: "Design",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Rahul Raghuvanshi",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 2,
      empid: "EV0024",
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Umesh Gemini",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 3,
      empid: "EV0025",
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum.",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 4,
      empid: "EV0026",
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Umesh Gemini",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 5,
      empid: "EV0027",
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Umesh Gemini, Bhavna",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 6,
      empid: "EV0028",
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Umesh Gemini",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 7,
      empid: "EV0029",
      name: "Surya Pratap Singh",
      designation: "QA Lead",
      department: "Quality Analyst",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Surya Pratap Singh",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 8,
      empid: 30,
      name: "Gurwinder Kaur",
      designation: "UI/UX Designer",
      department: "Design",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Gurwinder Kaur",
      requestType: "Cashless",
      action: "not required",
    },
    {
      id: 9,
      empid: 31,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      policyType: "Group Health Insurance",
      status: "Active",
      insuredPerson: "Umesh Gemini",
      requestType: "Cashless",
      action: "not required",
    },
  ];
  return (
    <Grid container spacing={3} className="claimAssistant">
      {/* add filter popup */}
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

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectDocument}
                  label="Policy Name"
                  onChange={(e) => handleChange(e, "selectDocument")}
                >
                  <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                  <MenuItem value={"pan"}>PAN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Insured Person
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Insured Person"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="mb-3">
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="State"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="city"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Hospital"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Hospital"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  My Document
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="My Document"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="mb-4">
            <Grid item xs={10}>
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
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button variant="contained" className="submitBtn">
                Submit Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={addFilter}
        onClose={() => {
          setAddFilter(false);
        }}
        className="modalWrapper"
      >
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => setAddFilter(false)}
              ></Link>
              <h5 className="popup-heading">Add Filters</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mb-3">
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Claim Id</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectDocument}
                  label="Claim Id"
                  onChange={(e) => handleChange(e, "selectDocument")}
                >
                  <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                  <MenuItem value={"pan"}>PAN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Client ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Client ID"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Emp ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Emp ID"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Employee Name"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Designation"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mb-3">
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Department"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Request Type"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Status"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Request Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Request Type"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Insured Person
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Insured Person"
                  onChange={(e) => handleChange(e, "relation")}
                >
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className="ctaBtn" style={{textAlign: "center"}}>
              <Button variant="contained" className="submitBtn">
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* claim-details popup */}
      {/* <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link href="#" className="close-button"></Link>
              <h5 className="popup-heading">Claim Details</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mb-3">
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Claim Id</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectDocument}
                  label="Claim Id"
                  onChange={(e) => handleChange(e, "selectDocument")}>
                  <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                  <MenuItem value={"pan"}>PAN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Emp Id</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectDocument}
                  label="Emp Id"
                  onChange={(e) => handleChange(e, "selectDocument")}>
                  <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                  <MenuItem value={"pan"}>PAN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Department"
                  onChange={(e) => handleChange(e, "relation")}>
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="mb-3">
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Designation"
                  onChange={(e) => handleChange(e, "relation")}>
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Insured Name"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Request Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="Request Type"
                  onChange={(e) => handleChange(e, "relation")}>
                  <MenuItem value={"i"}>ICICI</MenuItem>
                  <MenuItem value={"h"}>HDFC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              className="ctaBtn"
              style={{ textAlign: "center" }}>
              <Button variant="contained" className="submitBtn">
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal> */}

      {/* Initiate claim popup */}

      <Grid item xs={6}>
        <h3 className="mb-0">Claim Assistant</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link href="#" underline="none" className="clearFilter">
          Clear
        </Link>
        <Link
          href="#"
          underline="none"
          className="blackBtn settings"
          onClick={() => {
            setAddFilter(true);
          }}
        >
          Filter
        </Link>
        <Link href="#" underline="none" className="blueBtn download">
          Download
        </Link>
        <Link
          href="#"
          underline="none"
          className="greenBtn docs"
          onClick={() => {
            setClaimNewRequest(true);
          }}
        >
          Intiate a claim
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div className="productTabs">
          <Button
            className={
              productTabsStatus == "health" ? "health active" : "health"
            }
            onClick={() => {
              setProductTabsStatus("health");
            }}
          >
            Health
          </Button>
          <Button
            className={productTabsStatus == "car" ? "car active" : "car"}
            onClick={() => {
              setProductTabsStatus("car");
            }}
          >
            Car
          </Button>
          <Button
            className={productTabsStatus == "bike" ? "bike active" : "bike"}
            onClick={() => {
              setProductTabsStatus("bike");
            }}
          >
            Bike
          </Button>
          <Button
            className={productTabsStatus == "term" ? "term active" : "term"}
            onClick={() => {
              setProductTabsStatus("term");
            }}
          >
            Term
          </Button>
          <Button
            className={
              productTabsStatus == "investment"
                ? "investment active"
                : "investment"
            }
            onClick={() => {
              setProductTabsStatus("investment");
            }}
          >
            Investment
          </Button>
          <Button
            className={
              productTabsStatus == "travel" ? "travel active" : "travel"
            }
            onClick={() => {
              setProductTabsStatus("travel");
            }}
          >
            Travel
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{height: 500, width: "100%"}}>
          <DataGrid
            className="datagridTable"
            // rowHeight={40}
            rows={rows}
            getRowHeight={() => 'auto'}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
            }}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>

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
                <h5 className="popup-heading">Uploading file</h5>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} className="mb-5">
                <Link href="#" className="md-link" underline="none">
                  67%... donot close or switch tab while it’s uploading
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                className="ctaBtn"
                style={{textAlign: "center"}}
              >
                <Button variant="contained" className="submitBtn">
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
}

export default Claimassistant;
