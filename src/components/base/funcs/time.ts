
const padTime = (time:number) => (time < 10 ? `0${time}` : time);

const currentDate = new Date();
const hours = padTime(currentDate.getHours());
const minutes = padTime(currentDate.getMinutes());

export const formattedTime = `${hours}:${minutes}`;
