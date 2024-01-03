export function getTimeDifference(dateTimeString) {
  const commentDate = new Date(dateTimeString);
  const currentDate = new Date();

  const differenceInSeconds = Math.floor((currentDate - commentDate) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} с`;
  } else if (differenceInSeconds < 3600) {
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    return `${differenceInMinutes} мин`;
  } else if (differenceInSeconds < 86400) {
    const differenceInHours = Math.floor(differenceInSeconds / 3600);
    return `${differenceInHours} ч`;
  } else if (differenceInSeconds < 31536000) {
    const differenceInDays = Math.floor(differenceInSeconds / 86400);

    let dayString = 'дней';
    const lastDigit = differenceInDays % 10;
    const lastTwoDigits = differenceInDays % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      dayString = 'день';
    } else if ((lastDigit >= 2 && lastDigit <= 4) && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
      dayString = 'дня';
    }

    return `${differenceInDays} ${dayString}`;
  } else {
    const differenceInYears = Math.floor(differenceInSeconds / 31536000); // разница в годах

    let yearString = 'лет';
    if (differenceInYears % 10 === 1 && differenceInYears % 100 !== 11) {
      yearString = 'год';
    } else if ((differenceInYears % 10 >= 2 && differenceInYears % 10 <= 4) && !(differenceInYears % 100 >= 12 && differenceInYears % 100 <= 14)) {
      yearString = 'года';
    }

    return `${differenceInYears} ${yearString}`;
  }
}

export function sortPosts(array, type) {
  switch (type) {
    case 'popular':
      return array.sort((a, b) => b.viewCount - a.viewCount);
    case 'likes':
      return array.sort((a, b) => b.likes - a.likes);
    case 'date':
      return array.sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return array;
  }
};

export function filterPosts(array, postType, userId) {
  return array.filter(post => {
    const isTypeMatch = postType === 'all' || post.type === postType;
    const isUserMatch = userId === undefined || post.userId === userId;
    return isTypeMatch && isUserMatch;
  });
};

export function getRandomPhotoPost(array) {
  const photoPosts = filterPosts(array, 'photo');
  return photoPosts.length === 0 ? null : photoPosts[Math.floor(Math.random() * photoPosts.length)];
}
