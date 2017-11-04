Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = extraInts;
function extraInts(a, b) {
  var arr1 = void 0,
      arr2 = void 0;
  if (a.length > b.length) {
    arr1 = a;
    arr2 = b;
  } else {
    arr2 = a;
    arr1 = b;
  }
  return arr1.filter(function (x) {
    return !arr2.includes(x);
  });
}
//# sourceMappingURL=C:\Users\Public\Documents\web_develop\Andela-Challenge\build\js\extraInts.js.map