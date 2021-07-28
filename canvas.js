window.onload = function () {
  const canvas = document.getElementById("trackCanvas");
  const ctx = canvas.getContext("2d");

  const track = new Image();
  track.src = "./images/track.png";
  const car = new Image();
  car.src = "./images/car.png";
  track.onload = () => {
    ctx.drawImage(track, 30, 200, track.width * 1.1, track.height * 1.1);

    car.onload = () => {
      let carMidH = (car.height * 1.1) / 2;
      let carMidW = (car.width * 1.1) / 2;
      let carX = Math.floor(550 - carMidW);
      let carY = Math.floor(615 - carMidH);
      let leftRotationAng = 0;
      let rightRotationAng = 0;
      let speed = 7;
      let arcSpeed = 180/(545 / speed)

      ctx.save();
      ctx.translate(carX, carY);
      ctx.rotate((270 * Math.PI) / 180);
      ctx.drawImage(car, -carMidW, -carMidH, car.width * 1.1, car.height * 1.1);
      ctx.restore();
      let carPath = (initialX, initialY) => {
        let rotationAngle;
        let bottomPath = () => {
          carX = carX - speed;
          console.log(carX);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(track, 30, 200, track.width * 1.1, track.height * 1.1);
          ctx.save();
          ctx.translate(carX, carY);
          ctx.rotate((270 * Math.PI) / 180);
          ctx.translate(-carX, -carY);
          ctx.drawImage(
            car,
            carX - carMidW,
            carY - carMidH,
            car.width * 1.1,
            car.height * 1.1
          );
          ctx.restore();
        };
        let leftPath = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(track, 30, 200, track.width * 1.1, track.height * 1.1);
          ctx.save();
          ctx.translate(230, 400);
          ctx.rotate((leftRotationAng * Math.PI) / 180);
          ctx.translate(-230,-400)
          ctx.drawImage(car, carX - carMidW, carY - carMidH, car.width * 1.1, car.height * 1.1)
          ctx.restore();
          leftRotationAng += arcSpeed;
          if (leftRotationAng > 180) {carX = 231; carY = 220;}
        };
        let topPath = () => {
            carX = carX + speed;
            console.log(carX);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(track, 30, 200, track.width * 1.1, track.height * 1.1);
            ctx.save();
            ctx.translate(carX, carY);
            ctx.rotate((90 * Math.PI) / 180);
            ctx.translate(-carX, -carY);
            ctx.drawImage(
              car,
              carX - carMidW,
              carY - carMidH,
              car.width * 1.1,
              car.height * 1.1
            );
            ctx.restore();
        };
        let rightPath = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(track, 30, 200, track.width * 1.1, track.height * 1.1);
            ctx.save();
            ctx.translate(775, 400);
            ctx.rotate((rightRotationAng * Math.PI) / 180);
            ctx.translate(-775,-400)
            ctx.drawImage(car, carX - carMidW, carY - carMidH, car.width * 1.1, car.height * 1.1)
            ctx.restore();
            rightRotationAng += arcSpeed;
            if (rightRotationAng > 180) {carX = 775; carY = 580;}
        };
        let lap = () => {
          leftRotationAng = 0;
          rightRotationAng = 0;
        };
        if (carY == 580 && carX > 230) bottomPath();
        if (carX <= 230) leftPath();
        if (carX < 775 && carY == 220) topPath()
        if (carX >= 775) rightPath();
        if (carX == 502 && carY == 580) lap();

        // ctx.beginPath();
        // ctx.moveTo(230, 220);
        // ctx.lineTo(775, 220);
        // ctx.arc(775, 400, 180, 1.5 * Math.PI, 0.5 * Math.PI);
        // ctx.lineTo(230, 580);
        // ctx.arc(230, 400, 180, 0.5 * Math.PI, 1.5 * Math.PI);
        // ctx.strokeStyle = "red";
        // ctx.stroke();
        // ctx.fillStyle = "green";
        // // LEFT LINE
        // ctx.fillRect(230, 100, 2, 600);
        // // RIGHT LINE
        // ctx.fillRect(775, 100, 2, 600);
        // // TOP LINE
        // ctx.fillRect(0, 220, 1600, 2);
        // // MID LINE
        // ctx.fillRect(0, 400, 1600, 2);
        // // BOTTOM LINE
        // ctx.fillRect(0, 580, 1600, 2);
        // // LAP LINE
        // ctx.fillRect(502, 0, 2, 1600);

        setTimeout(requestAnimationFrame(carPath), 1000 / 60);
      };
      carPath(550 - carMidW, 615 - carMidH);
      window.setTimeout(1000 / 60);
    };

    // GUIDES
    // TRACK PATH GUIDE (RED)
  };
};
