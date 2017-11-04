Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = pigLatin;
function pigLatin(str) {
  var arr = [];
  str.split(' ').forEach(function (word) {
    return arr.push('' + String(word.substr(1)) + String(word[0].toLowerCase()) + 'ay');
  });
  arr[0] = '' + String(arr[0].charAt(0).toUpperCase()) + String(arr[0].substr(1));
  return arr.join(' ');
}
//# sourceMappingURL=C:\Users\Public\Documents\web_develop\Andela-Challenge\build\js\pigLatin.js.map