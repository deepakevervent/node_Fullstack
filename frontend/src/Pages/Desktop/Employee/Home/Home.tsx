import React, {useState} from "react";
import {Grid, Link} from "@material-ui/core";
import TabList from "../../../../Components/TabList/TabList";
import Dashboard from "../Dashboard/Dashboard";
import Riskmap from "../Riskmap/Riskmap";
import Policywallet from "../Policywallet/Policywallet";
import Profile from "../Profile/Profile";
import Mydocuments from "../Mydocuments/Mydocuments";
import Claimassistant from "../Claimassistant/Claimassistant";
import Referfriend from "../Referfriend/Referfriend";
import TrendingQuestions from "../TrendingQuestions/TrendingQuestions";
import Support from "../Support/Support";
import Wellness from "../Wellness/Wellness";
import Community from "../Community/Community";
import Setting from "../Setting/Setting";
//import DoctorOnline from "../DoctorOnline/DoctorOnline";
import {
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Box,
} from "@mui/material";
import RepairVehicle from "../RepairVehicle/RepairVehicle";


function Home() {
  const [settingPage, setSettingPage] = useState("settings");
  const [profilePage, setProfilePage] = useState("personal_details");
  const [activePage, setActivePage] = useState("dashboard");

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
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid className="logoCol" item xs>
              <img src="images/eb_logo.svg" />
            </Grid>
            <Grid className="topNavbar" item xs="auto">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="searchInput">
                    <input type="text" placeholder="search here" />
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
            {activePage == "userprofile" ? (
              <div className="subMenu">
                <ul>
                  <li>Profile</li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={
                        profilePage == "personal_details" ? "active" : ""
                      }
                      onClick={() => setProfilePage("personal_details")}
                    >
                      Personal Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={profilePage == "family" ? "active" : ""}
                      onClick={() => setProfilePage("family")}
                    >
                      Family
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={profilePage == "vehicles" ? "active" : ""}
                      onClick={() => setProfilePage("vehicles")}
                    >
                      Vehicles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={profilePage == "house" ? "active" : ""}
                      onClick={() => setProfilePage("house")}
                    >
                      House
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
            {activePage == "setting" ? (
              <div className="subMenu">
                <ul>
                  <li>Settings</li>
                  <li>
                    <Link
                      href="#"
                      underline="none"
                      className={
                        settingPage == "password_change" ? "active" : ""
                      }
                      onClick={() => setSettingPage("password_change")}
                    >
                      Password Change
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
              className={
                activePage == "policywallet"
                  ? "policywallet active"
                  : "policywallet"
              }
              buttonText="Policy Wallet"
              attrname="activePage"
              value={"policywallet"}
              value_update={updateMasterState}
            />
            <TabList
              className={activePage == "riskmap" ? "riskmap active" : "riskmap"}
              buttonText="Riskmap"
              attrname="activePage"
              value={"riskmap"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "userprofile"
                  ? "userprofile active"
                  : "userprofile"
              }
              buttonText="Profile"
              attrname="activePage"
              value={"userprofile"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "mydocument" ? "mydocument active" : "mydocument"
              }
              buttonText="My Documents"
              attrname="activePage"
              value={"mydocument"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "claimassistant"
                  ? "claimassistant active"
                  : "claimassistant"
              }
              buttonText="Claim Assistant"
              attrname="activePage"
              value={"claimassistant"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "referafriend"
                  ? "referafriend active"
                  : "referafriend"
              }
              buttonText="Refer a Friend"
              attrname="activePage"
              value={"referafriend"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "trendingquestions"
                  ? "trendingquestions active"
                  : "trendingquestions"
              }
              buttonText="Trending Discussions"
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
              className={activePage == "support" ? "support active" : "support"}
              buttonText="Support"
              attrname="activePage"
              value={"support"}
              value_update={updateMasterState}
            />
            <TabList
              className={
                activePage == "wellness" ? "wellness active" : "wellness"
              }
              buttonText="Wellness"
              attrname="activePage"
              value={"wellness"}
              value_update={updateMasterState}
            />
            {/* <TabList
              className={
                activePage == "doctoronline"
                  ? "doctoronline active"
                  : "doctoronline"
              }
              buttonText="Doctor Online"
              attrname="activePage"
              value={"doctoronline"}
              value_update={updateMasterState}
            /> */}
            <TabList
              className={
                activePage == "repairvehicle"
                  ? "repairvehicle active"
                  : "repairvehicle"
              }
              buttonText="Repair Vehicle"
              attrname="activePage"
              value={"repairvehicle"}
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
          {activePage == "dashboard" ? (
            <Dashboard value_update={updateMasterState} />
          ) : null}
          {activePage == "policywallet" ? <Policywallet /> : null}
          {activePage == "riskmap" ? <Riskmap /> : null}
          {activePage == "userprofile" ? (
            <Profile pageStatus={profilePage} />
          ) : null}
          {activePage == "mydocument" ? <Mydocuments /> : null}
          {activePage == "claimassistant" ? <Claimassistant /> : null}
          {activePage == "referafriend" ? <Referfriend /> : null}
          {activePage == "trendingquestions" ? <TrendingQuestions /> : null}
          {activePage == "community" ? <Community /> : null}
          {activePage == "support" ? <Support /> : null}
          {activePage == "wellness" ? <Wellness /> : null}
          {/* {activePage == "doctoronline" ? <DoctorOnline /> : null} */}
          {activePage == "repairvehicle" ? <RepairVehicle /> : null}
          {activePage == "setting" ? (
            <Setting pageStatus="change_password" />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
