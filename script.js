const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes");

const avaibleNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value){
        const amountToBeReturned = cashGiven.value-billAmount.value;
        calculateChange(amountToBeReturned);

    }else{
        showMessage("The Cash Provided should atleast be equal to the bill amount");
    }
  }else {
      showMessage("Invalid Bill Amount");
  }
});

function hideMessage(){
    message.style.display = "none";
}

function calculateChange(amountToBeReturned){
    for(let i=0;i<avaibleNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/avaibleNotes[i]);
        amountToBeReturned =amountToBeReturned%avaibleNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }    
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}