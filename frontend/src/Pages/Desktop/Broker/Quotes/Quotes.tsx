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
export default function Quotes() {
  const [addQuotes, setAddQuotes] = React.useState(false);
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
  const [enterquoteStatus, setEnterQuoteStatus] = React.useState(false);
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
    { field: "clientName", headerName: "Client Name", width: 180 },
    { field: "product", headerName: "Product", width: 180 },
    { field: "nol", headerName: "NOL", width: 180 },
    { field: "family", headerName: "Family", width: 180 },
    { field: "parents", headerName: "Parents", width: 180 },
    { field: "status", headerName: "Status", width: 180 },
    { field: "sumInsured", headerName: "Sum Insured", width: 180 },
    { field: "premium", headerName: "Premium", width: 180 },
  ];

  const rows = [
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
    {
      id: "QT0011",
      clientid: "CL001",
      clientName: "Umesh Gemini",
      product: "Group Health Policy",
      nol: "123",
      family: "Spouse/Kids",
      parents: "Yes",
      status: "Approved",
      sumInsured: "₹ 3L, 5L, 8L",
      premium: "₹ 80,000",
    },
  ];

  return (
    <Grid container spacing={3}>
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
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quote ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Quote ID"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Client ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Client ID"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
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
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="  Product"
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
                  label=" Insurer"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">NOL</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label=" NOL"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Dependents
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label=" Dependents"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label=" Status"
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
                variant="contained"
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
      {/* Enter-quote details popup */}
      <Modal open={addQuotes} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={1}>
            <Grid item xs={12} className="mb-5">
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setAddQuotes(false);
                }}
              />
              <h5 className="popup-heading"> Enter Quote Details</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Client Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Client ID</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Client ID"
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
                  Sum Insured
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sum Insured"
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
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Features</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Features"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20b"}>Married</MenuItem>
                  <MenuItem value={"22b"}>Unmarried</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Family Members
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Family Members"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Parents</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Parents"
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
              className="ctaBtn mt-2">
              <Button
                variant="contained"
                className="submitBtn"
                onClick={() => setAddQuotes(false)}>
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* quote form Helath insurance */}
      <Modal open={addPolicyStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={1}>
            <Grid item xs={12} className="mb-5">
              <Link
                href="#"
                className="close-button"
                onClick={() => {
                  setEnterQuoteStatus(false);
                }}
              />
              <h5 className="popup-heading"> Health Insurance</h5>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Client Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sum Insured
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sum Insured"
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
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Features</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Features"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20b"}>Married</MenuItem>
                  <MenuItem value={"22b"}>Unmarried</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Family Members
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Family Members"
                  onChange={(e) => handleChange(e, "age")}>
                  <MenuItem value={"20"}>20 years</MenuItem>
                  <MenuItem value={"22"}>22 years</MenuItem>
                  <MenuItem value={"24"}>24 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Parents</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Parents"
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
              <Button variant="contained" className="submitBtn">
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid item xs={6}>
        <h3 className="mb-0">
          {quotesArchiveListStatus == "quotes" ? "" : "Archived "} Quotes{" "}
          <Link
            underline="none"
            className="linkTag"
            onClick={() =>
              setQuotesArchiveListStatus(
                quotesArchiveListStatus == "quotes" ? "archive" : "quotes"
              )
            }>
            {quotesArchiveListStatus == "quotes"
              ? "Archive List"
              : "< Back to Quotes"}
          </Link>
        </h3>
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
          className="greenBtn addfile"
          onClick={() => {
            setAddQuotes(true);
          }}>
          Add Quote
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
