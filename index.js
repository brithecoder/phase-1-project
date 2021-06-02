

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
    addActivity(wedgeOne);
    addActivity(wedgeTwo);
    addActivity(wedgeThree);
    addActivity(wedgeFour);
    addActivity(wedgeFive);
    addActivity(wedgeSix);
    addActivity(wedgeSeven);
    addActivity(wedgeEight);
//    wedgeReturn();
  }
 
  const addActivity = (wedge) => {
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

  const wedgeReturn = (wedge, wedgeKey) => {
    switch (wedge) {
      case wedgeThree:
        if (degrees > 247.5 && degrees <= 292.5) {
          console.log("3 was pinged")
//          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
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
          .then(data => {
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
            console.log(data)
          })
        }
        break;
      default: console.log("Nothing!")
    }
  }
/*
  const wedgeReturn = (wedge, wedgeKey) => {
    switch (wedge) {
      case wedgeThree:
        if (degrees <= 22.5 || degrees >337.5) {
          console.log("3 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeFour:
        if (degrees > 22.5 && degrees <= 67.5) {
          console.log("4 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeFive:
        if (degrees > 67.5 && degrees <= 112.5) {
          console.log("5 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeSix:
        if (degrees > 112.5 && degrees <= 157.5) {
          console.log("6 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeSeven:
        if (degrees > 157.5 && degrees <= 202.5) {
          console.log("7 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeEight:
        if (degrees > 202.5 && degrees <= 247.5) {
          console.log("8 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeOne:
        if (degrees > 247.5 && degrees <= 292.5) {
          console.log("1 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      case wedgeTwo:
        if (degrees > 292.5 && degrees <= 337.5) {
          console.log("2 was pinged")
          console.log(wedgeKey)
          fetch(`http://www.boredapi.com/api/activity?key=${wedgeKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        }
        break;
      default: console.log("Nothing!")
    }
  }

//wedgeReturn();
*/
/*
const wedgeReturn = (wedge) => {
  switch (wedge) {
    case wedgeThree:
      console.log("3 was pinged")
      break;
    case wedgeFour:
      console.log("4 was pinged")
      break;
    case wedgeFive:
      console.log("5 was pinged")
      break;
    case wedgeSix:
      console.log("6 was pinged")
      break;
    case wedgeSeven:
      console.log("7 was pinged")
      break;
    case wedgeEight:
      console.log("8 was pinged")
      break;
    case wedgeOne:
      console.log("1 was pinged")
      break;
    case wedgeTwo:
      console.log("2 was pinged")
      break;
    default: console.log("Nothing!")
  }
}
*/
/*
const wedgeReturn = (wedge, wedgeKey) => {
  if (degrees <= 22.5 && wedge === wedgeThree) {
    console.log(wedgeThree)
  } else if (degrees <= 67.5 && wedge === wedgeFour) {
    console.log(wedgeFour)
  } else if (degrees <= 112.5 && wedge === wedgeFive) {
    console.log(wedgeFive)
  } else if (degrees <= 157.5 && wedge === wedgeSix) {
    console.log(wedgeSix)
  } else if (degrees <= 202.5 && wedge === wedgeSeven) {
    console.log(wedgeSeven)
  } else if (degrees <= 247.5 && wedge === wedgeEight) {
    console.log(wedgeEight)
  } else if (degrees <= 292.5 && wedge === wedgeOne) {
    console.log(wedgeOne)
  } else if (degrees <= 337.5 && wedge === wedgeTwo) {
    console.log(wedgeTwo)
  } else if (degrees <= 360 && wedge === wedgeThree) {
    console.log(wedgeThree)
  }// else {
    //  console.log("Nothing happened")
  //}
}
*/
  /*
  // Fetch from bored API that populates a wedge's title with that of a random activity
  const addActivity = (wedge) => {
    let title = wedge.childNodes[0]
    let wedgeId = wedge.id
    fetch(`http://www.boredapi.com/api/activity/`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(wedgeId)
      title.innerText = data.activity
      wedgeKey = data.key
      console.log(wedgeKey)
    })
  }

  // Return SOMETHING from the wedge once its value has been updated
  const wedgeReturn = () => {
    if (degrees <= 22.5) {
      console.log(wedgeThree)
      console.log("wedgeThree was returned")
//    console.log(wedgeThree.childNodes[0].innerText)
    } else if (degrees <= 67.5) {
      console.log(wedgeFour)
      console.log("wedgeFour was returned")
//    console.log(wedgeFour.childNodes[0].innerText)
    } else if (degrees <= 112.5) {
      console.log(wedgeFive)
      console.log("wedgeFive was returned")
//    console.log(wedgeFive.childNodes[0].innerText)
    } else if (degrees <= 157.5) {
      console.log(wedgeSix)
      console.log("wedgeSix was returned")
//    console.log(wedgeSix.childNodes[0].innerText)
    } else if (degrees <= 202.5) {
      console.log(wedgeSeven)
      console.log("wedgeSeven was returned")
//    console.log(wedgeSeven.childNodes[0].innerText)
    } else if (degrees <= 247.5) {
      console.log(wedgeEight)
      console.log("wedgeEight was returned")
//    console.log(wedgeEight.childNodes[0].innerText)
    } else if (degrees <= 292.5) {
      console.log(wedgeOne)
      console.log("wedgeOne was returned")
//    console.log(wedgeOne.childNodes[0].innerText)
    } else if (degrees <= 337.5) {
      console.log(wedgeTwo)
      console.log("wedgeTwo was returned")
//    console.log(wedgeTwo.childNodes[0].innerText)
    } else if (degrees <= 360) {
      console.log(wedgeThree)
      console.log("wedgeThree was returned")
//    console.log(wedgeThree.childNodes[0].innerText)
    } else {
        console.log("Nothing happened")
    }
  }

 
//  wedgeReturn();
*/
  renderWedges();

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
    }, 5000);

}