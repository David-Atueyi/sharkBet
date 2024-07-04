const padTime = (time: number) => (time < 10 ? `0${time}` : time);

const currentDate = new Date();
let hours = currentDate.getHours();
const minutes = padTime(currentDate.getMinutes());
const seconds = padTime(currentDate.getSeconds());
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;
const formattedHours = hours;

export const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
