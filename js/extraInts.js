export default function extraInts(a, b) {
  let arr1, arr2;
  if (a.length > b.length) {
    [arr1, arr2] = [a, b];
  } else {
    [arr2, arr1] = [a, b];
  }
  return arr1.filter(x => !arr2.includes(x));
}
