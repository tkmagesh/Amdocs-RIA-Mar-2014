var products = [
	{id:1,name:"pen",cost:10,units:70,category:1},
	{id:7,name:"hen",cost:17,units:10,category:2},
	{id:3,name:"ten",cost:12,units:20,category:1},
	{id:9,name:"den",cost:11,units:30,category:2},
	{id:2,name:"zen",cost:19,units:11,category:1},
	{id:6,name:"len",cost:20,units:9,category:2}
]
/*
sort
filter
min
max
countBy
sum
any
all
groupBy
join

*/

function sort(list){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if(list[i].id > list[j].id){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
}

function sort(list,attrName){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if(list[i][attrName] > list[j][attrName]){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
}

function sort(list,valueSelectorFn){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if(valueSelectorFn(list[i]) > valueSelectorFn(list[j])){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
}

//Using comparer functions
//Assumption : comparer Fn returns
//	0 : both are equal
//  -1 : first < second
//  1 : first > second

function sort(list,comparerFn){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if(comparerFn(list[i],list[j]) > 0){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
}


//Write the "filter" function based on the following usage example

//Solution
function filter(list,predicateFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    if (predicateFn(list[i]))
       result.push(list[i]);
  return result;
}


var cheapProducts = filter(products,function(p){ return p.cost < 50;})
console.table(cheapProducts) // will display all the products that cost less than 50

function min(list,valueSelectorFn){
   var result = Number.MAX_VALUE;
   for(var i=0;i<list.length;i++){
     var currVal = valueSelectorFn(list[i]);
     if (currVal < result) result = currVal;
   }
   return result;
}

function max(list,valueSelectorFn){
   var result = Number.MIN_VALUE;
   for(var i=0;i<list.length;i++){
     var currVal = valueSelectorFn(list[i]);
     if (currVal > result) result = currVal;
   }
   return result;
}

function sum(list,valueSelectorFn){
   var result = 0;
   for(var i=0;i<list.length;i++){
     result += valueSelectorFn(list[i]);
   }
   return result;
}

function countBy(list,predicateFn){
	var result = 0;
	for(var i=0;i<list.length;i++)
		result += predicateFn(list[i]) ? 1 : 0;
	return result;
}