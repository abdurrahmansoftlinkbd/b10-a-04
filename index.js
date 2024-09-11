function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  const difference = income - expenses;
  const tax = difference * 0.2;
  return tax;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const emailArr = email.split("@");
  const userName = emailArr[0];
  const domainName = emailArr[1];
  const notificationMessage =
    userName + " sent you an email from " + domainName;
  return notificationMessage;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let nam of name) {
    if (nam >= "0" && nam <= "9") {
      return true;
    } else {
      return false;
    }
  }
}
