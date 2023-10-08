// HTML elements
const titleEl = document.querySelector("#title");
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit-button");

// poll object
const pollObject = {
  question: "What's the best programming language?",
  options: ["0: Javascript", "1: Python", "2: C++", "3: Kotlin"],
  answer: [0, 0, 0, 0],

  registerAnswer() {
    if (userInput.value === "") {
      // modal and locking the program
      this.showModal();
      return null;
    }
    let userAnswer = Number(userInput.value);
    console.log(userAnswer);
    // removing possible options that are not into the poll
    if (
      userAnswer != 0 &&
      userAnswer != 1 &&
      userAnswer != 2 &&
      userAnswer != 3
    ) {
      //modal
      this.showModal();
    } else {
      // attributing the answer into the array
      userInput.value = "";
      this.answer[userAnswer]++;

      // attributing the answer into the interface
      document.querySelector(`#option-${userAnswer}-A`).textContent =
        this.answer[userAnswer];
      console.log(this.answer);
    }
  },

  showModal() {
    console.log("test");
    // -=-=-=-=-=-=-=-=-=-=- come back to make the modal! -=-=-=-=-=-=-=-=-=-=-=-=-
  },
};

submitButton.addEventListener(
  "click",
  pollObject.registerAnswer.bind(pollObject)
);
