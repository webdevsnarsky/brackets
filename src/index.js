module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let result;
  let arr = bracketsConfig.flat();
  
  for (let i = 0; i < str.length; i++) {
    let el = str[i];

    if(el == '(' || el == '{' || el == '[' || el == '|' && stack[stack.length - 1] != '|' 
    || el == '7' && stack[stack.length - 1] != '7' || el == '8' && stack[stack.length - 1] != '8'
    || el == '1' && stack[stack.length - 1] != '2' || el == '3' && stack[stack.length - 1] != '4' 
    || el == '5' && stack[stack.length - 1] != '6') {
      stack.push(el);
    } else {
      if (el == ')' && stack[stack.length - 1] != '(' || 
      el == '}' && stack[stack.length - 1] != '{' || 
      el == '|' && stack[stack.length - 1] != '|') {
        return false; 
      }
      stack.pop();
    }

  }

  return stack.length == 0;
}
