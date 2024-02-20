// const containerElement = document.getElementById("container");

// const greenButtonElement = document.getElementById("green");
// const redButtonElement = document.getElementById("red");
// const yellowButtonElement = document.getElementById("yellow");

// greenButtonElement.addEventListener("click", (eventObj) => {
// //   console.log(eventObj);
//   // const targetElement = eventObj.target
//   // console.log(greenButtonElement === eventObj.target, "comparision"); // true

//   const element = eventObj.target; // greenButtonElement
//   const color = element.id; // green

// //   console.dir(color);

//   containerElement.style.background = color;
// });

// redButtonElement.addEventListener("click", (event) => {
//     const element = event.target;
//     const color = element.id;
//     containerElement.style.background = color;

// });

// yellowButtonElement.addEventListener("click",(event)=>{
//     const element = event.target;
//     const color = element.id;

//     containerElement.style.background = color;
// });

// const palletContainerElement = document.getElementById("palletContainer");
// const containerElement = document.getElementById("container");


// palletContainerElement.addEventListener("click", (event) => {
//     const element = event.target; // redbutton, greenbutton, yellowButton
  
//     console.log(element);
  
//     const color = element.id;
  
//     containerElement.style.background = color;
//   });

  // document.body.addEventListener("click", (event) => {
  //   const element = event.target; // redbutton, greenbutton, yellowButton
  
  //   console.log(element);
  
  //   const color = element.id;
  
  //   containerElement.style.background = color;
  // });

  const nameElement = document.querySelector(".name");

  const greenElement = document.querySelector(".green");
  const blueElement = document.querySelector(".blue");
  const redElement = document.querySelector(".red");
  // console.dir("nameElement");
  greenElement.addEventListener("click", ()=>{
    const color = greenElement.className;
    nameElement.style.color = color;  
  })
  
  blueElement.addEventListener("click", ()=>{
    const color = blueElement.className;
    nameElement.style.color = color;
  
  })
 
  redElement.addEventListener("click",()=>{
    const color = redElement.className;
    nameElement.style.color = color;
  })
  
