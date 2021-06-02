

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
    addActivity(wedgeOne);
    addActivity(wedgeTwo);
    addActivity(wedgeThree);
    addActivity(wedgeFour);
    addActivity(wedgeFive);
    addActivity(wedgeSix);
    addActivity(wedgeSeven);
    addActivity(wedgeEight);
  }
 
  // Fetch from bored API that populates a wedge's title with that of a random activity
  const addActivity = (wedge) => {
    let title = wedge.childNodes[0]
    fetch(`http://www.boredapi.com/api/activity/`)
    .then(res => res.json())
    .then(data => title.innerText = data.activity)
  }

  // Return SOMETHING from the wedge once its value has been updated
  const wedgeReturn = () => {
    if (degrees <= 22.5) {
        console.log(wedgeThree.childNodes[0].innerText)
        prompt("Would you enjoy" + wedgeThree.childNodes[0].innerText +"?")
    } else if (degrees <= 67.5) {
        console.log(wedgeFour.childNodes[0].innerText)
        prompt("Would you enjoy" + wedgeFour.childNodes[0].innerText + "?")
    } else if (degrees <= 112.5) {
        console.log(wedgeFive.childNodes[0].innerText)
         prompt("Would you enjoy" + wedgeFive.childNodes[0].innerText + "?")
    } else if (degrees <= 157.5) {
        console.log(wedgeSix.childNodes[0].innerText)
        prompt("Would you enjoy" + wedgeFive.childNodes[0].innerText + "?")
    } else if (degrees <= 202.5) {
        console.log(wedgeSeven.childNodes[0].innerText)
    } else if (degrees <= 247.5) {
        console.log(wedgeEight.childNodes[0].innerText)
    } else if (degrees <= 292.5) {
        console.log(wedgeOne.childNodes[0].innerText)
    } else if (degrees <= 337.5) {
        console.log(wedgeTwo.childNodes[0].innerText)
    } else if (degrees <= 360) {
        console.log(wedgeThree.childNodes[0].innerText)
    } else {
        console.log("Nothing happened")
    }
  }

  renderWedges();
  wedgeReturn();

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
    }, 5000);

}