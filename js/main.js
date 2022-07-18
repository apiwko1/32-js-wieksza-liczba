let num1=2;
let num2 = 5;

let m = wieksza_liczba(num1, num2);
console.log(m);


function wieksza_liczba(x,y){
    let max = y;
    if(x>y){
        max=x;
    }
    return max;
}