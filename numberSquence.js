// Analysis the problem:
// let "n=10" represents a +ve counter fo the  total number of even numbers to be printed
// let "i=2" represents the first even number to be printed

//using a for loop
  /* let n = 10;
 for (let i=2; i<=2*n;i+=2) 
   
    {
        console.log(`Number squence for loop: ${i}`); 
    }*/
 

//using a while loop
let n = 10;
let i = 2;
while (n > 0) {
  console.log(`Number squence while loop: ${i}`);
  n--;
  i += 2;
}

/*using a do while loop
   let n = 10;
   let j=2;
    do
    {   console.log(`Number squence while loop: ${j}`);
        n--;
        j+=2;
            
    }
    while (n>0);*/
