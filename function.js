//implementing for each Loop using simple for
var friends=['Joey', 'Monica','Rachel','Chandler','Ross','Phoebe']
for(let i=0; i<friends.length;i++)
{
    document.write(friends[i] + "<br>")
}
//implementing through for Each loop 
friends.forEach(function(friend)
{
    document.write(friend+ "<br>")
}
);
let newArray=[];
//Mapping through for Loop
for(let i=0; i<friends.length; i++)
{ newArray[i]=friends[i] + ' poop'
console.log(newArray[i]);
}
//Using Maps
updatedFriends=friends.map(function(item, index, array)
{
return item+' poop';
});
console.log(updatedFriends);
// reducing functions: Orignial function 
var concatStr=0;
for (i=0; i<friends.length;i++)
{ concatStr+=friends[i];
}
console.log(concatStr);
//reduced function
const reduced_Str=friends.reduce((accumulator,currentValue)=> accumulator+currentValue);
console.log(reduced_Str);
