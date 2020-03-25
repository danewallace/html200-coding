let balance = 500;

optionsPrompt();

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
  if (balance - Number(withdrawAmount) < 0) {
    alert('Sorry, you have insufficient funds. Please try again.');
    optionsPrompt();
  } else if (balance - Number(withdrawAmount) < 300) {
    let confirm = prompt('Your balance will be under $300. Please press c to confirm, press any other key to try again');
    if (confirm == 'c' || confirm == 'C') {
      balance -= Number(withdrawAmount);
      alert('You have withdrawn $' + withdrawAmount);
      optionsPrompt();
    } else {
      optionsPrompt();
    }
  } else {
    balance -= Number(withdrawAmount);
    alert('You have withdrawn $' + withdrawAmount);
    optionsPrompt();
  }
}

function depositMoney() {
  let depositAmount = prompt('Please enter amount to deposit:');
  if (Number(depositAmount) > 50000) {
    alert('Sorry, the deposit limit for this account is $50,000. Please try again.');
    optionsPrompt();
  } else {
    balance += Number(depositAmount);
    alert('You have deposited $' + depositAmount);
    optionsPrompt();
  }
}

function viewBalance() {
  alert('Your balance is $' + balance);
  optionsPrompt();
}

function selectOption(option) {
  switch(option) {
    case 'W', 'w': {
      withdrawMoney();
      break;
    }
    case 'D', 'd': {
      depositMoney();
      break;
    }
    case 'B', 'b': {
      viewBalance();
      break;
    }
    case 'Q', 'q': {
      alert('You have exited. Thank you.')
      break;
    }
  }
}
