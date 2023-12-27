export function getTimeDifference(dateTimeString) {
    const commentDate = new Date(dateTimeString);
    const currentDate = new Date();
  
    const differenceInSeconds = Math.floor((currentDate - commentDate) / 1000);
  
    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} с назад`;
    } else if (differenceInSeconds < 3600) {
      const differenceInMinutes = Math.floor(differenceInSeconds / 60);
      return `${differenceInMinutes} мин назад`;
    } else if (differenceInSeconds < 86400) {
      const differenceInHours = Math.floor(differenceInSeconds / 3600);
      return `${differenceInHours} ч назад`;
    } else {
      const differenceInDays = Math.floor(differenceInSeconds / 86400);
  
      let dayString = 'дней назад';
      const lastDigit = differenceInDays % 10;
      const lastTwoDigits = differenceInDays % 100;
  
      if (lastDigit === 1 && lastTwoDigits !== 11) {
        dayString = 'день назад';
      } else if ((lastDigit >= 2 && lastDigit <= 4) && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
        dayString = 'дня назад';
      }
  
      return `${differenceInDays} ${dayString}`;
    }
  }
  