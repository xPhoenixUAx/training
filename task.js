function formatDistanceToNow(date) {
  if (!date) return "Date is unknown";

  const now = new Date();
  const distance = now - date;

  const seconds = Math.floor(distance / 1000);

  if (seconds < 60) {
    return "less than a minute";
  } else if (seconds < 90) {
    return "1 minute";
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes`;
  } else if (seconds < 5400) {
    return "about 1 hour";
  } else {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const secondsFormatted = String(dateObj.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${secondsFormatted}`;
  }
}

console.log(formatDistanceToNow(new Date(new Date() - 10))); // 'less than a minute'
console.log(formatDistanceToNow(new Date(new Date() - 60 * 1000))); // '1 minute'
console.log(formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000))); // '31 minutes'
console.log(formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000))); // 'about 1 hour'

console.log(formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32))); // '28.07.2016 09:07:32'
console.log(formatDistanceToNow(null)); // 'Date is unknown'
console.log(formatDistanceToNow()); // 'Date is unknown'
