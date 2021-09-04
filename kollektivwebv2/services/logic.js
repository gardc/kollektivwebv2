export const allPeople = ["Gard", "Christine", "Andreas", "Mari", "Martine"];
export const liteBadPeople = ["Gard", "Andreas"];
export const StortBadPeople = ["Christine", "Mari", "Martine"];

export const getWeek = () => {
  const currentdate = new Date();
  const oneJan = new Date(currentdate.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
  console.log(
    `The week number of the current date (${currentdate}) is ${result}.`
  );
  return result;
};

export const getPostPerson = (offset, maxPeople, people) => {
    const currweek = getWeek();
    const person = (currweek + offset - 1) % maxPeople;
    return people[person];
}