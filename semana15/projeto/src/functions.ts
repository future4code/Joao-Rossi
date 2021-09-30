export const verifyAge = (dateOfBirthAsString: String): number => {
  const [dayAsString, monthAsString, yearAsString] =
    dateOfBirthAsString.split("/");
  const [dayBirth, monthBirth, yearBirth] = [Number(dayAsString), Number(monthAsString), Number(yearAsString)];

  const currentDay: number = Number(new Date().getDay());
  const currentMonth: number = Number(new Date().getMonth());
  const currentYear: number = Number(new Date().getFullYear());

  let age: number = currentYear - yearBirth;

  if (monthBirth < currentMonth) {
    age = age + 1;
  } else if (dayBirth < currentDay) {
    age = age + 1;
  }
  return age;
};
