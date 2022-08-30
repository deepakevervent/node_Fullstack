import React, {useState} from "react";
import "./HomeBroker.scss";
import {Box, Link} from "@material-ui/core";
import TabList from "../../../../Components/TabList/TabList";
import Dashboard from "../Dashboard/Dashboard";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Grid,
} from "@mui/material";
import Profile from "../Profile/Profile";
import Employees from "../Employees/Empolyees";
import Report from "../Report/Report";
import Claimassistant from "../Claimassistant/Claimassistant";
import Endorsement from "../Endorsement/Endorsement";
import TrendingQuestions from "../../Employee/TrendingQuestions/TrendingQuestions";
import Community from "../../Employee/Community/Community";
import Support from "../../Employee/Support/Support";
import Quotes from "../Quotes/Quotes";
import Policies from "../Policies/Policies";
import Clients from "../Clients/Clients";
import Setting from "../Setting/Setting";

import Select, {SelectChangeEvent} from "@mui/material/Select";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

export default function HomeBroker() {
  const [carFormPageStatus, setCarPageStatus] = React.useState(1);
  const [carPopupStatus, setCarPopupStatus] = React.useState(false);

  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [pay, setPaymode] = React.useState("");
  const [income, setIncome] = React.useState("");
  const [plan, setPlan] = React.useState("");
  const [policyExpiry, setPolicyExpiry] = React.useState("");
  const [fuel, setFuelType] = React.useState("");
  const [makemodel, setMakemodel] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [insurers, setInsurers] = React.useState("");
  const [claim, setClaim] = React.useState("");
  const [ncb, setNcb] = React.useState(0);

  const [settingPage, setSettingPage] = useState("password");

  const [activePage, setActivePage] = useState("dashboard");
  // const handleChange = (event: SelectChangeEvent, attrName: string) => {
  //   if (attrName === "gender") {
  //     setGender(event.target.value as string);
  //   } else if (attrName === "age") {
  //     setAge(event.target.value as string);
  //   } else if (attrName === "income") {
  //     setIncome(event.target.value as string);
  //   } else if (attrName === "pay") {
  //     setPaymode(event.target.value as string);
  //   } else if (attrName === "policyExpiry") {
  //     setPolicyExpiry(event.target.value as string);
  //   } else if (attrName === "fuel") {
  //     setFuelType(event.target.value as string);
  //   } else if (attrName === "makemodel") {
  //     setMakemodel(event.target.value as string);
  //   } else if (attrName === "variant") {
  //     setVariant(event.target.value as string);
  //   } else if (attrName === "insurers") {
  //     setInsurers(event.target.value as string);
  //   } else if (attrName === "claim") {
  //     setClaim(event.target.value as string);
  //   }
  // };

  function updateMasterState(attrName: string, value: string) {
    switch (attrName) {
      case "activePage":
        setActivePage(value);
        break;
      default:
        console.log(attrName, value);
        break;
    }
  }

  const [notificationMenuStatus, setNotificationMenuStatus] =
    React.useState<null | HTMLElement>(null);
  const openNotification = Boolean(notificationMenuStatus);
  const [userSignOutStatus, setUserSignOutStatus] =
    React.useState<null | HTMLElement>(null);
  const openSignOut = Boolean(userSignOutStatus);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    attrName: string
  ) => {
    if (attrName == "notificationMenuStatus") {
      setNotificationMenuStatus(event.currentTarget);
    } else if (attrName == "userSignOutStatus") {
      setUserSignOutStatus(event.currentTarget);
    }
  };
  const handleClose = (attrName: string) => {
    if (attrName == "notificationMenuStatus") {
      setNotificationMenuStatus(null);
    } else if (attrName == "userSignOutStatus") {
      setUserSignOutStatus(null);
    }
  };

  return (
    <Box className="dashboardWrapper">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid className="logoCol" item xs>
              <img src="images/eb_logo.svg" />
            </Grid>
            <Grid className="topNavbar" item xs="auto">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="searchInput">
                    <input type="text" placeholder="Search here" />
                  </div>
                </Grid>
                <Grid container justifyContent="flex-end" item xs={6}>
                  {/* <-------Notification Menu Start --------> */}
                  <React.Fragment>
                    <Box className="notificationMenu">
                      <IconButton
                        className="bellIcon"
                        onClick={(e) => {
                          handleClick(e, "notificationMenuStatus");
                        }}
                        aria-controls={
                          openNotification ? "account-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={openNotification ? "true" : undefined}
                      >
                        <span className="number">0</span>
                      </IconButton>
                    </Box>
                    <Menu
                      className="notificationList"
                      anchorEl={notificationMenuStatus}
                      id="account-menu"
                      open={openNotification}
                      onClose={() => handleClose("notificationMenuStatus")}
                      onClick={() => handleClose("notificationMenuStatus")}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{horizontal: "right", vertical: "top"}}
                      anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                    >
                      <MenuItem>
                        <h5>Notifications</h5>
                      </MenuItem>
                      <MenuItem className="listItem">
                        <h6>Health Policy is process</h6>
                        <p>Your health policy has been processed.</p>
                      </MenuItem>
                      <MenuItem className="listItem">
                        <h6>Policy renewal pending</h6>
                        <p>Mr. Ankit your car policy renewal is pending.</p>
                      </MenuItem>
                      <MenuItem className="listItem">
                        <h6>Health policy is process</h6>
                        <p>Your health policy has been processed.</p>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                  {/* <-------Notification Menu End --------> */}
                  {/* <-------Sign Out Menu Start --------> */}
                  <React.Fragment>
                    <Box className="signoutMenu">
                      <IconButton
                        onClick={(e) => handleClick(e, "userSignOutStatus")}
                        aria-controls={
                          userSignOutStatus ? "account-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={userSignOutStatus ? "true" : undefined}
                      ></IconButton>
                    </Box>
                    <Menu
                      anchorEl={userSignOutStatus}
                      id="account-menu"
                      open={openSignOut}
                      onClose={() => handleClose("userSignOutStatus")}
                      onClick={() => handleClose("userSignOutStatus")}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{horizontal: "right", vertical: "top"}}
                      anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                    >
                      <MenuItem>Change Password</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                  {/* <-------Sign Out Menu End --------> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="menuCol" item xs>
          <Box className="menus">
            {activePage == "setting" ? (
              <div className="subMenu">
                <ul>
                  <li>Settings</li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={settingPage == "password" ? "active" : ""}
                      onClick={() => setSettingPage("password")}
                    >
                      Password
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={settingPage == "department" ? "active" : ""}
                      onClick={() => setSettingPage("department")}
                    >
                      Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={settingPage == "location" ? "active" : ""}
                      onClick={() => setSettingPage("location")}
                    >
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={settingPage == "themes" ? "active" : ""}
                      onClick={() => setSettingPage("themes")}
                    >
                      Themes
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
            <TabList
              className={
                activePage == "dashboard" ? "dashboard active" : "dashboard"
              }
              buttonText="Dashboard"
              attrname="activePage"
              value={"dashboard"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "quote" ? "quote active" : "quote"}
              buttonText="Quotes"
              attrname="activePage"
              value={"quote"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "policies" ? "policies active" : "policies"
              }
              buttonText="Policies"
              attrname="activePage"
              value={"policies"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "clients" ? "clients active" : "clients"}
              buttonText="Clients"
              attrname="activePage"
              value={"clients"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "employe" ? "employe active" : "employe"}
              buttonText="Employees"
              attrname="activePage"
              value={"employe"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "endorsement"
                  ? "endorsement active"
                  : "endorsement"
              }
              buttonText="Endorsement"
              attrname="activePage"
              value={"endorsement"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "claimassistant"
                  ? "claimassistant active"
                  : "claimassistant"
              }
              buttonText="Claim"
              attrname="activePage"
              value={"claimassistant"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "trendingquestions"
                  ? "trendingquestions active"
                  : "trendingquestions"
              }
              buttonText="Trending Questions"
              attrname="activePage"
              value={"trendingquestions"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "community" ? "community active" : "community"
              }
              buttonText="Community"
              attrname="activePage"
              value={"community"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "report" ? "report active" : "report"}
              buttonText="Report"
              attrname="activePage"
              value={"report"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "support" ? "support active" : "support"}
              buttonText="Support"
              attrname="activePage"
              value={"support"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "setting" ? "settings active" : "settings"
              }
              buttonText="Setting"
              attrname="activePage"
              value={"setting"}
              value_update={updateMasterState}
            />
          </Box>
        </Grid>

        {/* Main Content Section Start */}
        <Grid className="rightSection" item xs>
          {activePage == "dashboard" ? <Dashboard /> : null}
          {activePage == "quote" ? <Quotes /> : null}
          {activePage == "policies" ? <Policies /> : null}
          {activePage == "clients" ? <Clients /> : null}
          {activePage == "employe" ? <Employees /> : null}
          {activePage == "userprofile" ? <Profile /> : null}
          {activePage == "report" ? <Report /> : null}
          {activePage == "claimassistant" ? <Claimassistant /> : null}
          {activePage == "endorsement" ? <Endorsement /> : null}
          {activePage == "trendingquestions" ? <TrendingQuestions /> : null}
          {activePage == "community" ? <Community /> : null}
          {activePage == "support" ? <Support /> : null}
          {activePage == "profile" ? <Profile /> : null}
          {activePage == "setting" ? (
            <Setting pageStatus={settingPage} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}
