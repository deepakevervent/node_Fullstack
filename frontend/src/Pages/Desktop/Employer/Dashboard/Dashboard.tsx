import React from "react";
import "../../Employee/Dashboard/Dashboard.scss";
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
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Dashboard(): JSX.Element {
  const [carFormPageStatus, setCarFormPageStatus] = React.useState(1);
  const [bikeFormPageStatus, setBikeFormPageStatus] = React.useState(1);
   const [carPopupStatus, setCarPopupStatus] = React.useState(false);
    const [bikePopupStatus, setBikePopupStatus] = React.useState(false);
  const [healthPopupStatus, setHealthPopupStatus] = React.useState(false);
  const [travelPopupStatus, setTravelPopupStatus] = React.useState(false);
  const [termPopupStatus, setTermPopupStatus] = React.useState(false);
    const [addInviteStatus, setAddInviteStatus] = React.useState(false);
  const [investmentPopupStatus, setInvestmentPopupStatus] =
    React.useState(false);
    const [policyExpiry, setPolicyExpiry] = React.useState("");
  const [ncb, setNcb] = React.useState(0);
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [pay, setPaymode] = React.useState("");
  const [income, setIncome] = React.useState("");
  const [plan, setPlan] = React.useState("");
  const [fuel, setFuelType] = React.useState("");
  const [makemodel, setMakemodel] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [insurers, setInsurers] = React.useState("");
  const [claim, setClaim] = React.useState("");

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "gender") {
      setGender(event.target.value as string);
    } else if (attrName === "age") {
      setAge(event.target.value as string);
    } else if (attrName === "income") {
      setIncome(event.target.value as string);
    } else if (attrName === "pay") {
      setPaymode(event.target.value as string);
    }
  };

  function createData(
    empid: string,
    name: string,
    mobile: number,
    policies: number,
    dependents: number,
    status: string,
    action: string
  ) {
    return { empid, name, mobile, policies, dependents, status, action };
  }

  const rows = [
    createData("EV001", "Ankit Sachdeva", 9034008486, 1, 2, "Pending", "..."),
    createData("EV002", "Rahul Raghuvanshi", 9876543210, 3, 3, "Active", "..."),
    createData("EV003", "Umesh Gemini", 9876543210, 3, 3, "Active", "..."),
    createData("EV004", "Uday Kumar", 9876543210, 3, 3, "Active", "..."),
    createData("EV005", "Karan Joshi", 9876543210, 3, 3, "Active", "..."),
    createData("EV006", "Vishal Sharma", 9876543210, 3, 3, "Active", "..."),
    createData("EV007", "Gurwinder Kaur", 9876543210, 3, 3, "Active", "..."),
    createData("EV008", "Vishal Sharma", 9876543210, 3, 3, "Active", "..."),
    createData("EV009", "Uday Kumar", 9876543210, 3, 3, "Active", "..."),
    createData(
      "EV0010",
      "Rahul Raghuvanshi",
      9876543210,
      3,
      3,
      "Active",
      "..."
    ),
  ];

  return (
    <Grid container spacing={3}>
      {/* invite employee popup */}
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                className="textarea" sx={{height:"120"}}
              />
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
                  setAddInviteStatus(false);
                }}>
                Invite
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid item xs={8}>
        <h3>Dashboard</h3>

        <Box className="briefDetails">
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/employees_icon.svg" alt="img" />
                <span>
                  <p>Employees</p>
                  <h4>1260</h4>
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/active_employees_icon.svg" alt="img" />
                <span>
                  <p>Active Employees</p>
                  <h4>1236</h4>
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="colSection">
                <img src="images/policies_icon.svg" alt="img" />
                <span>
                  <p>Active Policies</p>
                  <h4>1236</h4>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <h5>Policies</h5>
          <Grid container spacing={3} className="employerPolicyWrapper">
            <Grid item xs={5}>
              <div className="cyanPolicyCard">
                <Grid container className="employerpolicyDetail">
                  <Grid item xs={8}>
                    <span className="active">Active</span>
                    <h5>Group Health Insurance</h5>
                    <p className="mb-4">Care for health plan</p>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <img
                      src="./images/insurerlogo/Royal_Sundaram.svg"
                      alt="img"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <p className="small">Sum Insured</p>
                    <h6 className="rIcon">3L, 5L, 10L</h6>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <p className="small">Valid Till</p>
                    <h6>10/12/2026</h6>
                  </Grid>
                  <Grid item xs={4} className="text-right">
                    <p className="small">Dependents</p>
                    <h6>2000</h6>
                  </Grid>
                </Grid>
                <div className="whitepart">
                  <div className="col">
                    <p className="small">CD Balance</p>
                    <h6 className="rIcon">5L</h6>
                  </div>
                  <div className="col">
                    <p className="small">Employees</p>
                    <h6>1,002</h6>
                  </div>
                  <div className="col">
                    <p className="small">Dependents</p>
                    <h6>2000</h6>
                  </div>
                  <p className="note">
                    * CD balance last updated on 01/06/2022
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className="redPolicyCard">
                <Grid container className="employerpolicyDetail">
                  <Grid item xs={8}>
                    <span className="inactive">Active</span>
                    <h5>Group Health Insurance</h5>
                    <p className="mb-4">Care for health plan</p>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <img src="./images/insurerlogo/Appolo.svg" alt="img" />
                  </Grid>
                  <Grid item xs={4}>
                    <p className="small">Sum Insured</p>
                    <h6 className="rIcon">3L, 5L, 10L</h6>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <p className="small">Valid Till</p>
                    <h6>10/12/2026</h6>
                  </Grid>
                  <Grid item xs={4} className="text-right">
                    <p className="small">Dependents</p>
                    <h6>2000</h6>
                  </Grid>
                </Grid>
                <div className="whitepart">
                  <div className="col">
                    <p className="small">CD Balance</p>
                    <h6 className="rIcon">5L</h6>
                  </div>
                  <div className="col">
                    <p className="small">Employees</p>
                    <h6>1,002</h6>
                  </div>
                  <div className="col">
                    <p className="small">Dependents</p>
                    <h6>2000</h6>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <h5 className="mb-0">Recently Added Employees</h5>
            </Grid>
            <Grid item xs={7} className="text-right">
              <Link href="#" underline="none" className="blueBtn edit">
                {" "}
                Manage{" "}
              </Link>
              <Link
                href="#"
                underline="none"
                className="greenBtn mail"
                onClick={() => {
                  setAddInviteStatus(true);
                }}>
                Invite employees to self-enroll{" "}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <TableContainer className="recentAddedEmployee">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Emp. ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Mobile</TableCell>
                      <TableCell>Policies</TableCell>
                      <TableCell>Dependents</TableCell>
                      <TableCell>Staus</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.empid}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell component="th" scope="row">
                          {row.empid}
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.mobile}</TableCell>
                        <TableCell>{row.policies}</TableCell>
                        <TableCell>{row.dependents}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.action}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className="todolist">
          <h4>To Do</h4>
          <Grid>
            <Link href="#" underline="none" className="addpolicy">
              Upload employees
            </Link>
          </Grid>
          <Grid>
            <Link href="#" underline="none" className="familyprofile">
              Complete company profile to share policies.
            </Link>
          </Grid>
          <Grid>
            <Link href="#" underline="none" className="riskscore">
              Find how to improve your Risk Score.
            </Link>
          </Grid>
        </Box>

        <Box className="buyInsurance">
          <h3>Buy Insurance</h3>
          <Grid container spacing={3}>
            <Grid item md={6} lg={4}>
              <button
                className="healthInsurance"
                onClick={() => {
                  setHealthPopupStatus(true);
                }}>
                Health
              </button>
              <Modal open={healthPopupStatus} className="modalWrapper">
                <Box className="modalInner lg-width">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Link
                        href="#"
                        className="close-button"
                        onClick={() => {
                          setHealthPopupStatus(false);
                        }}
                      />
                      <h5 className="popup-heading">Health Insurance</h5>
                    </Grid>
                    <Grid item xs={5} sx={{ textAlign: "center" }}>
                      <p className="popup-subheading">Whom to Insure ?</p>
                      <div className="main-border-ncb">
                        <Button
                          className={ncb == 11 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(11);
                          }}>
                          1 Adult
                        </Button>
                        <Button
                          className={ncb == 22 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(22);
                          }}>
                          2 Adults
                        </Button>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <p className="popup-subheading">Children</p>
                      <div className="main-border-ncb">
                        <Button
                          className={ncb == 0 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(0);
                          }}>
                          0
                        </Button>
                        <Button
                          className={ncb == 1 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(1);
                          }}>
                          1
                        </Button>
                        <Button
                          className={ncb == 2 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(2);
                          }}>
                          2
                        </Button>
                        <Button
                          className={ncb == 3 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(3);
                          }}>
                          3
                        </Button>
                        <Button
                          className={ncb == 4 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(4);
                          }}>
                          4
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                      <h5 className="popup-heading mb-0">
                        Eldest Member’s Details
                      </h5>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={(e) => handleChange(e, "age")}>
                          <MenuItem value={"20"}>20 years</MenuItem>
                          <MenuItem value={"22"}>22 years</MenuItem>
                          <MenuItem value={"24"}>24 years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gender}
                          label="Gender"
                          onChange={(e) => handleChange(e, "gender")}>
                          <MenuItem value={"m"}>Male</MenuItem>
                          <MenuItem value={"f"}>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Pincode"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "center" }}
                      className="ctaBtn">
                      <Button variant="contained" className="submitBtn">
                        Get Quote
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
            <Grid item md={6} lg={4}>
              <button
                className="carInsurance"
                onClick={() => {
                  setCarPopupStatus(true);
                }}>
                Car
              </button>
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
                          />
                        </Grid>
                        <Grid item xs={6} className="inputField mb-5">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Policy Expiry
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={policyExpiry}
                              label="PolicyExpiry"
                              onChange={(e) => handleChange(e, "policyExpiry")}>
                              <MenuItem value={"not"}>
                                Not Yet Expired !
                              </MenuItem>
                              <MenuItem value={"less"}>
                                Less than 90 Days{" "}
                              </MenuItem>
                              <MenuItem value={"more"}>
                                More than 90 Days
                              </MenuItem>
                            </Select>
                          </FormControl>
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
                              setCarFormPageStatus(2);
                            }}>
                            Continue
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          <Link
                            className="md-link"
                            href="#"
                            underline="none"
                            onClick={() => {
                              setCarFormPageStatus(3);
                            }}>
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
                            Car Insurance - DL12BE3454
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
                              value={makemodel}
                              label="Makemodel"
                              onChange={(e) => handleChange(e, "makemodel")}>
                              <MenuItem value={"honda"}>Honda</MenuItem>
                              <MenuItem value={"suzuki"}>Suzuki </MenuItem>
                              <MenuItem value={"tata"}>Tata</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Fuel Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={fuel}
                              label="FuelType"
                              onChange={(e) => handleChange(e, "fuel")}>
                              <MenuItem value={"diesel"}>Diesel</MenuItem>
                              <MenuItem value={"petrol"}>Petrol</MenuItem>
                            </Select>
                          </FormControl>
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
                              onChange={(e) => handleChange(e, "variant")}>
                              <MenuItem value={"v1"}>Nexon</MenuItem>
                              <MenuItem value={"v2"}>City Zxi</MenuItem>
                              <MenuItem value={"v3"}>Brezza</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Previous Insurer
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={insurers}
                              label="Previous Insurer"
                              onChange={(e) => handleChange(e, "insurers")}>
                              <MenuItem value={"hdfc"}>HDFC</MenuItem>
                              <MenuItem value={"bajaj"}>BAJAJ</MenuItem>
                              <MenuItem value={"birla"}>BIRLA </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} className="mb-3 inputField">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                              label="Reg. Date"
                              value={startDate}
                              onChange={(newValue) => {
                                setStartDate(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Claimed
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={claim}
                              label="Claimed"
                              onChange={(e) => handleChange(e, "claim")}>
                              <MenuItem value={"nos"}>No</MenuItem>
                              <MenuItem value={"yess"}>Yes</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} textAlign="center">
                          <h6 className="popup-subheading">No Bonus Claim</h6>
                          <div className="main-border-ncb">
                            <Button
                              className={ncb == 0 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(0);
                              }}>
                              0%
                            </Button>
                            <Button
                              className={ncb == 20 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(20);
                              }}>
                              20%
                            </Button>
                            <Button
                              className={ncb == 25 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(25);
                              }}>
                              25%
                            </Button>
                            <Button
                              className={ncb == 35 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(35);
                              }}>
                              35%
                            </Button>
                            <Button
                              className={ncb == 50 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(50);
                              }}>
                              50%
                            </Button>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          {/* <Button
                            className="submitBtn"
                            onClick={() => {}}
                          /> */}
                          {/* style={{ textAlign: "center" }}> */}

                          <Button className="submitBtn" onClick={() => {}}>
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
                              value={variant}
                              label="RTO / City Name"
                              onChange={(e) => handleChange(e, "variant")}>
                              <MenuItem value={"v1"}>Nexon</MenuItem>
                              <MenuItem value={"v2"}>City Zxi</MenuItem>
                              <MenuItem value={"v3"}>Brezza</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          <Button
                            variant="contained"
                            className="submitBtn"
                            onClick={() => {
                              setCarFormPageStatus(2);
                            }}>
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
            </Grid>
            <Grid item md={6} lg={4}>
              <button
                className="bikeInsurance"
                onClick={() => {
                  setBikePopupStatus(true);
                }}>
                Bike
              </button>
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
                              setBikeFormPageStatus(1);
                            }}
                          />
                          <h5 className="popup-heading">Bike Insurance</h5>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6} className="mb-5">
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            className="regno"
                            placeholder="DL01AS5552"
                          />
                        </Grid>
                        <Grid item xs={6} className="inputField mb-5">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Policy Expiry
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={policyExpiry}
                              label="PolicyExpiry"
                              onChange={(e) => handleChange(e, "policyExpiry")}>
                              <MenuItem value={"not"}>
                                Not Yet Expired !
                              </MenuItem>
                              <MenuItem value={"less"}>
                                Less than 90 Days{" "}
                              </MenuItem>
                              <MenuItem value={"more"}>
                                More than 90 Days
                              </MenuItem>
                            </Select>
                          </FormControl>
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
                              setBikeFormPageStatus(2);
                            }}>
                            Continue
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          <Link
                            className="md-link"
                            href="#"
                            underline="none"
                            onClick={() => {
                              setBikeFormPageStatus(3);
                            }}>
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
                            onClick={() => setBikeFormPageStatus(1)}
                          />
                          <Link
                            href="#"
                            className="close-button"
                            onClick={() => {
                              setBikePopupStatus(false);
                            }}
                          />
                          <h5 className="popup-heading">
                            Bike Insurance - DL12BE3454
                          </h5>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Make &amp; Model
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={makemodel}
                              label="Makemodel"
                              onChange={(e) => handleChange(e, "makemodel")}>
                              <MenuItem value={"honda"}>Honda</MenuItem>
                              <MenuItem value={"suzuki"}>Suzuki </MenuItem>
                              <MenuItem value={"tata"}>Tata</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Fuel Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={fuel}
                              label="FuelType"
                              onChange={(e) => handleChange(e, "fuel")}>
                              <MenuItem value={"diesel"}>Diesel</MenuItem>
                              <MenuItem value={"petrol"}>Petrol</MenuItem>
                            </Select>
                          </FormControl>
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
                              onChange={(e) => handleChange(e, "variant")}>
                              <MenuItem value={"v1"}>Nexon</MenuItem>
                              <MenuItem value={"v2"}>City Zxi</MenuItem>
                              <MenuItem value={"v3"}>Brezza</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Previous Insurer
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={insurers}
                              label="Previous Insurer"
                              onChange={(e) => handleChange(e, "insurers")}>
                              <MenuItem value={"hdfc"}>HDFC</MenuItem>
                              <MenuItem value={"bajaj"}>BAJAJ</MenuItem>
                              <MenuItem value={"birla"}>BIRLA </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} className="mb-3 inputField">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                              label="Reg. Date"
                              value={startDate}
                              onChange={(newValue) => {
                                setStartDate(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} className="inputField mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Claimed
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={claim}
                              label="Claimed"
                              onChange={(e) => handleChange(e, "claim")}>
                              <MenuItem value={"nos"}>No</MenuItem>
                              <MenuItem value={"yess"}>Yes</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} textAlign="center">
                          <h6 className="popup-subheading">No Bonus Claim</h6>
                          <div className="main-border-ncb">
                            <Button
                              className={ncb == 0 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(0);
                              }}>
                              0%
                            </Button>
                            <Button
                              className={ncb == 20 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(20);
                              }}>
                              20%
                            </Button>
                            <Button
                              className={ncb == 25 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(25);
                              }}>
                              25%
                            </Button>
                            <Button
                              className={ncb == 35 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(35);
                              }}>
                              35%
                            </Button>
                            <Button
                              className={ncb == 50 ? "ncbSelect" : "ncb"}
                              onClick={() => {
                                setNcb(50);
                              }}>
                              50%
                            </Button>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          <Button
                            variant="contained"
                            className="submitBtn"
                            onClick={() => {}}>
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
                              value={variant}
                              label="RTO / City Name"
                              onChange={(e) => handleChange(e, "variant")}>
                              <MenuItem value={"v1"}>Nexon</MenuItem>
                              <MenuItem value={"v2"}>City Zxi</MenuItem>
                              <MenuItem value={"v3"}>Brezza</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="ctaBtn"
                          style={{ textAlign: "center" }}>
                          <Button
                            variant="contained"
                            className="submitBtn"
                            onClick={() => setBikeFormPageStatus(2)}>
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
            </Grid>
            <Grid item md={6} lg={4}>
              <button
                className="termInsurance"
                onClick={() => {
                  setTermPopupStatus(true);
                }}>
                Term
              </button>
              <Modal open={termPopupStatus} className="modalWrapper">
                <Box className="modalInner  md-width">
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
                    <Grid item xs={6} sx={{ textAlign: "center" }}>
                      <p className="popup-subheading">Do you Smoke?</p>
                      <div className="main-border-ncb">
                        <Button
                          className={ncb == 11 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(11);
                          }}>
                          Yes
                        </Button>
                        <Button
                          className={ncb == 22 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(22);
                          }}>
                          No
                        </Button>
                      </div>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "center" }}>
                      <p className="popup-subheading">Gender</p>
                      <div className="main-border-ncb">
                        <Button
                          className={ncb == 0 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(0);
                          }}>
                          Male
                        </Button>
                        <Button
                          className={ncb == 1 ? "ncbSelect" : "ncb"}
                          onClick={() => {
                            setNcb(1);
                          }}>
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
                          value={income}
                          label="Income"
                          onChange={(e) => handleChange(e, "income")}>
                          <MenuItem value={"20"}>20 years</MenuItem>
                          <MenuItem value={"22"}>22 years</MenuItem>
                          <MenuItem value={"24"}>24 years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={(e) => handleChange(e, "age")}>
                          <MenuItem value={"20"}>20 years</MenuItem>
                          <MenuItem value={"22"}>22 years</MenuItem>
                          <MenuItem value={"24"}>24 years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Pincode"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "center" }}
                      className="ctaBtn">
                      <Button variant="contained" className="submitBtn">
                        Get Quote
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
            <Grid item md={6} lg={4}>
              <button
                className="investmentPlan"
                onClick={() => {
                  setInvestmentPopupStatus(true);
                }}>
                Investment
              </button>
              <Modal open={investmentPopupStatus} className="modalWrapper">
                <Box className="modalInner lg-width">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Link
                        href="#"
                        className="close-button"
                        onClick={() => {
                          setInvestmentPopupStatus(false);
                        }}
                      />
                      <h5 className="popup-heading">Investment Plans</h5>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Want to invest"
                        variant="outlined"
                        value="5000"
                        className="inputField"
                      />
                    </Grid>
                    <Grid item xs={6} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Pay Mode
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={pay}
                          label="Paymode"
                          onChange={(e) => handleChange(e, "pay")}>
                          <MenuItem value={"m"}>Monthly</MenuItem>
                          <MenuItem value={"q"}>Quaterly</MenuItem>
                          <MenuItem value={"y"}>Yearly</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={4} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={(e) => handleChange(e, "age")}>
                          <MenuItem value={"20"}>20 years</MenuItem>
                          <MenuItem value={"22"}>22 years</MenuItem>
                          <MenuItem value={"24"}>24 years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gender}
                          label="Gender"
                          onChange={(e) => handleChange(e, "gender")}>
                          <MenuItem value={"m"}>Male</MenuItem>
                          <MenuItem value={"f"}>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} className="mb-5 inputField">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Pincode"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "center" }}
                      className="ctaBtn">
                      <Button variant="contained" className="submitBtn">
                        Get Quote
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
            <Grid item md={6} lg={4}>
              <button
                className="travelInsurance"
                onClick={() => {
                  setTravelPopupStatus(true);
                }}>
                Travel
              </button>
              <Modal open={travelPopupStatus} className="modalWrapper">
                <Box className="modalInner lg-width">
                  <Grid container spacing={2}>
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
                    <Grid item xs={12} className="inputField">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Where do you want to travel ?"
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={6} className="mb-5 inputField">
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
                    <Grid item xs={6} className="mb-5 inputField">
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
                    <Grid item xs={6} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Plan Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={plan}
                          label="Plan Type"
                          onChange={(e) => handleChange(e, "plan")}>
                          <MenuItem value={"st"}>Single Trip</MenuItem>
                          <MenuItem value={"mt"}>Multi Trip</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Frequency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gender}
                          label="Gender"
                          onChange={(e) => handleChange(e, "gender")}>
                          <MenuItem value={"i"}>Individual/Family</MenuItem>
                          <MenuItem value={"s"}>Student</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} className="mb-5 inputField">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Traveller
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={plan}
                          label="Traveller"
                          onChange={(e) => handleChange(e, "plan")}>
                          <MenuItem value={"st"}>Single Trip</MenuItem>
                          <MenuItem value={"mt"}>Multi Trip</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "center" }}
                      className="ctaBtn">
                      <Button variant="contained" className="submitBtn">
                        Get Quote
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Box>

        <Box className="highlightedTabs">
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Box className="articleSection">
                <span>
                  <h6>Articles</h6>
                  <p>
                    Read our blog to learn about nuances of your insurance
                    policies.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box className="trendingdiscussion leftside">
                <span>
                  <h6>Trending Discussions</h6>
                  <p>
                    Connect, share and explore. Give feedback, discuss and find
                    answers.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box className="initiateclaim">
                <span>
                  <h6>Initiate Claim</h6>
                  <p>
                    Use your policies effectively by initiating claims using EB.
                  </p>
                </span>
              </Box>
            </Grid>
            <Grid item sm={12}>
              <Box className="endorse leftside">
                <span>
                  <h6>Endorsements</h6>
                  <p>
                    Find your Riskscore and how your policies compare against
                    your ideal requirements.
                  </p>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
