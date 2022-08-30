import { Grid, Link } from "@material-ui/core";
import React, { Component } from "react";
import "./Mydocuments.scss";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StringDecoder } from "string_decoder";

function Mydocuments() {
  const [gender, setGender] = React.useState("");
  const [maritalStatus, setMaritalStatus] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [selectDocument, setSelectDocument] = React.useState("");
  const [age, setAge] = React.useState("");
  const [kycDocumentStatus, setKycDocumentStatus] = React.useState("kyc");

  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent, attrName: string) => {
    if (attrName === "gender") {
      setGender(event.target.value as string);
    } else if (attrName === "maritalStatus") {
      setMaritalStatus(event.target.value as string);
    } else if (attrName === "relation") {
      setRelation(event.target.value as string);
    } else if (attrName === "age") {
      setAge(event.target.value as string);
    } else if (attrName === "selectDocument") {
      setSelectDocument(event.target.value as string);
    }
  };
  return (
    <Grid container spacing={3} className="mydocuments">
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
              <h5 className="popup-heading">Upload Documents</h5>
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
                  KYC Document
                </Button>
                <Button
                  className={kycDocumentStatus === "policy" ? "selection" : ""}
                  style={{ color: "#000" }}
                  onClick={() => {
                    setKycDocumentStatus("policy");
                  }}>
                  Policy Document
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center" className="mb-3">
            {kycDocumentStatus == "policy" ? (
              <Grid item xs={12} className="inputField">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Policy Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={relation}
                    label="Relationship"
                    onChange={(e) => handleChange(e, "relation")}>
                    <MenuItem value={"b"}>Brother</MenuItem>
                    <MenuItem value={"s"}>Sister</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : (
              <Grid item xs={12} className="inputField">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Document
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectDocument}
                    label="selectDocument"
                    onChange={(e) => handleChange(e, "selectDocument")}>
                    <MenuItem value={"aadhar"}>Aadhar Card</MenuItem>
                    <MenuItem value={"pan"}>PAN</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
            {kycDocumentStatus == "policy" ? (
              <Grid item xs={12} className="inputField">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Insurer
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={relation}
                    label="Relationship"
                    onChange={(e) => handleChange(e, "relation")}>
                    <MenuItem value={"i"}>ICICI</MenuItem>
                    <MenuItem value={"h"}>HDFC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : null}
          </Grid>
          <Grid container spacing={0} className="mb-4">
            <Grid item xs={10} className="inputField uploadFile">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Upload Document"
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
              <Button className="submitBtn">
                Submit Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid item xs={6}>
        <h3 className="mb-0">My Documents</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          className="blueBtn upload"
          href="#"
          underline="none"
          onClick={() => {
            setOpen(true);
          }}>
          Upload Documents
        </Link>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h5 className="font-medium mb-0">KYC Documents</h5>
          </Grid>
          <Grid item xs={12} className="allDocs">
            <div className="docCard">
              <img src="./images/doc_check_icon.svg" height="30px" alt="doc" />
              <p>Aadhar</p>
              <div className="icons">
                <Link href="#" underline="none">
                  <VisibilityOutlinedIcon sx={{ color: "#000000" }} />
                </Link>
                <Link href="#" underline="none">
                  <FileDownloadOutlinedIcon sx={{ color: "#6B62DC" }} />
                </Link>
                <Link href="#" underline="none">
                  <DeleteForeverOutlinedIcon sx={{ color: "#EB5757" }} />
                </Link>
              </div>
            </div>
            <div className="docCard">
              <img src="./images/doc_check_icon.svg" height="30px" alt="doc" />
              <p>PAN</p>
              <div className="icons">
                <Link href="#" underline="none">
                  <VisibilityOutlinedIcon sx={{ color: "#000000" }} />
                </Link>
                <Link href="#" underline="none">
                  <FileDownloadOutlinedIcon sx={{ color: "#6B62DC" }} />
                </Link>
                <Link href="#" underline="none">
                  <DeleteForeverOutlinedIcon sx={{ color: "#EB5757" }} />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h5 className="font-medium mb-0">My Policy Documents</h5>
          </Grid>
          <Grid container alignItems="center" item xs={12}>
            <ErrorIcon sx={{ color: "#EB5757" }} /> &nbsp;&nbsp;{" "}
            <p className="fontMontserrat font-sm font-medium">No policy document uploaded.</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Mydocuments;
