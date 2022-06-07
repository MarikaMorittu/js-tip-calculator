const inputBill = document.querySelector(".input__bill");
const inputPeople = document.querySelector(".input__people");
const inputCustom = document.querySelector(".input__custom");
const tipOut = document.querySelector(".tipOut");
const totalOut = document.querySelector(".totalOut");
const buttonReset = document.querySelector(".button__reset");
const error = document.querySelector(".error");
const boxPeople = document.querySelector(".people__box")
let boxTip = document.querySelectorAll(".percent");



boxTip.forEach((element) => {
  element.addEventListener("click", () => {
    errorZero(inputPeople.value);
    calculatorBill(inputBill.value, inputPeople.value, totalOut);
    calculatorTip(inputBill.value, element, inputPeople.value, tipOut);
  });
});
// funzione per carcolare totalOut
function calculatorBill(bill, people, totalOut, tipOut) {
  let resultBill = (parseFloat(bill) / parseFloat(people));
  // controllo 
  if(isNaN(resultBill)){ 
    tipOut.innerHTML ="0.00";
    totalOut.innerHTML= "0.00"
  }
  if(resultBill != "Infinity"){
    totalOut.innerHTML = resultBill.toFixed(2);
    
  }
}

let tips = [5, 10, 15, 25, 50];
// funzione per calcolare tipOut
function calculatorTip(bill, boxTip, people, tipOut, totalOut) {
  for (i = 0; i < tips.length; i++) {
    if (boxTip.classList.contains(`${tips[i]}`)) {
      let resultMount = ((parseFloat(bill) / parseFloat(people)) * `${tips[i]}`) / 100;
      tipOut.innerHTML = resultMount.toFixed(2);
       // controllo 
      if(isNaN(resultMount) || resultMount == "Infinity" ){
        tipOut.innerHTML ="0.00";
        totalOut.innerHTML= "0.00";
      }
    }
  }
}

function customTip( bill, inputCustom, people, tipOut){
  let resultCustomInput =(parseFloat(bill) / parseFloat(people)) * inputCustom / 100;
  tipOut.innerHTML = resultCustomInput.toFixed(2)
}
// funzione per calcolare tipOut e totalOut con il custom
inputCustom.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    errorZero(inputPeople.value);
    customTip(inputBill.value, inputCustom.value, inputPeople.value, tipOut)
    calculatorBill(inputBill.value, inputPeople.value, totalOut);
  }

})
// funzione per far aparire il messaggio di errore
function errorZero(people){
  if(people == 0){
    error.classList.add("block")
    boxPeople.classList.add("border")
  }else{
   error.classList.remove("block")
   boxPeople.classList.remove("border")
  }
}

// funzione di Reset
function resetAll(bill, people,inputCustom, tipOut, totalOut){
  buttonReset.addEventListener("click",() =>{
    bill.value= 0;
    people.value=0;
    inputCustom=0;
    tipOut.innerHTML="0.00";
    totalOut.innerHTML="0.00";
  })
}

resetAll(inputBill,inputPeople,inputCustom,tipOut,totalOut)




