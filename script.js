const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const adviceFor = adviceData.slip.advice;

      adviceId.textContent = adviceNum;
      adviceText.innerHTML = `<p>${adviceFor}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
