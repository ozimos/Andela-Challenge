Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = progression;
function progression(start, end) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var arithProgress = [start],
      geomProgress = [start];

  for (var count = start; count <= end;) {
    arithProgress.push(count += interval);
  }
  for (var _count = start; _count <= end;) {
    geomProgress.push(_count *= interval);
  }
  arithProgress.pop();
  geomProgress.pop();

  return String(arithProgress) + ", " + String(geomProgress);
}
//# sourceMappingURL=C:\Users\Public\Documents\web_develop\Andela-Challenge\build\js\progression.js.map