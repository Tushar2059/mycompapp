import React, { Fragment } from "react";
import questions from "../../questions.json";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import backgroundImg from "../../Img/backg.png";
import isEmpty from "../../utils/is-empty";
import correctNotification from "../../assets/audio/correct-answer.mp3";
import wrongNotification from "../../assets/audio/wrong-answer.mp3";
import buttonSound from "../../assets/audio/button-sound.mp3";
// import { withRouter } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Navigate } from "react-router";
import classNames from "classnames";
import Confetti from "react-confetti";
//import Draggable from 'react-draggable';
import "../../styles/components/_play.css";
//import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
//import "../../../node_modules/materialize-css/dist/js/materialize.min.js"
import "../../../node_modules/@mdi/font/css/materialdesignicons.min.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, Button } from "react-bootstrap";
import parse from 'html-react-parser';
import Headcomp from "../MajorComponents/Headcomp";

class Play extends React.Component {
  //let navigate = useNavigate();

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      explanation: "",
      noOfAttempts: 1,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      numberOfQuestionIndex: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: false,
      time: {},
      redirect: false,
      questionTwiceWrongAttempt: false,
      displayExplanationFlag: false,
      seconds: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      congratulationsMessage: false,
      dragContents: "",
      attemptedQueStatus: [],
      showModal: false,
      optionChoosen: "",
      changeBackColor: [false, false, false, false],
    };
    this.interval = null;
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;

    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];

      const answer = currentQuestion.answer;

      //console.log("Although ..... Get done ... !!", this.state.currentQuestionIndex);
      //console.log("Although ..... Get done ... !!", this.state.attemptedQueStatus[this.state.currentQuestionIndex]);

      if (this.state.attemptedQueStatus[this.state.currentQuestionIndex]) {
        this.setState(
          {
            currentQuestion: currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion,
            numberOfQuestions: questions.length,
            answer: answer,
            noOfAttempts: 1,
            questionTwiceWrongAttempt: true,
            displayExplanationFlag: false,
            congratulationsMessage: false,
            optionChoosen: "",
            changeBackColor: [false, false, false, false]
          },
          () => {
            this.handleDisableButton();
          }
        );

        // console.log(
        //   "Although ..... Get done ... !!",
        //   this.state.attemptedQueStatus[this.state.currentQuestionIndex]
        // );
      } else {
        this.setState(
          {
            currentQuestion: currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion,
            numberOfQuestions: questions.length,
            answer: answer,
            noOfAttempts: 1,
            questionTwiceWrongAttempt: false,
            displayExplanationFlag: false,
            congratulationsMessage: false,
            optionChoosen: "",
            changeBackColor: [false, false, false, false]
          },
          () => {
            this.handleDisableButton();
          }
        );

        console.log(
          "Question not attempted .... !!",
          this.state.attemptedQueStatus[this.state.currentQuestionIndex]
        );
      }
    }
  };

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion } =
      this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    this.startTimer();
  }

  setQuestionAttemptState = () => {
    let tempAttemptedQues = [...this.state.attemptedQueStatus]; // copying the old datas array
    tempAttemptedQues[this.state.currentQuestionIndex] = true; // replace e.target.value with whatever you want to change it to
    console.log("tempAttemptedQues", tempAttemptedQues);
    this.setState({
      attemptedQueStatus: tempAttemptedQues,
    });
  };

  updateBackColorParams = (targetId) =>{
      let changeBackColorOptions = [...this.state.changeBackColor];

      for(let i=0; i < changeBackColorOptions.length; i++){
          if(targetId === i){   changeBackColorOptions[i] = true;
          }else{    changeBackColorOptions[i] = false;      }
      }
      this.setState({   changeBackColor : changeBackColorOptions, });
  }

  handleOptionClick = (e) => {
    e.preventDefault();
    this.setState({ optionChoosen : e.target.innerHTML.toLowerCase() });

    switch (e.target.id) {
      case "option-a":
        this.updateBackColorParams(0);
        break;
      case "option-b":
        this.updateBackColorParams(1);
        break;
      case "option-c":
        this.updateBackColorParams(2);
        break;
      case "option-d":
        this.updateBackColorParams(3);
        break;        
      default:
        break;
    }
  }

  handleSubmitClick = (e) => {
    // assign attempted question.....
    this.setQuestionAttemptState();
    // assign attempted question.....

    //if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
    if (this.state.optionChoosen.toLowerCase().trim() === this.state.answer.toLowerCase().trim()) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 200);
      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 200);
      const { currentQuestion } = this.state;

      navigator.vibrate(1000); // vibrate screen on wrong answer

      toast.error("Wrong Answer !!!", {
        position: "top-center",
        //autoClose: 1700,
      });

      //display alert message ... !!!
      //setTimeout(()=>{this.onShowAlert();}, 400);
      setTimeout(()=>{ this.setState({ showModal: true }); }, 400);

      this.setState({ noOfAttempts: this.state.noOfAttempts + 1 });
      if (currentQuestion.noOfAttempts === this.state.noOfAttempts) {
        this.wrongAnswer();
      }

    }
  };

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        //this.playButtonSound();
        this.handleNextButtonClick();
        break;
      case "previous-button":
        //this.playButtonSound();
        this.handlePreviousButtonClick();
        break;
      case "exit-button":
        this.handleQuitButtonClick();
        break;
      default:
        break;
    }
  };

  playButtonSound = () => {
    document.getElementById("button-sound").play();
  };

  handleNextButtonClick = () => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
          dragContents: "",
          changeBackColor: [false, false, false, false]
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
          dragContents: "",
          changeBackColor: [false, false, false, false],
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    this.playButtonSound();
    var confirmMssg = window.confirm("Are you sure, you wont to quit ?");
    if (confirmMssg) {
      this.setState({ redirect: true });
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="/letusverify" />;
    }
  };

  disableCongratulationMessage = () => {
    setInterval(() => {
      this.setState({ congratulationsMessage: false });
    }, 5000);
  };

  correctAnswer = () => {
    // M.toast({
    //     html: 'Correct Answer !!',
    //     classes: 'toast-valid',
    //     displayLength: 1500
    // });

    toast.success("Correct Answer !!!", {
      position: "top-center",
      //autoClose: 1700,
    });

    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        //currentQuestionIndex: prevState.currentQuestionIndex + 1,
        //numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
        congratulationsMessage: true,
        questionTwiceWrongAttempt: !prevState.questionTwiceWrongAttempt,
      }),
      () => {
        this.disableCongratulationMessage();
        //this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    );
  };

  wrongAnswer = () => {
    //navigator.vibrate(1000);
    /*M.toast({
            html: 'Wrong Answer !!',
            classes: 'toast-invalid',
            displayLength: 1500
        });*/

    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        //currentQuestionIndex: prevState.currentQuestionIndex + 1,
        //numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
        questionTwiceWrongAttempt: !prevState.questionTwiceWrongAttempt,
        displayExplanationFlag: true,
      }),
      () => {
        console.log("Please go through the explanation ... !!");
        //this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    );
  };

  handleHints = () => {
    alert("Hints ... Clicked ... !!");
  };

  startTimer = () => {
    const countDownTime = Date.now();
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = now - countDownTime;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        time: {
          minutes: minutes,
          seconds: seconds,
        },
      });
    }, 1000);
  };

  handleDisableButton = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true,
      });
    } else {
      this.setState({
        previousButtonDisabled: false,
      });
    }

    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
      this.setState({
        nextButtonDisabled: false,
      });
    }
  };

  // Handle fill in the bank
  handleFillInBlankDrag = (e) => {
    this.setQuestionAttemptState();

    if (
      e.dataTransfer.getData("drag-item").toLowerCase() ===
      this.state.answer.toLowerCase()
    ) {
      //if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 200);
      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 200);
      const { currentQuestion } = this.state;

      navigator.vibrate(1000); // vibrate screen on wrong answer
      // Display Toast Massage
      // M.toast({
      //     html: 'Wrong Answer !!',
      //     classes: 'toast-invalid',
      //     displayLength: 1500
      // });

      toast.error("Wrong Answer !!!", {
        position: "top-center",
        //autoClose: 1700,
      });

      //display alert message ... !!!
      //setTimeout(()=>{this.onShowAlert();}, 400);
      setTimeout(()=>{ this.setState({ showModal: true }); }, 400);

      this.setState({ noOfAttempts: this.state.noOfAttempts + 1 });
      if (currentQuestion.noOfAttempts === this.state.noOfAttempts) {
        this.wrongAnswer();
      }
    }
  };

  dragStart = (e) => {
    //console.log(e.target.innerHTML);
    e.dataTransfer.setData("drag-item", e.target.innerHTML);
  };

  dragEnter = (e) => {
    console.log("drag enter ... !!!" + e.target.innerHTML);
  };

  drop = (ev) => {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("drag-item");
    //console.log("data ... !!!" + data);
    //console.log("In drop ... !!!" + data);
    this.setState({
      dragContents: data,
    });
    this.handleFillInBlankDrag(ev);
  };

  dragOver = (ev) => {
    ev.preventDefault();
  };

  onShowAlert = () => {
    const explantion = this.state.currentQuestion.explanation;
    console.log(this.state.currentQuestion.noOfAttempts + " " + this.state.noOfAttempts);

    if(this.state.noOfAttempts > this.state.currentQuestion.noOfAttempts){
        alert("Explanation : " + "\n\n" + explantion + "\n\n" + "You Reached Maximum Attempts !!" 
        + "\n\n" + "Please Attempt Next Question");
    }else{
        alert("Explanation : " + "\n\n" + explantion + "\n\n" + "Please Try Again !!");
    }
  }

  handleClose = () => { this.setState({ showModal:false }); };
  handleShow = () => { this.setState({ showModal: true }); console.log(" Clicked Modal ... !!! " + this.state.showModal);};

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      questionTwiceWrongAttempt,
      time,
      congratulationsMessage,
      score,
    } = this.state;

    return (

      <div
        className=""
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Headcomp sidebarvisible="hidden" />
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "90%" }}
        >
          <div
            className="col-11 bg-light shadow-lg"
            style={{
              height: "94%",
              borderRadius: "20px",
            }}
          >
            <Fragment>
              <title>Welcome to Quiz</title>
              <Fragment>
                <audio id="correct-sound" src={correctNotification}></audio>
                <audio id="wrong-sound" src={wrongNotification}></audio>
                <audio id="button-sound" src={buttonSound}></audio>
              </Fragment>

              {/*<p id="drag1" draggable="true" onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)}>
                This is a draggable paragraph. Drag this element into the rectangle.
            </p>*/}
              {/*<div id="div1" onDrop={this.drop} onDragOver={this.dragOver} onDragEnter={this.dragEnter}>Drop here {this.state.dragContents} </div>*/}

              <div className="questions">
                {/* <h4 className="quizTitle">Quiz Mode</h4> */}
                <div className="lifeline-container fw-bold">
                  <p>
                    <span>Questions Attempted</span>
                    <span className="lifeline"></span>
                  </p>
                  {/*<p><span className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className="lifeline">2</span></p>*/}
                  {/*<p><span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon" onClick={this.handleHints} ></span><span className="lifeline">5</span></p>*/}
                  <p>
                    <span>Score : </span>
                    <span>{score}</span>
                  </p>
                </div>
                <div className="lifeline-container text-success fw-bold">
                  <p>
                    <span>
                      {currentQuestionIndex + 1} of {numberOfQuestions}
                    </span>
                  </p>
                  <p>
                    <span>
                      {time.minutes}:{time.seconds}
                    </span>
                    <span className="mdi mdi-clock-outline mdi-24px"></span>
                  </p>
                </div>

                {currentQuestion.questionType === "selectOptions" ? (
                  <Fragment>
                    <h5 className="questionTitle">
                      {" "}
                      {parse(currentQuestion.question)}{" "}
                      {/*<MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />*/}
                    </h5>
                    <div className="options-container">
                      <button 
                        onClick={this.handleOptionClick}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                        id="option-a"
                        style={(this.state.changeBackColor[0]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}}

                      >     A. {parse(currentQuestion.optionA)}     </button>

                      <button
                        onClick={this.handleOptionClick}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                        id="option-c"
                        style={(this.state.changeBackColor[2]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}}
                      >     C. {parse(currentQuestion.optionC)}     </button>

                      {/* <p onClick={this.handleOptionClick} aria-disabled={true} className="option">{currentQuestion.optionA}</p>
                            <p onClick={this.handleOptionClick} disabled={true} className="option">{currentQuestion.optionB}</p> */}
                    </div>
                    <div className="options-container">
                      <button
                        onClick={this.handleOptionClick}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                        id="option-b"
                        style={(this.state.changeBackColor[1]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}}
                      >     B. {parse(currentQuestion.optionB)}     </button>

                      <button
                        onClick={this.handleOptionClick}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                        id="option-d"
                        style={(this.state.changeBackColor[3]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}}
                      >     D. {parse(currentQuestion.optionD)}     </button>
                      {/*<p onClick={this.handleOptionClick} disabled={true} className="option">{currentQuestion.optionC}</p>
                            <p onClick={this.handleOptionClick} disabled={true} className="option">{currentQuestion.optionD}</p>*/}
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <h5 className="questionTitle ">
                      <div
                        id="div1"
                        onDrop={this.drop}
                        onDragOver={this.dragOver}
                        onDragEnter={this.dragEnter}
                      >
                        {" "}{parse(""+currentQuestion.question)} {this.state.dragContents}{" "}
                      </div>
                    </h5>
                    <div className="options-container ">
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        A. {parse(" " + currentQuestion.optionA)}
                      </button>
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        C. {parse(" " + currentQuestion.optionB)}
                      </button>
                      {/*<button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionA}</button>
                            <button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionB}</button>*/}
                    </div>
                    <div className="options-container ">
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        B. {parse(" " + currentQuestion.optionC)}
                      </button>
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        D. {parse(" " + currentQuestion.optionD)}
                      </button>
                      {/*<button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionC}</button>
                            <button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionD}</button>*/}
                    </div>
                  </Fragment>
                )}

                <div className="button-container ">
                  <button
                    className={classNames("", { disable: this.state.previousButtonDisabled, })}
                    id="previous-button"
                    onClick={this.handleButtonClick}
                  >
                    <FaAngleDoubleLeft size={11} />
                    Previous
                  </button>

                  <button
                     onClick={this.handleSubmitClick}
                     disabled={questionTwiceWrongAttempt ? true : false}
                  >
                        Submit
                  </button>

                  <button
                    className={classNames("", {
                      disable: this.state.nextButtonDisabled,
                    })}
                    id="next-button"
                    onClick={this.handleButtonClick}
                  >
                    Next
                    <FaAngleDoubleRight size={11} />
                  </button>
                  {currentQuestionIndex+1 === numberOfQuestions ? <button id="exit-button" onClick={this.handleButtonClick}>Restart</button> : null}
                  {/*<button id="exit-button" onClick={this.handleButtonClick}>Quit</button>*/}
                </div>
               {/* <div className="explanation-container ">
                  {this.state.displayExplanationFlag ? (
                    <Fragment>
                      <h4> Explanation: </h4>
                      <p> {currentQuestion.explanation} </p>
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </div> */}
                {this.renderRedirect()}

                <div className="congratulations-container">
                  {congratulationsMessage ? (
                    <Fragment>
                      <Confetti
                        className="canvas"
                        numberOfPieces={300}
                        gravity={0.15}
                      />
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </div>
              </div>
              <ToastContainer />
            </Fragment>
          </div>
        </div>

{/*<Button variant="primary" onClick={this.handleShow}>
  Click Modal
  </Button>*/}

<Modal show={this.state.showModal ? true : false} onHide={this.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Explanation</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>{parse("" + currentQuestion.explanation)}</p>

    { this.state.noOfAttempts > this.state.currentQuestion.noOfAttempts ? 
        <div className="DisplayExplanationMssg">
          <p>You Reached Maximum Attempts !!</p>
          <p>Please Attempt Next Question</p>
        </div> :
        <div className="DisplayExplanationMssg">
          <p>Please Try Again !! !!</p>
        </div>
    }
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose}>
      Close
    </Button>
    {/*<Button variant="primary" onClick={this.handleClose}>
        Save Changes
    </Button>*/}
  </Modal.Footer>
</Modal>

      </div>
    );
  }
}

export default Play;