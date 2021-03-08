// 首先 map 函数的入参是个函数 fn
function newMap(fn) {
  console.log('对象里面的方法',this)
  let arr = this;
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i]);
  }
  return newArr
};
Array.prototype.newMap = newMap;
[1,2,3].newMap((item)=>{
  // 考虑如何省略 return
  return item*2
})
