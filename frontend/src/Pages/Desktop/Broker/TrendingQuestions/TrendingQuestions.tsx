import React, { useEffect } from "react";

import { Grid, Link, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Modal } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./TrendingQuestions.scss";

function TrendingQuestions() {
  const [addtrendingQuestions, setTrendingQuestions] = React.useState(false);
 

  // const handleChange = (event: SelectChangeEvent, attrName: string) => {
  //   if (attrName === "policyType") {
  //     setPolicyType(event.target.value as string);
  //   } else if (attrName === "expiry") {
  //     setExpiryStatus(event.target.value as string);
  //   } else if (attrName === "policyname") {
  //     setPolicyName(event.target.value as string);
  //   }
  // };
  var questions_data_origional = [
    {
      logo: "https://devpos.masuraksha.com/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
      username: "Umesh Gemini",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "22, August, 2022",
      upvotes: "2",
      answer_open_status: "false",
      answers: [
        {
          logo: "/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
          username: "Rahul Kumar",
          date: "02, August, 2022",
          answer: "No, Baleno is better for city.",
          upvotes: "10000",
        },
        {
          logo: "/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
          username: "Rahul Kumar",
          date: "02, August, 2022",
          answer: "No, Baleno is better for city.",
          upvotes: "10000",
        },
        {
          logo: "/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
          username: "Rahul Kumar",
          date: "02, August, 2022",
          answer: "No, Baleno is better for city.",
          upvotes: "10000",
        },
      ],
    },
    {
      logo: "https://devpos.masuraksha.com/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
      username: "Umesh Gemini",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "22, August, 2022",
      upvotes: "2",
      answer_open_status: "false",
      answers: [
        {
          logo: "/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
          username: "Rahul Kumar",
          date: "02, August, 2022",
          answer: "No, Baleno is better for city.",
          upvotes: "10000",
        },
      ],
    },
    {
      logo: "https://devpos.masuraksha.com/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
      username: "Umesh Gemini",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "22, August, 2022",
      upvotes: "2",
      answer_open_status: "false",
      answers: [
        {
          logo: "/agent_documents/8708430006_Profile_Image_2022_04_14_16_51_17.png",
          username: "Rahul Kumar",
          date: "02, August, 2022",
          answer: "No, Baleno is better for city.",
          upvotes: "10000",
        },
      ],
    },
  ];
  const [questions, setQuestions] = React.useState(questions_data_origional);

  const answer_open_status_changes = (index: number) => {
    var questions_data = questions;

    console.log(questions[index].answer_open_status);
    questions_data[index].answer_open_status =
      questions_data[index].answer_open_status == "true" ? "false" : "true";

    console.log(questions_data[index].answer_open_status);
    setQuestions(questions_data);
    console.log(questions[index].answer_open_status);
  };

  return (
    <Grid container spacing={3} className="trendingQuestions">
      <Grid item xs={6}>
        <h3 className="mb-0">Trending Questions </h3>
      </Grid>
      <Grid item xs={6} className="text-right">
        <Link
          href="#"
          className="greenBtn addfile"
          underline="none"
          onClick={() => {
            setTrendingQuestions(true);
          }}>
          Post a query
        </Link>
        <Modal open={addtrendingQuestions} className="modalWrapper">
          <Box className="modalInner">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Link
                  href="#"
                  className="close-button"
                  onClick={() => {
                    setTrendingQuestions(false);
                  }}
                />
                <h5 className="popup-heading">What’s on your mind</h5>
              </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Write your question here"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                className="ctaBtn"
                style={{ textAlign: "center" }}>
                <Button variant="contained" className="submitBtn">
                  Post Query
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid>

      <Grid item xs={12}>
        {questions.map((data, index) => {
          return (
            <Box className="questionPost">
              <Grid container spacing={2}>
                <Grid item xs={12} className="postTitle">
                  <div className="userIcon">
                    <img src={data.logo} />
                  </div>
                  <div className="userName">
                    <h6>{data.username}</h6>
                    <p>{data.date}</p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <p className="question">{data.question}</p>
                </Grid>
                <Grid item xs={12} className="greySection">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Link href="#" className="upvote active" underline="none">
                        {data.upvotes} upvotes
                      </Link>
                      <Link
                        href="#"
                        className="answer"
                        underline="none"
                        onClick={() => {
                          answer_open_status_changes(index);
                        }}>
                        {data.answers.length} answers
                      </Link>
                    </Grid>
                  </Grid>
                  {data.answer_open_status === "false" ? null : (
                    <Box className="postGroup">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        placeholder="Add answer"
                      />
                      <Button>Post</Button>
                    </Box>
                  )}
                  {data.answer_open_status == "false"
                    ? null
                    : data.answers.map((dataAns, indexAns) => {
                        return (
                          <div>
                            <Grid container spacing={2} className="innerPost">
                              <Grid item xs={12} className="postTitle">
                                <div className="userIcon">
                                  <img src={dataAns.logo} />
                                </div>
                                <div className="userName">
                                  <h6>{dataAns.username}</h6>
                                  <p>{dataAns.date}</p>
                                </div>
                              </Grid>
                              <Grid item xs={12}>
                                <p className="question">{dataAns.answer}</p>
                              </Grid>
                              <Grid item xs={12}>
                                <Link
                                  href="#"
                                  className="upvote active"
                                  underline="none">
                                  {dataAns.upvotes} upvotes
                                </Link>
                              </Grid>
                            </Grid>
                          </div>
                        );
                      })}
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default TrendingQuestions;
