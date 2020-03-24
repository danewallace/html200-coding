let balance = 500;

  function optionsPrompt() {
    let input = prompt(
      'Please make a selection:' + '\n' +
      'W to withdraw' + '\n' +
      'D to deposit' + '\n' +
      'B to view balance' + '\n' +
      'Q to quit'
    );

    if (input === 'W' || 'w') {
      withdrawMoney();
    } else if (input === 'D' || 'd') {
      depositMoney();
    } else if (input === 'B' || 'b') {
      viewBalance();
    } else {
      alert('Please enter an appropriate key');
      optionsPrompt();
    }
  }

  function withdrawMoney() {
    let withdrawAmount = prompt('Please enter amount to withdraw:');
    balance -= withdrawAmount;
    alert('You have withdrawn $' + withdrawAmount);
    optionsPrompt();
  }

  function depositMoney() {
    let depositAmount = prompt('Please enter amount to deposit:');
    balance += depositAmount;
    alert('You have deposited $' + depositAmount);
    optionsPrompt();
  }

  function viewBalance() {
    alert('Your balance is $' + balance);
    optionsPrompt();
  }


optionsPrompt();



// function banking(input) {
//   switch(input) {
//     case 'W' || 'w': {
//       let withdrawAmount = prompt('Please enter amount to withdraw:');
//       balance = balance - withdrawAmount;
//       return withdrawAmount;
//
//     }
//     case 'D' || 'd': {
//       let depositAmount = prompt('Please enter amount to deposit:');
//       balance = balance + depositAmount;
//       return depositAmount;
//       break;
//     }
//     case 'B' || 'b': {
//       alert(`Your balance is: ${balance}`);
//       break;
//     }
//     case 'Q' || 'q': {
//       break;
//     }
//   }
