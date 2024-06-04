
                                                                                  //   MUSIC PLAYER

// let mySong = document.getElementById("mySong")
// let icon = document.getElementById("btn1")
// icon.addEventListener('click',function(){
//     if(mySong.paused){
//         mySong.play();
//         icon.src = ""
//     }
//     else{
//         mySong.pause();
//         icon.src = ""
//     }
// })




                                                                              //   AGE CALCULATOR
// let userInput = document.getElementById("date");
// let btn1 = document.getElementById("btn1")
// let result = document.getElementById("result")

// btn1.addEventListener('click',calculateAge)

// userInput.max = new Date().toISOString().split("T")[0];

// function calculateAge(){
//     let birthDate = new Date(userInput.value)
//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1;
//     let y1 = birthDate.getFullYear();

//     console.log(m1);

//     let today = new Date();
//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3, m3, y3;

//     y3 = y2 - y1;

//     if(m2 >= m1){
//         m3 = m2 - m1
//     }
//     else{
//         y3--;
//         m3 = 12 + m2 -m1;
//     }

//     if(d2 >= d1){
//         d3 = d2 - d1;
//     }
//     else{
//         m3--;
//         d3 = getDaysInMonth(y1,m1) + d2 -d1;
        
//     }
//      if(m3 < 0){
//          m3 = 11;
//          y3--;
//      }

//     result.innerHTML = `you are ${y3} years,${m3} months and ${d3} days old`;

// }

// function getDaysInMonth(year,month){
//         return new Date(year, month, 0).getDate();
// }




                                                                                     // STOP WATCH 
// let [seconds, minutes, hours] = [0, 0, 0];
//  let hours = 0
//  let minutes = 0
//  let seconds = 0

//  let displayTime = document.getElementById("displayTime")
//  let stopbtn = document.getElementById("stopbtn")
//  let playbtn = document.getElementById("playbtn")
//  let resetbtn = document.getElementById("resetbtn")

//  playbtn.addEventListener('click',watchStart)
//  stopbtn.addEventListener('click',watchStop)
//  resetbtn.addEventListener('click',watchReset)

//  function stopwatch(){
//      seconds++;
//      if(seconds == 60){
//          seconds = 0;
//          minutes++;
//          if(minutes == 60){
//              minutes= 0;
//              hours++;
//          }
//      }

    //  let h = hours< 10 ?"0"+hours : hours;
    //   let m = minutes< 10 ?"0"+minutes : minutes;
    //   let s = seconds < 10 ?"0"+seconds : seconds;


//      console.log(hours+":"+minutes+":"+seconds);
//      displayTime.innerHTML = h+":"+m+":"+s;
    
//  }
//  let timer

//  function watchStart(){
//      // if(timer !== null){
//      //     clearInterval(timer);
//      // }
//      timer =  setInterval(stopwatch,1000);
//  }

//  function watchStop(){
//      clearInterval(timer);

//  }

//  function watchReset(){
//      clearInterval(timer);
//       hours = 0
//       minutes = 0
//       seconds = 0

//      // [seconds, minutes, hours] = [0, 0, 0];
//     displayTime.innerHTML = "00:00:00";

//  }




                                                                         // POSSWORD STRENTH INDICATOR   
// let pass = document.getElementById("password");
// let msg = document.getElementById("message");
// let str = document.getElementById("strength");

// pass.addEventListener('input',()=>{
//  if(pass.value.length > 0){
//      msg.style.display = "block"
//  }
//  else{
//      msg.style.display = "none"
//  }
//  if(pass.value.length < 4){
//      str.innerHTML = "weak";
//      pass.style.borderColor="#ff5925"
//      msg.style.color="#ff5925"
//  }
//  else if(pass.value.length >= 4 && pass.value.length < 8){
//      str.innerHTML = "medium";
//      pass.style.borderColor="yellow"
//      msg.style.color="yellow"
//  }
//  else if(pass.value.length >= 4){
//      str.innerHTML = "strong";
//      pass.style.borderColor="#26d730"
//      msg.style.color="#26d730"
//  }
// })




                                                                              // HIDE AND SHOW PASSWORD
// let eyeicon = document.getElementById("eyeicon")
//    let password = document.getElementById("password")

//    eyeicon.addEventListener('click',function(){
//     if(password.type == "password"){
//         password.type = "text";
//         eyeicon.src ="img/eye-open.png"
//     }
//     else{
//         password.type = "password";
//         eyeicon.src ="img/eye-closed.png"
//     }
//    })




                                                                             // pop up msg design
//    let btn = document.querySelector('.btn');
//    let okBtn = document.querySelector('#okBtn');
//    let popup = document.getElementById('popup');

//    btn.addEventListener('click',openPopup)
//    okBtn.addEventListener('click',closePopup)

//    function openPopup(){
//     popup.classList.add("open-popup")
//    }

//    function closePopup(){
//     popup.classList.remove("open-popup")
//    }




                                                                                   // image gallery
   // let scrollContainer = document.querySelector(".gallery");
   // let backBtn = document.querySelector("#backbtn");
   // let nextBtn = document.querySelector("#nextbtn");

   // scrollContainer.addEventListener("wheel",(eat) =>{
   //  eat.preventDefault();
   //  scrollContainer.scrollLeft += eat.deltaY;
   // })

   // nextBtn.addEventListener("click", ()=>{
   //    scrollContainer.style.scrollBehavior = 'smooth'
   //    scrollContainer.scrollLeft += 900; 
      
   // })

   // backBtn.addEventListener("click", ()=>{
   //    scrollContainer.style.scrollBehavior = 'smooth'
   //    scrollContainer.scrollLeft -= 900; 
   // })





                                                                            // no js code for calculator




                                                                        //   color fliper
   // function changeColor(){
   //    document.body.style.backgroundColor='rgb('
   //    + Math.round(Math.random()*255)+
   //    ','+ Math.round(Math.random()*255)+
   //    ','+ Math.round(Math.random()*255)+')'
   //   }




                                                                //  div follows Mouse cursor
                                             
  //    let myDiv = document.getElementById("my-div");

  //  function isTouchDevice(){
  //   try{
  //      document.createEvent("TouchEvent");
  //      return true;
  //   } catch (e) {
  //       return false;
  //   }
  //  };

  //  const move = (e) =>{
  //   try{
  //       let x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  //       let y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  //   } catch (e) {}
  //       myDiv.style.left =x - 30 + "px";
  //       myDiv.style.top = y - 30 + "px";
    
  //  }; 
  //  let a = document.addEventListener("mousemove", (e)=>{
  //   move(e);
  //  });

  //    let b =document.addEventListener("touchmove", (e)=>{
  //    move(e);
  //  });
  //  console.log(a)
  //  console.log(b)




                                                                   // color changes
//   const btn = document.getElementById("btn");

//   let randomNum = () =>{
//     return Math.floor(Math.random() * 256);
//   }

//   let changeColor = () =>{
//       let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`
//       document.body.style.backgroundColor = randomColor;
//   }

//   btn.addEventListener("click", changeColor);
//   window.addEventListener("load",changeColor);




                                        // temprature calculator
// let celsius = document.getElementById("celsius");
//   let fehrenheit = document.getElementById("fehrenheit");

//   function celToFar(){
//     let output = (parseFloat(celsius.value)* 9/5)+32;
//     fehrenheit.value = parseFloat(output.toFixed(2));

//   }

//   function farToCel(){
//     let output = (parseFloat(fehrenheit.value)-32)* 5/9;
//     celsius.value = parseFloat(output.toFixed(2));
//   }




                                                                  // Decimal to Binary Converter
// let decInp = document.getElementById("dec-inp");
//  let binInp = document.getElementById("bin-inp");
//  let errorMsg =document.getElementById("error-msg");
 
//  decInp.addEventListener("input", ()=> {
//     let decValue = parseInt(decInp.value);
//     binInp.value = decValue.toString(2);
//  });

//  binInp.addEventListener("input", ()=> {
//     let binValue =binInp.value;

//     if(binValidator(binValue)){
//         decInp.value = parseInt(binValue, 2);
//         errorMsg.textContent = "";

//     }

//     else{
//         errorMsg.textContent = "Please Enter An Valid Binary Input"; 
//     }

//     function binValidator(num){
//         for(let i=0; i<num.length; i++){
//             if(num[i]!="0" && num[i]!="1"){
//                 return false;
//             }
//         }
//         return true;
//     }

//  })




                                                                       //  Persentage Calclator
// let z = document.getElementById("z");
//  let result = document.getElementById("result");
//  let calculateBtn = document.getElementById("calculator-btn");

//  calculateBtn.addEventListener("click",()=>{
//     let xValue = parseFloat(document.getElementById("x").value);
//     let yValue = parseFloat(document.getElementById("y").value);

//     if(!isNaN(xValue) && !isNaN(yValue)){
//         z.value = ((xValue * yValue) / 100).toFixed(2);
//         result.innerHTML =`${xValue} %of ${yValue} is <span> ${z.value} </span>`;
//     }
//     else{
//         result.innerHTML ="Input cannot be empty"
//     }
//  })




                                                                          // Image Password Strength
// const password = document.getElementById("password");
//  const background = document.getElementById("backgroud");
//  password.addEventListener("input",() =>{
//     const input = password.value;
//     const blurValue = 16 - input.length;
//     background.style.filter = `blur(${blurValue}px)`
//  })




                                                                               // Image loding blur Effect
// const imageElement = document.getElementById("image");
//  const numberElement = document.getElementById("number");
//  let count = 0;
//  const maxCount = 100;

// const incrementLoader = () =>{
//     if(count < maxCount){
//         count++;
//         numberElement.textContent = count +"%";

//         const opacity = count/maxCount;
//         imageElement.style.opacity = opacity;

//         // imageElement.style.filter =`blue($(10- 10 * opacity)px)`;
//     }

//     else if(count === maxCount){
//         clearInterval(loaderInterval);
//         numberElement.texContent ="";
//     }
// }

// const loaderInterval = setInterval(incrementLoader, 60)




                                                                                       // counter
// let numContainer = document.getElementById("num");
//  let value = 0;

//  let btnInc = document.querySelector(".inc");
//  let btnDec = document.querySelector(".dec");
//  let btnReset = document.querySelector(".reset");

//  btnInc.addEventListener("click",() =>{
//     value++;
//     numContainer.textContent = value;
//  })

//  btnDec.addEventListener("click",() =>{
//     value--;
//     numContainer.textContent = value;
//  })

//  btnReset.addEventListener("click",() =>{
//     value = 0;
//     numContainer.textContent = value;
//  })




                                                                           // Compare Date
 let btn = document.getElementById("check");
 btn.addEventListener("click", ()=>{
    let date1 = document.getElementById("date-1").value;
    let date2 = document.getElementById("date-2").value;
    console.log(date1, date2);

    if(date1.length == 0 || date2.length == 0){
      result.innerHTML ="<span>please enter valid dates</span>"
    }

    else{
      if(date1>date2){
         result.innerHTML = "Date 1 is <b>Greater</b> than Date2"
      }
      else if(date1<date2){
         result.innerHTML = "Date 1 is <b>Smaller</b> than Date2"
      }
      else if(date1 == date2){
         result.innerHTML = "Date 1 is <b>Equals</b> to Date2"
      }
    }
 })



// to do list


// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("please enter a task")
//     }
//     else{
//         document.querySelector('#tasks').innerHTML
//          +=`
//         <div class="task">
//             <span id="taskname">
//                 ${document.querySelector('#newtask input').value}
//             </span>
//             <button class='delete'>
//             <i class="fa-solid fa-trash-can"></i>
//             </button>
//         </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }

//         var tasks = document.querySelectorAll('.task');
//         for(var i=0; i<tasks.length; i++){
//             this.classList.toggle('comleted');
//         }
//          document.querySelector("#newtask input").value = "";
//     }

// }
