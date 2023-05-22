var readlineSync=require("readline-sync");
let x= readlineSync.question("enter a limit: ");
x=parseInt(x);
let sum=0; 
for(let i=1;i<=x;i++)
{
    if(i%2)
    {
     sum=sum+i;

    }
}
console.log("sum of odd numbers: ",sum);