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

export default function Policies() {
  const [addCdBalance, setAddCdBalance] = React.useState(false);
  const [quotesArchiveListStatus, setQuotesArchiveListStatus] =
    React.useState("quotes");
  const [addFilterStatus, setAddFilterStatus] = React.useState(false);
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
    { field: "id", headerName: "Quote ID", width: 100 },
    { field: "clientid", headerName: "Client ID", width: 100 },
    { field: "product", headerName: "Product", width: 180 },
    { field: "insurer", headerName: "Insurer", width: 180 },
    { field: "policyNumber", headerName: "Policy Number", width: 180 },
    { field: "nol", headerName: "NOL", width: 180 },
    { field: "cdBalance", headerName: "CD Balance", width: 180 },
    { field: "startDate", headerName: "Start Date", width: 180 },
    { field: "endDate", headerName: "End Date", width: 180 },
    { field: "status", headerName: "Status", width: 180 },
  ];

  const rows = [
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      product: "Group Health Policy",
      insurer: "Kotak Mahindra",
      policyNumber: "PH13323",
      nol: "123",
      cdBalance: "₹42,000",
      startDate: "12/12/2022",
      endDate: "12/12/2023",
      status: "Active",
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
                  <h5 className="popup-heading mb-4">Upload CSV</h5>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0}
                justifyContent="center"
                className="mb-5">
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Upload .xl .csv .xls file"
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
                  <Button
                    variant="contained"
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
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={4} className="mb-5">
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
                <Grid item xs={8} className="mb-5">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Employee Name"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6} className="mb-5">
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

                <Grid item xs={6} className="mb-5">
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
                <Grid item xs={6} className="mb-5">
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
                <Grid item xs={6} className="mb-5">
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
                <Grid item xs={6} className="mb-5">
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
                <Grid item xs={6} className="mb-5">
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
                  style={{ textAlign: "center" }}
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
              <Link href="#" className="md-link" underline="none">
                You are about to remove 5 Employees
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button
                variant="contained"
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
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Client ID</InputLabel>
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Client Name"
                variant="outlined"
                className="textarea"
                sx={{ height: 120 }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Product"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Insurer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Insurer"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Number
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Policy Number"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">NOL</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="NOL"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  CD Balance
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="CD Balance"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="End Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
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
          <Grid container spacing={2}>
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
      {/* Add New policy popup */}
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
              <h5 className="popup-heading">Add New Policy</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Client ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label=" Client ID"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Client Name"
                variant="outlined"
                sx={{ width: 250 }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Product"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Insurer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Insurer"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Policy Number
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Policy Number"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">NOL</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="NOL"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  CD Balance
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="CD Balance"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20s"}>IT</MenuItem>
                  <MenuItem value={"22s"}>HR</MenuItem>
                  <MenuItem value={"24s"}>Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="End Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center" }}
              className="ctaBtn">
              <Button variant="contained" className="submitBtn">
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* add cd balance popup */}
      <Modal open={addCdBalance} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={1}>
            <Grid item xs={12} className="mb-5">
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddCdBalance(false);
                }}
              />
              <h5 className="popup-heading">Add CD Balance</h5>
            </Grid>
          </Grid>
          {addNewEmployeeStep == 1 ? (
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} className="mb-5">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Enter CD Amount
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Enter CD Amount"
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
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={() => setAddCdBalance(false)}>
                    Add Amount
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
      <Grid item xs={6}>
        <h3 className="mb-0">Policies</h3>
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
          className="blueBtn docs"
          onClick={() => setUploadFile(true)}>
          CSV
        </Link>
        <Link
          href="#"
          underline="none"
          className="blueBtn docs"
          onClick={() => setAddCdBalance(true)}>
          Add CD Balance
        </Link>
        <Link
          href="#"
          underline="none"
          className="greenBtn addfile"
          onClick={() => {
            setAddPolicyStatus(true);
          }}>
          Add Policy
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            className="datagridTable"
          />
        </div>
      </Grid>
    </Grid>
  );
}
