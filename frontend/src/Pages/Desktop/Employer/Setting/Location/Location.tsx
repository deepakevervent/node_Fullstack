import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Location() {
  const [addNewDepartment, setAddNewDepartment] = React.useState(false);
  const [departmentName, setDepartmentName] = React.useState("");
  const [reportingManager, setReportingManager] = React.useState("");
  const [employeeList, setEmployeeList] = React.useState("");
  const [locationStatus, setLocationStatus] = React.useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Emp. ID", width: 70 },
    { field: "name", headerName: "Emp. Name", width: 250 },
    { field: "branch", headerName: "Branch", width: 250 },
    { field: "cityState", headerName: "City/State", width: 250 },
    { field: "accessType", headerName: "Access Type", width: 250 },
    { field: "action", headerName: "Action", width: 250 },
  ];

  const rows = [
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
    {
      id: 1,
      name: "Umesh Gemini",
      branch: "Head Office",
      cityState: "Mohali/Punjab",
      accessType: "Super Admin",
      action: "Delete Edit",
    },
  ];

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "departmentName") {
      setDepartmentName(event.target.value as string);
    } else if (attrName === "reportingManager") {
      setReportingManager(event.target.value as string);
    } else if (attrName === "employeeList") {
      setEmployeeList(event.target.value as string);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h3 className="mb-0">Locations</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blueBtn location"
          onClick={() => {
            setLocationStatus(true);
          }}>
          Add location
        </Link>
        <Modal open={locationStatus} className="modalWrapper">
          <Box className="modalInner xl-width">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Link
                  href="#"
                  className="close-button"
                  onClick={() => {
                    setLocationStatus(false);
                  }}
                />
                <h5 className="popup-heading mb-5">Location</h5>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="State"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="
                    City"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="Branch"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Emp ID</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="Emp ID"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Emp Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Access Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="Access Type"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                className="ctaBtn"
                style={{ textAlign: "center", marginTop: "20px" }}>
                <Button className="submitBtn">Submit</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>

        <Modal
          open={addNewDepartment}
          onClose={() => {
            setAddNewDepartment(false);
          }}
          className="modalWrapper">
          <Box className="modalInner xl-width">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Link href="#" className="close-button"></Link>
                <h5 className="popup-heading">Add New Department</h5>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="mb-3">
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Department Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departmentName}
                    label="Department Name"
                    onChange={(e) => handleChange(e, "departmentName")}>
                    <MenuItem value={"aadhar"}>Design</MenuItem>
                    <MenuItem value={"pan"}>Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Reporting Manager
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={reportingManager}
                    label="Reporting Manager"
                    onChange={(e) => handleChange(e, "reportingManager")}>
                    <MenuItem value={"aadhar"}>Rahul Raghuvanshi</MenuItem>
                    <MenuItem value={"pan"}>Mobin Mirza</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Employee List
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={employeeList}
                    label="Employee List"
                    onChange={(e) => handleChange(e, "employeeList")}>
                    <MenuItem value={"i"}>Rahul</MenuItem>
                    <MenuItem value={"h"}>Uday</MenuItem>
                    <MenuItem value={"h"}>Karan</MenuItem>
                    <MenuItem value={"h"}>Mobin</MenuItem>
                    <MenuItem value={"h"}>Umesh</MenuItem>
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
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
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

export default Location;
