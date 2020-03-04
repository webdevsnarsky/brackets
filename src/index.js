module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let result;
  let arr = bracketsConfig.flat();
  
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if(el == '(' || el == '{' || el == '[' || el == '|' && stack[stack.length - 1] != '|') {
      stack.push(el);
    } else {
      if (stack.length == 0) {
        return false;
      }
      if (el == ')' && stack[stack.length - 1] != '(' || 
      el == '}' && stack[stack.length - 1] != '{' || 
      el == '|' && stack[stack.length - 1] != '|') {
        return false; 
      }
      stack.pop();
    }

  }
  return (stack.length == 0);
}
