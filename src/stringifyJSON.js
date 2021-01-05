// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var result = '';
  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i + 1 < obj.length) {
        result += ',';
      }
    }
    result += ']';
  } else if (typeof obj === 'object') {
    result += '{';
    var keyCount = 0;
    for (var key in obj) {
      if (key !== 'undefined' && key !== 'functions') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        if (keyCount < Object.keys(obj).length - 1) {
          result += ',';
        }
      }
      keyCount++;
    }
    result += '}';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    result = obj.toString();
  }
  if (obj === null) {
    result = 'null';
  }
  if (typeof obj === 'string') {
    result += `"${obj}"`;;
  }
  return result;
};