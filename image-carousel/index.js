const right = document.querySelector(".right");

const left = document.querySelector(".left");

const image = document.querySelector(".wall");

right.addEventListener("click", (e) => {
  console.log(image.src);
  let imageName = image.src.split("/")[5];
  let imageNumber = parseInt(imageName.split(".")[0]);
  console.log(imageName);
  console.log(imageNumber);
  if (imageNumber == 3) {
    imageNumber = 1;
  } else {
    imageNumber += 1;
  }
  image.src = `images/${imageNumber}.png`;
});

left.addEventListener("click", (e) => {
  console.log(image.src);
  let imageName = image.src.split("/")[5];
  let imageNumber = parseInt(imageName.split(".")[0]);
  console.log(imageName);
  console.log(imageNumber);
  if (imageNumber == 1) {
    imageNumber = 3;
  } else {
    imageNumber -= 1;
  }
  image.src = `images/${imageNumber}.png`;
});
