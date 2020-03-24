let balance = 500;

function optionsPrompt() {
  let input = prompt(
      'Please make a selection:' + '\n' +
      'W to withdraw' + '\n' +
      'D to deposit' + '\n' +
      'B to view balance' + '\n' +
      'Q to quit'
  );
  selectOption(input);
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

function selectOption(option) {
  switch(option) {
    case 'W' || 'w': {
      withdrawMoney();
    }
    case 'D' || 'd': {
      depositMoney();
    }
    case 'B' || 'b': {
      viewBalance();
    }
    case 'Q' || 'q': {
      break;
    }
  }
}

optionsPrompt();
