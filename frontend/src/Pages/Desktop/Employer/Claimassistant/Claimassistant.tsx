import { Grid } from "@mui/material";
import React, { useEffect } from "react";
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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArticleIcon from "@mui/icons-material/Article";

function Claimassistant() {
  const [addPolicyStatus, setAddPolicyStatus] = React.useState(false);
  const [endorsementStatus, setEndorsementStatus] = React.useState(false);
  const [claimNewRequest, setClaimNewRequest] = React.useState(false);

  const [oldValue, setOldValue] = React.useState<Date | null>(new Date());
  const [newValue, setNewValue] = React.useState<Date | null>(new Date());
  const [policyType, setPolicyType] = React.useState("");
  const [policyname, setPolicyName] = React.useState("");
  const [expiry, setExpiryStatus] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [oldsValue, setOldsValue] = React.useState("");
  const [newsValue, setNewsValue] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [kycDocumentStatus, setKycDocumentStatus] = React.useState("kyc");
  const [selectDocument, setSelectDocument] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
    { field: "id", headerName: "Claim. ID", width: 70 },
    { field: "empid", headerName: "Emp. ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "designation", headerName: "Designation", width: 130 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "policyType", headerName: "Policy Type", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "insuredPerson", headerName: "Insured Person", width: 130 },
    { field: "requestType", headerName: "Request Type", width: 130 },
    { field: "action", headerName: "Action", width: 130 },
  ];

  const rows = [
    {
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      id: 1,
      empid: 23,
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
      <Grid item xs={6}>
        <h3 className="mb-0">Claim Assistant</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blackBtn settings"
          onClick={() => {
            setOpen(true);
          }}>
          Filter
        </Link>
        {/* Add-filter popup */}
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          className="modalWrapper">
          <Box className="modalInner">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Link href="#" className="close-button"></Link>
                <h5 className="popup-heading">Add Filters</h5>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="mb-3">
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Employee Id
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectDocument}
                    label="Employee Id"
                    onChange={(e) => handleChange(e, "selectDocument")}>
                    <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                    <MenuItem value={"pan"}>PAN</MenuItem>
                  </Select>
                </FormControl>
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
            <Grid container spacing={3} className="mb-3">
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
                    onChange={(e) => handleChange(e, "relation")}>
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
        </Modal>

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
            <Grid container spacing={3} className="mb-3">
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Claim Id
                  </InputLabel>
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
              <Grid item xs={3}>
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
            <Grid container spacing={3}>
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
        <Link
          href="#"
          underline="none"
          className="greenBtn docs"
          onClick={() => {
            setClaimNewRequest(true);
          }}>
          Intiate a claim
        </Link>

        {/* initiate claim popup */}
        <Modal
         open={claimNewRequest}
        onClose={() => {
          setClaimNewRequest(false);
        }}
          className="modalWrapper">
          <Box className="modalInner">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Link href="#" className="close-button" onClick={() => setClaimNewRequest(false)}></Link>
                <h5 className="popup-heading">Initiate New Claim Request</h5>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="mb-3">
              <Grid item xs={12}>
                <div className="selector width-per-item">
                  <Button
                    className={kycDocumentStatus === "kyc" ? "selection" : ""}
                    style={{ color: "#000" }}
                    onClick={() => {
                      setKycDocumentStatus("kyc");
                    }}>
                    <ArticleIcon /> Claim Intimation
                  </Button>
                  <Button
                    className={
                      kycDocumentStatus === "policy" ? "selection" : ""
                    }
                    style={{ color: "#000" }}
                    onClick={() => {
                      setKycDocumentStatus("policy");
                    }}>
                    <AccountBalanceWalletIcon /> Cashless Request
                  </Button>
                </div>
                <p className="small-text">
                  Use Cashless Request for planned hospitalisation where bills
                  are settled directly by Insurer.
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
                    onChange={(e) => handleChange(e, "selectDocument")}>
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
                    onChange={(e) => handleChange(e, "relation")}>
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
                    onChange={(e) => handleChange(e, "relation")}>
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
                    onChange={(e) => handleChange(e, "relation")}>
                    <MenuItem value={"i"}>ICICI</MenuItem>
                    <MenuItem value={"h"}>HDFC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Hospital
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={relation}
                    label="Hospital"
                    onChange={(e) => handleChange(e, "relation")}>
                    <MenuItem value={"i"}>ICICI</MenuItem>
                    <MenuItem value={"h"}>HDFC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Hospital
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={relation}
                    label="Hospital"
                    onChange={(e) => handleChange(e, "relation")}>
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
                    onChange={(e) => handleChange(e, "relation")}>
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
              <Grid
                item
                xs={12}
                className="ctaBtn"
                style={{ textAlign: "center" }}>
                <Button variant="contained" className="submitBtn">
                  Submit Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            className="datagridTable"
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
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
                style={{ textAlign: "center" }}>
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
