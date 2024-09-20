export const createValidIdNumber = (dob, gender, citizenship) => {
  const year = dob.substring(2, 4);
  const month = dob.substring(5, 7);
  const day = dob.substring(8, 10);

  const randomGenderSeq = Math.floor(
    Math.random() * 5000 + (gender === "male" ? 5000 : 0)
  )
    .toString()
    .padStart(4, "0");

  const citizenIndicator = citizenship === "sa" ? "0" : "1";

  const randomRaceSeq = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, "0");

  const partialIdNumber = `${year}${month}${day}${randomGenderSeq}${citizenIndicator}${randomRaceSeq}`;

  const checkDigit = calculateCheckSum(partialIdNumber);

  return `${partialIdNumber}${checkDigit}`;
};

const calculateCheckSum = (id) => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = id.length - 1; i >= 0; --i) {
    let digit = parseInt(id.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + 1;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (sum * 9) % 10;
};
