module.exports = function check(str, bracketsConfig) {
  let checker = true;
  let open = bracketsConfig.map(a => a[0]);
  let close = bracketsConfig.map(a => a[1])
  let stack = str.split('').reduce(function (accum, cur, i) {
    // check the first bracket in the array is not the closing one
    if (accum.length == 0 && close.includes(cur) && !open.includes(cur)) checker = false
    if (open.includes(cur)) {
      if (close.includes(cur) && close.indexOf(accum[accum.length-1])>=0 & accum[accum.length-1] == cur) {
        accum.pop(cur)
        return accum
      } 
      accum.push(cur)
        return accum  
    } else {
      if (close.indexOf(cur) == open.indexOf(accum[accum.length-1])) accum.pop(cur)
        return accum
    }
  }, []);   
  return stack.length == 0 ? checker : false  
  
}
