const DAYS = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];
const Seconds = {
  PER_DAY: 86400,
  PER_HOUR: 3600,
  PER_MINUTE: 60,
  TO_MILLISECONDS: 1000,
};

const date = new Date(2012, 1, 20, 3, 12);

const getWeekDay = (date) => DAYS[date.getDay()];

const getLocalDay = (date) => date.getDay() === 0 ? 7 : date.getDay();

const getDateAgo = (date, days) => {
  const resultDate = new Date(date);
  resultDate.setDate(resultDate.getDate() - days);
  return resultDate.getDate();
};

//Честно признаюсь, подсмотрел в решении
const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);
  return date.getDate()
}; 

const getSecondsToday = () => {
  const now = new Date();
  return now.getHours() * Seconds.PER_HOUR + now.getMinutes() * Seconds.PER_MINUTE + now.getSeconds();
}; 

const getSecondsToTomorrow = () => Seconds.PER_DAY - getSecondsToday();

const formatDate = (date) => {
  const diffDate = new Date() - date;
  if(diffDate < Seconds.TO_MILLISECONDS){
    return 'прямо сейчас';
  }
  
  const seconds = Math.round(diffDate / Seconds.TO_MILLISECONDS);
  
  if(seconds < 60){
    return `${seconds} сек. назад`;
  }

  const minutes = Math.round(seconds / Seconds.PER_MINUTE);

  if(minutes < 60){
    return `${minutes} мин. назад`;
  }

  const stringDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${String(date.getFullYear()).slice(2)} ${date.getHours()}:${date.getMinutes()}`

  return stringDate;
};
