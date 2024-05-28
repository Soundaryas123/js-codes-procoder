const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressLabel = document.querySelector(".progress-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const resetAll = document.querySelector("#reset-all");
const resetButtons = document.querySelectorAll(".custom-reset");
const additionalInputField = document.getElementById("additional");
const storedAdditionalWork = localStorage.getItem("additionalWork");
const resetAdditionalButton = document.querySelector("#reset-additional");

let additionalInputTimeout;

const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :D",
  "Amazing! You completed additional work too that isn't in your list!",
];

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: { name: "", completed: false },
  second: { name: "", completed: false },
  third: { name: "", completed: false },
  additional: { name: "", completed: false },
};

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed && goal !== allGoals.additional
).length;
updateProgress();

resetButtons.forEach((resetButton) => {
  resetButton.addEventListener("click", () => {
    const inputField = resetButton.previousElementSibling;
    const inputId = inputField.id;

    inputField.value = "";
    if (allGoals[inputId]) {
      allGoals[inputId].name = "";
      allGoals[inputId].completed = false;
    }

    inputField.parentElement.classList.remove("completed");

    completedGoalsCount = Object.values(allGoals).filter(
      (goal) => goal.completed && goal !== allGoals.additional
    ).length;
    updateProgress();

    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

resetAll.addEventListener("click", () => {
  inputFields.forEach((input) => {
    input.value = "";
    const inputId = input.id;
    if (allGoals[inputId]) {
      allGoals[inputId].name = "";
      allGoals[inputId].completed = false;
    }
    input.parentElement.classList.remove("completed");
  });

  completedGoalsCount = 0;
  updateProgress();

  localStorage.setItem("allGoals", JSON.stringify(allGoals));
});

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const allFieldsFilled = [...inputFields].slice(0, 3).every((input) => {
      return input.value.trim();
    });
    if (allFieldsFilled) {
      checkbox.parentElement.classList.toggle("completed");
      const inputId = checkbox.nextElementSibling.id;
      if (allGoals[inputId]) {
        allGoals[inputId].completed = !allGoals[inputId].completed;
        completedGoalsCount = Object.values(allGoals).filter(
          (goal) => goal.completed && goal !== allGoals.additional
        ).length;
        updateProgress();
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
      }
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;
    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });
  input.addEventListener("input", () => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }
    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    }
  });
});

additionalInputField.addEventListener("input", () => {
  clearTimeout(additionalInputTimeout);
  additionalInputTimeout = setTimeout(() => {
    const additionalWork = additionalInputField.value.trim();
    if (additionalWork) {
      localStorage.setItem("additionalWork", additionalWork);
      progressLabel.innerText = allQuotes[4];
    } else {
      localStorage.removeItem("additionalWork");
      progressLabel.innerText =
        allQuotes[completedGoalsCount] || "Great! Keep going!";
    }
  }, 500);
});

resetAdditionalButton.addEventListener("click", () => {
  additionalInputField.value = "";
  localStorage.removeItem("additionalWork");
  progressLabel.innerText =
    allQuotes[completedGoalsCount] || "Great! Keep going!";
  localStorage.setItem("additionalWork", "");
});

if (storedAdditionalWork) {
  additionalInputField.value = storedAdditionalWork;
  progressLabel.innerText = allQuotes[4];
}

function updateProgress() {
  const totalGoals = 3;
  progressValue.style.width = `${(completedGoalsCount / totalGoals) * 100}%`;
  progressValue.firstElementChild.innerText = `${completedGoalsCount}/${totalGoals} completed`;
  progressLabel.innerText =
    allQuotes[completedGoalsCount] || "Great! Keep going!";
}
