const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressLabel = document.querySelector(".progress-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const resetAll = document.querySelector("#reset-all");
const resetButtons = document.querySelectorAll(".custom-reset");

const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :D",
];
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false,
  },
  second: {
    name: "",
    completed: false,
  },
  third: {
    name: "",
    completed: false,
  },
};
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
progressLabel.innerText = allQuotes[completedGoalsCount];

resetButtons.forEach((resetButton) => {
  resetButton.addEventListener("click", () => {
    const inputField = resetButton.previousElementSibling;
    const inputId = inputField.id;

    inputField.value = "";

    allGoals[inputId].name = "";

    allGoals[inputId].completed = false;

    inputField.parentElement.classList.remove("completed");

    completedGoalsCount = Object.values(allGoals).filter(
      (goal) => goal.completed
    ).length;
    progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
    progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
    progressLabel.innerText = allQuotes[completedGoalsCount];

    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

resetAll.addEventListener("click", () => {
  inputFields.forEach((input) => {
    input.value = "";
    const inputId = input.id;
    allGoals[inputId].name = "";
    allGoals[inputId].completed = false;
    input.parentElement.classList.remove("completed");
  });

  completedGoalsCount = 0;
  progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
  progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
  progressLabel.innerText = allQuotes[completedGoalsCount];

  localStorage.removeItem("allGoals");
});

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allFieldsFilled = [...inputFields].every((input) => {
      return input.value.trim();
    });
    if (allFieldsFilled) {
      checkbox.parentElement.classList.toggle("completed");
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
      progressLabel.innerText = allQuotes[completedGoalsCount];
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
    // input.parentElement.classList.remove("completed"); //alternate to getting off the striked of input
  });
  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }

    allGoals[input.id].name = input.value;
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
