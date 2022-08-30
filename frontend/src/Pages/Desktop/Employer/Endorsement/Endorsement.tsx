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

function Endosement() {
  const [addPolicyStatus, setAddPolicyStatus] = React.useState(false);
  const [endorsementStatus, setEndorsementStatus] = React.useState(false);

  const [oldValue, setOldValue] = React.useState<Date | null>(new Date());
  const [newValue, setNewValue] = React.useState<Date | null>(new Date());
  const [policyType, setPolicyType] = React.useState("");
  const [policyname, setPolicyName] = React.useState("");
  const [expiry, setExpiryStatus] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [oldsValue, setOldsValue] = React.useState("");
  const [newsValue, setNewsValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "policyType") {
      setPolicyType(event.target.value as string);
    } else if (attrName === "expiry") {
      setExpiryStatus(event.target.value as string);
    } else if (attrName === "policyname") {
      setPolicyName(event.target.value as string);
    }
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "Endore. ID", width: 100 },
    { field: "empid", headerName: "Emp. ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "designation", headerName: "Designation", width: 200 },
    { field: "department", headerName: "Department", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "edits", headerName: "Edits", width: 200 },
    { field: "action", headerName: "Action", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
    {
      id: 1,
      empid: 2,
      name: "Umesh Gemini",
      designation: "Software Developer",
      department: "Enginnering",
      status: "Active",
      edits: "Date of Birth, Date of Joining, Gender",
      action: "not required",
    },
  ];
  return (
    <Grid container spacing={3} className="claimAssistant">
      <Grid item xs={6}>
        <h3 className="mb-0">Endorsement</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blueBtn addfile"
          onClick={() => {
            setEndorsementStatus(true);
          }}>
          Raise New Request
        </Link>
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
                <h5 className="popup-heading">Add Endorsement</h5>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              className="mb-5">
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Client ID
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={policyType}
                    label="Client ID"
                    onChange={(e) => handleChange(e, "policyType")}>
                    <MenuItem value={"dob"}>CL001</MenuItem>
                    <MenuItem value={"name"}>CL002</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Client Name"
                  variant="outlined"
                  className="textarea"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Company Type"
                  variant="outlined"
                  className="textarea"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Emp ID</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={policyType}
                    label="Emp ID"
                    onChange={(e) => handleChange(e, "policyType")}>
                    <MenuItem value={"dob"}>CL001</MenuItem>
                    <MenuItem value={"name"}>CL002</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Emp Name"
                  variant="outlined"
                  className="textarea"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Policy Type"
                  variant="outlined"
                  className="textarea"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              className="mb-5">
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={policyType}
                    label="policyType"
                    onChange={(e) => handleChange(e, "policyType")}>
                    <MenuItem value={"dob"}>Gender</MenuItem>
                    <MenuItem value={"mobile"}>Mobile</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Old Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={oldsValue}
                    label="setOldsValue"
                    onChange={(e) => handleChange(e, "oldsValue")}>
                    <MenuItem value={"females"}>Female</MenuItem>
                    <MenuItem value={"males"}>Male</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    New Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newsValue}
                    label="setNewsValue"
                    onChange={(e) => handleChange(e, "newsValue")}>
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
                  onClick={() => {}}>
                  Add
                  <span className="addfile"></span>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={0} justifyContent="center">
              <Grid
                item
                lg={3}
                className="ctaBtn"
                style={{ textAlign: "center" }}>
                <Button variant="contained" className="rejectBtn">
                  Reject
                </Button>
              </Grid>
              <Grid
                item
                lg={3}
                className="ctaBtn"
                style={{ textAlign: "center" }}>
                <Button variant="contained" className="submitBtn">
                  Approve
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

export default Endosement;
