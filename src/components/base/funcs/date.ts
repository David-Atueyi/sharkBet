const currentDate = new Date();

const day = currentDate.getDate().toString();
const month = (currentDate.getMonth() + 1).toString();
const year = currentDate.getFullYear();


export const formattedDate = `${month}/${day}/${year}`;
