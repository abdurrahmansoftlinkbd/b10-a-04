function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  const difference = income - expenses;
  const tax = difference * 0.2;
  return tax;
}
console.log(calculateTax(-5000, 2000));

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

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  let result = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    result += 20;
  }

  if (result >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (let waitingTime of waitingTimes) {
    sum += waitingTime;
  }
  let avg = Math.round(sum / waitingTimes.length);
  let serial = serialNumber - 1;
  let beforeSerial = serial - waitingTimes.length;
  let result = beforeSerial * avg;
  return result;
}
