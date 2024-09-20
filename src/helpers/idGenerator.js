export const createValidIdNumber = (dob, gender, citizenship) => {
  if (
    !dob ||
    (citizenship !== "0" && citizenship !== "1") ||
    (gender !== "M" && gender !== "F")
  ) {
    throw new Error(
      "Please enter a valid date of birth, gender (M or F), and citizenship status (0 or 1)."
    );
  }

  const dateParts = dob.split("-");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  if (!isValidDate(year, month, day)) {
    throw new Error("Please enter a valid date of birth.");
  }

  const yy = String(year).slice(-2);
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  const seqNumber = getRandomSeqNumber(gender);
  const aValue = citizenship === "0" ? "8" : "9";

  const ssss = String(seqNumber).padStart(4, "0");
  const idWithoutCheckDigit = `${yy}${mm}${dd}${ssss}${citizenship}${aValue}`;
  const checkDigit = calculateCheckDigit(idWithoutCheckDigit);

  return idWithoutCheckDigit + checkDigit;
};

function getRandomSeqNumber(gender) {
  return gender === "F"
    ? Math.floor(Math.random() * 5000)
    : Math.floor(Math.random() * 5000) + 5000;
}

function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}

function calculateCheckDigit(idWithoutCheckDigit) {
  let sum = 0;

  for (let i = 0; i < idWithoutCheckDigit.length; i++) {
    let digit = parseInt(idWithoutCheckDigit.charAt(i), 10);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return (10 - (sum % 10)) % 10;
}
