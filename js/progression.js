export default function progression(start, end, interval = 3) {
  const [arithProgress, geomProgress] = [[start], [start]];
  for (let count = start; count <= end;) {
    arithProgress.push((count += interval));
  }
  for (let count = start; count <= end;) {
    geomProgress.push((count *= interval));
  }
  arithProgress.pop();
  geomProgress.pop();

  return `${arithProgress}, ${geomProgress}`;
}
