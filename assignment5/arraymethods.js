let array=["shehana","nijam","mehtab","manha"];
console.log("given array",array);
console.log("sorted array:",array.sort());
console.log("reverse array:",array.reverse());
array.push("hydhar");
console.log("pushed item:",array);
array.push("shylaja");
console.log("pushed item:",array);
array.push("nizar");
console.log("pushed item:",array);
array.pop();
console.log("remove last item:",array);
array.shift();
console.log("remove 1st item:",array);
array.unshift("shehana");
console.log("add item at index0:",array);
var c=array.join("-");
console.log("joined array:",c);
var a=["pareeth","kadeeja","shamna"];
var d=a.concat(array);
console.log("concatenated array:",d);

var sli=d.slice(0,4);
console.log("sliced 1st 4 elements:",sli);
console.log("array elements:",d);

var c = d.splice(2 , 3);
console.log("delete 3 elements from index2",c)
