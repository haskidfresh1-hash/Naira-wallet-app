let balance = 0;

function update() {
  document.getElementById("balance").innerText = "₦" + balance;
}

function addHistory(text) {
  let li = document.createElement("li");
  li.innerText = text;
  document.getElementById("list").appendChild(li);
}

function deposit() {
  let amt = Number(amount.value);
  balance += amt;
  update();
  addHistory("Deposited ₦" + amt);
}

function withdraw() {
  let amt = Number(amount.value);
  if (amt <= balance) {
    balance -= amt;
    addHistory("Withdrew ₦" + amt);
  }
  update();
}

function send() {
  let amt = Number(sendAmount.value);
  if (amt <= balance) {
    balance -= amt;
    addHistory("Sent ₦" + amt + " to " + user.value);
  }
  update();
}
