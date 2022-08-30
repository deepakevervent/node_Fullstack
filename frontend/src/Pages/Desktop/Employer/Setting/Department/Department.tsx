import React from "react";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import { Box, FormControl, Grid, InputLabel, Link, MenuItem, Modal, TextField } from "@mui/material";
import { Button } from "@material-ui/core";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Department() {
  const[addNewDepartment, setAddNewDepartment] = React.useState(false);
  const [departmentName, setDepartmentName] = React.useState("");
  const [reportingManager, setReportingManager] = React.useState("");
  const [employeeList, setEmployeeList] = React.useState("");

  const columns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 70},
    {field: "departmentName", headerName: "Department Name", width: 300},
    {field: "reportingManager", headerName: "Reporting Manager", width: 500},
    {field: "numberOfEmployees", headerName: "Number of Employees", width: 300},
    {field: "action", headerName: "Action", width: 300},
  ];

  const rows = [
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
    },
    {
      id: 1,
      departmentName: "App Developer",
      reportingManager: "Umesh Gemini",
      numberOfEmployees: "10",
      action: "Edit, Delete",
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
        <h3 className="mb-0">Departments</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blueBtn addfile"
          onClick={() => {
            setAddNewDepartment(true);
          }}>
          Add new department
        </Link>
        
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
                  <InputLabel id="demo-simple-select-label">Reporting Manager</InputLabel>
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
        <div style={{height: 400, width: "100%"}}>
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
