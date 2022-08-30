import {Grid} from "@mui/material";
import React, {useEffect} from "react";
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
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

function Report() {
  const [downloadReportStatus, setDownloadReportStatus] = React.useState(false);
  const [emailReportStatus, setEmailReportStatus] = React.useState(false);
  const [emailReportPage, setEmailReportPage] = React.useState(1);
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
    {field: "id", headerName: "Emp. ID", width: 70},
    {field: "reportName", headerName: "Report name", width: 800},
    {field: "lastGenerated", headerName: "Last Generated", width: 800},
  ];

  const rows = [
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
    {
      id: "1",
      reportName: "Endosment Request",
      lastGenerated: "01/01/2022",
    },
  ];
  return (
    <Grid container spacing={3} className="claimAssistant">
      <Modal open={emailReportStatus} className="modalWrapper">
        <div>
          <Box className="modalInner">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Link
                  href="#"
                  className="close-button"
                  onClick={() => {
                    setEmailReportStatus(false);
                  }}
                />
              </Grid>
            </Grid>
            {emailReportPage == 1 ? (
              <Grid container spacing={0} textAlign="center">
                <Grid item xs={12} className="mb-5">
                  <p className="popup-heading">Enter your email</p>
                </Grid>
                <Grid item xs={12} className="mb-5">
                  <h5>space for date range</h5>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Enter Email"
                    variant="outlined"
                    className="textarea"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{textAlign: "center"}}
                  className="ctaBtn"
                >
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={() => {
                      setEmailReportPage(2);
                    }}
                  >
                    Send Here
                  </Button>
                </Grid>
              </Grid>
            ) : null}
            {emailReportPage == 2 ? (
              <Grid container spacing={0} textAlign="center">
                <Grid item xs={12} className="mb-5">
                  <h1>Img</h1>
                </Grid>

                <Grid item xs={12} className="mb-5">
                  <p className="popup-heading">Email has been sent to</p>

                  <Link href="#" underline="none">
                    testemail@testmail.com
                  </Link>
                </Grid>
              </Grid>
            ) : null}
          </Box>
        </div>
      </Modal>
      <Modal open={downloadReportStatus} className="modalWrapper">
        <Box className="modalInner">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link
                href="#"
                className="close-button"
                onClick={() => setDownloadReportStatus(false)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={0} textAlign="center">
            <Grid item xs={12} className="mb-5">
              <h1>space for date range</h1>
            </Grid>

            <Grid item xs={12} style={{textAlign: "center"}} className="ctaBtn">
              <Button
                variant="contained"
                className="submitBtn"
                onClick={() => setDownloadReportStatus(false)}
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid item xs={6}>
        <h3 className="mb-0">Report</h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          underline="none"
          className="blueBtn download"
          onClick={() => setDownloadReportStatus(true)}
        >
          Download
        </Link>
        <Link
          href="#"
          underline="none"
          className="greenBtn mail"
          onClick={() => {
            setEmailReportStatus(true);
          }}
        >
          Email
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div style={{height: 500, width: "100%"}}>
          <DataGrid
          className="datagridTable"
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
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
                style={{textAlign: "center"}}
              >
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

export default Report;
