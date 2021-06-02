

//  BtnListener => {
//         let button = document.querySelector(".spin");
//         button.addEventListener("click",rotateFunction ())
    
//     }

function rotateFunction(){
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min + 360;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  let degrees = deg % 360;
  //Declare wedge bindings
  let wedgeOne = document.getElementById("wedge1")
  let wedgeTwo = document.getElementById("wedge2")
  let wedgeThree = document.getElementById("wedge3")
  let wedgeFour = document.getElementById("wedge4")
  let wedgeFive = document.getElementById("wedge5")
  let wedgeSix = document.getElementById("wedge6")
  let wedgeSeven = document.getElementById("wedge7")
  let wedgeEight = document.getElementById("wedge8")

  //render wedges with new activity when wheel is spun
  const renderWedges = () => {
    console.log(degrees)
    newActivity(wedgeOne);
    newActivity(wedgeTwo);
    newActivity(wedgeThree);
    newActivity(wedgeFour);
    newActivity(wedgeFive);
    newActivity(wedgeSix);
    newActivity(wedgeSeven);
    newActivity(wedgeEight);
//    wedgeReturn();
  }
 
  const newActivity = (wedge) => {
    let title = wedge.childNodes[0]
    fetch(`http://www.boredapi.com/api/activity/`)
    .then(res => res.json())
    .then(data => {
      title.innerText = data.activity
      let wedgeKey = data.key
      wedgeReturn(wedge, wedgeKey)
//      console.log(wedgeKey)
//      fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
//      .then(res => res.json())
//      .then(data => {
//        console.log(data)
//      })
    })
  }
  function changeText (data){
  let textIntro = document.querySelector("#mainTitle")
  let textType = document.querySelector("#mainDescription");
  let textGuest = document.querySelector("#secondDescription");
  textIntro.textContent = data.activity 
  textType.textContent = `${data.type}` 
  textGuest.textContent= `Participants: ${data.participants}`
  let recommendationDiv = document.querySelector(".gameInto")
  let activityButton = document.createElement("button")
  activityButton.innerText = "Add activity"
  activityButton.addEventListener('click',addActivity)
  if (recommendationDiv.contains(document.querySelector("button"))) {
    console.log("This div contains a button!")
    } else {
    recommendationDiv.append(activityButton)
    }
  }
    
  const addActivity = (data) => {
    let textIntro = document.querySelector("#mainTitle")
    let textType = document.querySelector("#mainDescription");
    let textGuest = document.querySelector("#secondDescription");
    console.log("You clicked the button!")
    let activityList = document.getElementById("footer")
    let borderDiv = document.createElement("div")
    borderDiv.className = "gradient-border"
    let innerDiv = document.createElement("div")
    innerDiv.className = "gameInto"
    let title = document.createElement("h1")
    title.innerText = textIntro.innerText
    let mainDescription = document.createElement("h2")
    mainDescription.style="color:black;"
    mainDescription.innerText = textType.innerText
    let secondDescription = document.createElement("h3")
    secondDescription.innerText = textGuest.innerText
    innerDiv.append(title, mainDescription, secondDescription)
    borderDiv.append(innerDiv)
    activityList.append(borderDiv)
  }

  const wedgeReturn = (wedge, wedgeKey) => {
    switch (wedge) {
      case wedgeThree:
        if (degrees > 247.5 && degrees <= 292.5) {
          console.log("3 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => { changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeFour:
        if (degrees > 67.5 && degrees <= 112.5) {
          console.log("4 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => { changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeFive:
        if (degrees > 292.5 && degrees <= 337.5) {
          console.log("5 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
              changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeSix:
        if (degrees > 112.5 && degrees <= 157.5) {
          console.log("6 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
               changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeSeven:
        if (degrees > 22.5 && degrees <= 67.5) {  
          console.log("7 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
              changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeEight:
        if (degrees > 202.5 && degrees <= 247.5) {
          console.log("8 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
                changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeOne:
        if (degrees > 157.5 && degrees <= 202.5) {
          console.log("1 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
              changeText(data)
            console.log(data)
          })
        }
        break;
      case wedgeTwo:
//        if (degrees > 292.5 && degrees <= 337.5) {
        if (degrees <= 22.5 || degrees >337.5) {
          console.log("2 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
              changeText(data)
            console.log(data)
          })
        }
        break;
      default: console.log("Nothing!")
    }
  }
  renderWedges();

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
    }, 5000);

}

// const renderButton = () => {
//   let activityButton = document.createElement("button")
//   activityButton.innerText = "Add activity"
//   let activityList = document.getElementById("footer")
//   activityList.append(activityButton)
//   activityButton.addEventListener('click',addActivity)
// }
// renderButton();

