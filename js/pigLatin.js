export default function pigLatin(str) {
  const arr = [];
  str.split(' ').forEach(word => arr.push(`${word.substr(1)}${word[0].toLowerCase()}ay`));
  arr[0] = `${arr[0].charAt(0).toUpperCase()}${arr[0].substr(1)}`;
  return arr.join(' ');
}
