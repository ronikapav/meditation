let time = document.getElementById("time");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let seti = undefined;
let mm = "05";
let ss = "00";

startButton.addEventListener("click", start); 
function start() {
    document.querySelector("#myVideo").play();
    if (startButton.innerHTML === "НАЧАТЬ") {
      document.querySelector("#player").play();
      startButton.innerHTML = "ПАУЗА";
      mm = minute.value;
      ss = second.value;
      if (minute.value === "") minute.value = "00";
      if (second.value === "") second.value = "00";
      minute.setAttribute("disabled", true);
      second.setAttribute("disabled", true);
      seti = setInterval(() => {
        if (second.value > 0) {
          second.value -= 1;
          if (second.value < 10 && second.value >= 0) {
            second.value = "0" + second.value;
          }
        }
        else if (minute.value > 0) {
          second.value = "59";
          minute.value -= 1;
          if (minute.value < 10 && minute.value >= 0) {
            minute.value = "0" + minute.value;
          }
        }
        else {
          clearInterval(seti);
          document.body.style.backgroundImage = "linear-gradient(to top left, #c0392b, #e74c3c , #9b59b6)";
          setTimeout(() => {
            Swal.fire({
                title: 'ВРЕМЯ ИСТЕКЛО',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://media.tenor.com/D7iO2z0TM8sAAAAi/yoga-relax.gif")
                  left top
                  no-repeat
                `
              });
              document.querySelector("#player").pause();
            res();
          }, 100);
        }
      }, 1000);
    }
    else {
      minute.removeAttribute("disabled");
      second.removeAttribute("disabled");
      startButton.innerHTML = "НАЧАТЬ";
      clearInterval(seti);
      document.querySelector("#player").pause();
    }
  };
  
  resetButton.addEventListener("click", res);

function res() {
  clearInterval(seti);
  minute.value = mm;
  second.value = ss;
  minute.removeAttribute("disabled");
  second.removeAttribute("disabled");
  startButton.innerHTML = "НАЧАТЬ";
  document.querySelector("#player").load();
  document.body.style.backgroundImage = "linear-gradient(to top left, #db3434, #6159b6)";
}

const home = document.querySelector('#home');
home.addEventListener('click', () => {
  document.location.assign('http://127.0.0.1:5500/index.html');
})