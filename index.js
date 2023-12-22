const obj1 = {
    name: "Person1",
    age: 5
  };
      
  const obj2 = {
    age: 6,
    name: "Person1"
  };
      
//   if(JSON.stringify(obj1) === JSON.stringify(obj2))
//         console.log("true");
//   else
//         console.log("false");
  // false
      
  // console.log( _.isEqual(obj1, obj2) );
  // true

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal "+flag);
  