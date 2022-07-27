
var colors = ['#bb0000','#000000'];


const sound = document.getElementById("sound");
const triggers = document.querySelectorAll(".js-confetti");

function frame(end) {
  document.getElementById('pop-up-text').style.display = 'flex'
  const worker = () => {
    // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0, y:0.7 },
        colors:colors
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors:colors
      });
      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(worker);
      }
      //  else {
      //   document.getElementById('pop-up-text').style.display = "none"
      // }
  }
  worker();
}
Array.from(triggers).forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const rect = trigger.getBoundingClientRect();
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      const origin = {
        x: center.x / window.innerWidth,
        y: center.y / window.innerHeight
      };
  
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
      frame(Date.now() + (5*1000));
    });
  });

const hidePopUp = () => {
  document.getElementById('pop-up-text').style.display = "none"
}