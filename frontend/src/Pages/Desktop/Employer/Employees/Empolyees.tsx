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

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { styled } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { UploadFile } from "@mui/icons-material";
function Employees() {
  const [addFilterStatus, setAddFilterStatus] = React.useState(false);
  const [addInviteStatus, setAddInviteStatus] = React.useState(false);
  const [removeEmployee, setRemoveEmployee] = React.useState(false);
  const [removeEmployeeStep, setRemoveEmployeeStep] = React.useState(1);
  const [addNewEmployee, setAddNewEmployee] = React.useState(false);
  const [addNewEmployeeStep, setAddNewEmployeeStep] = React.useState(1);
  const [uploadFile, setUploadFile] = React.useState(false);
  const [uploadFileStep, setUploadFileStep] = React.useState(1);
  const [addPolicyStatus, setAddPolicyStatus] = React.useState(false);
  const [endorsementStatus, setEndorsementStatus] = React.useState(false);
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  const [oldValue, setOldValue] = React.useState<Date | null>(new Date());
  const [newValue, setNewValue] = React.useState<Date | null>(new Date());
  const [policyType, setPolicyType] = React.useState("");
  const [policyname, setPolicyName] = React.useState("");
  const [expiry, setExpiryStatus] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [oldsValue, setOldsValue] = React.useState("");
  const [newsValue, setNewsValue] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "gender") {
      setGender(event.target.value as string);
    } else if (attrName === "policyType") {
      setPolicyType(event.target.value as string);
    } else if (attrName === "expiry") {
      setExpiryStatus(event.target.value as string);
    } else if (attrName === "policyname") {
      setPolicyName(event.target.value as string);
    } else if (attrName === "age") {
      setAge(event.target.value as string);
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#6B62DC" : "#308fe8",
    },
  }));

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
    <Grid container spacing={3}>
      <Modal open={uploadFile} className="modalWrapper">
        <div>
          {uploadFileStep == 1 ? (
            <Box className="modalInner">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setUploadFile(false);
                    }}
                  />
                  <h5 className="popup-heading">Upload Employees in Bulk</h5>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0}
                justifyContent="center"
                className="mb-5">
                <Grid item xs={10} className="inputField uploadFile">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Upload .xl .csv .xls file"
                    variant="outlined"
                    className="textarea"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button className="browsebtn">
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
                  <Button
                    className="submitBtn"
                    onClick={() => {
                      setUploadFileStep(2);
                    }}>
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {uploadFileStep == 2 ? (
            <Box className="modalInner">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    className="close-button"
                    onClick={() => {
                      setUploadFile(false);
                    }}
                  />
                  <h5 className="popup-heading">Uploading file</h5>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={12} className="mb-5">
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </Box>
                </Grid>
                <Grid item xs={12} className="mb-5">
                  <Link href="#" className="md-link" underline="none">
                    67%... donot close or switch tab while it’s uploading
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
          {uploadFileStep == 3 ? (
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
                  <h5 className="popup-heading">Kudos !!</h5>
                </Grid>
              </Grid>
              <Grid container spacing={0} textAlign="center">
                <Grid item xs={12} className="mb-5">
                  <h1>Img</h1>
                </Grid>
                <Grid item xs={12} className="mb-5">
                  <h5 className="popup-heading">You file has been uploaded</h5>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h1></h1>
          )}
        </div>
      </Modal>
      <Modal open={addNewEmployee} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={1}>
            <Grid item xs={12} className="mb-5">
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddNewEmployee(false);
                }}
              />
              <h5 className="popup-heading">Add New Employee</h5>
            </Grid>
          </Grid>
          {addNewEmployeeStep == 1 ? (
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4} className="inputField">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Employee ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Employee ID"
                      onChange={(e) => handleChange(e, "age")}>
                      <MenuItem value={"20"}>20 years</MenuItem>
                      <MenuItem value={"22"}>22 years</MenuItem>
                      <MenuItem value={"24"}>24 years</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8} className="inputField ">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Employee Name"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6} className="inputField">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="DOB"
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
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Department"
                      onChange={(e) => handleChange(e, "age")}>
                      <MenuItem value={"20s"}>IT</MenuItem>
                      <MenuItem value={"22s"}>HR</MenuItem>
                      <MenuItem value={"24s"}>Development</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} className="inputField">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Date of Joining"
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
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Status"
                      onChange={(e) => handleChange(e, "age")}>
                      <MenuItem value={"20b"}>Married</MenuItem>
                      <MenuItem value={"22b"}>Unmarried</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} className="inputField">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Policy Start Date"
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
                      Policy Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Employee ID"
                      onChange={(e) => handleChange(e, "age")}>
                      <MenuItem value={"20"}>20 years</MenuItem>
                      <MenuItem value={"22"}>22 years</MenuItem>
                      <MenuItem value={"24"}>24 years</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: "center", marginTop: "20px" }}
                  className="ctaBtn">
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={() => setAddNewEmployeeStep(2)}>
                    Submit Details
                  </Button>
                </Grid>
              </Grid>
            </div>
          ) : null}
          {addNewEmployeeStep == 2 ? (
            <Grid item xs={12}>
              <Link href="#" className="md-link" underline="none">
                Great ! New Employee added.
              </Link>
            </Grid>
          ) : null}
        </Box>
      </Modal>
      <Modal open={removeEmployee} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setRemoveEmployee(false);
                }}
              />
              <h5 className="popup-heading">Are you sure ?</h5>
            </Grid>
          </Grid>
          <Grid container spacing={0} textAlign="center">
            <Grid item xs={12}>
              <p className="mb-5">You are about to remove 5 Employees</p>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button
                className="submitBtn"
                onClick={() => {
                  setRemoveEmployee(false);
                }}>
                Yes, Remove
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={addFilterStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddFilterStatus(false);
                }}
              />
              <h5 className="popup-heading">Add Filters</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Employee ID
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Employee ID"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Designation"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Department"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Date of Joining"
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
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="  Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label=" Policy Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button
                className="submitBtn"
                onClick={() => {
                  setAddFilterStatus(false);
                }}>
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
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
              <h5 className="popup-heading">Kudos !!</h5>
            </Grid>
          </Grid>
          <Grid container spacing={0} textAlign="center">
            <Grid item xs={12} className="mb-5">
              <h1>Img</h1>
            </Grid>
            <Grid item xs={12} className="mb-5">
              <h5 className="popup-heading">
                Invitation has been sent successfully
              </h5>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={addPolicyStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={1}>
            <Grid item xs={12} className="mb-5">
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddPolicyStatus(false);
                }}
              />
              <h5 className="popup-heading">Add New Employee</h5>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4} className="inputField mb-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Employee ID
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Employee ID"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8} className="inputField">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Employee Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="DOB"
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
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Department"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Designation"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Date of Joining"
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
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20b"}>Married</MenuItem>
                  <MenuItem value={"22b"}>Unmarried</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Policy Date Added"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} className="inputField">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Policy Start Date"
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
                  Policy Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Policy Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button className="submitBtn">
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={addInviteStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddInviteStatus(false);
                }}
              />
              <h5 className="popup-heading">Invite Employees</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12} className="inputField">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                className="textarea"
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button
                className="submitBtn"
                onClick={() => {
                  setAddInviteStatus(false);
                }}>
                Invite
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      
      <Grid item xs={6}>
        <h3 className="mb-0">Employees</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blackBtn settings"
          onClick={() => {
            setAddFilterStatus(true);
          }}>
          Filter
        </Link>
        <Link
          href="#"
          underline="none"
          className="blueBtn mail"
          onClick={() => {
            setAddInviteStatus(true);
          }}>
          Invite Employees
        </Link>

        <Link
          href="#"
          underline="none"
          className="blueBtn upload"
          onClick={() => {
            setUploadFile(true);
          }}>
          Bulk Upload
        </Link>
        <Link
          href="#"
          underline="none"
          className="greenBtn addfile"
          onClick={() => {
            setAddNewEmployee(true);
          }}>
          Add
        </Link>
        <Link
          href="#"
          underline="none"
          className="redBtn delete"
          onClick={() => {
            setRemoveEmployee(true);
          }}>
          Remove
        </Link>
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
      </Grid>
    </Grid>
  );
}

export default Employees;
