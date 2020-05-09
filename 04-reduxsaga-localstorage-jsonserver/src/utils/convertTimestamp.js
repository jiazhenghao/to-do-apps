export default function convertTimestamp(
  year,
  month,
  day,
  hour,
  minute,
  second
) {
  let time = new Date(year, month - 1, day, hour, minute, second);
  return `${time.toLocaleDateString()} ${hour}:${minute}:${second}`;
}
