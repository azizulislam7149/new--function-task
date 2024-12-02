function fanOff(){
    console.log('you will off of the fan switch');
}
fanOff();
function square(number){
    console.log(number)
    const double =number*number
    console.log(double);
}
square(4)

function substraction(number1, number2){
    // const sum = number1+number2
    // console.log(sum)
    const minus = number1 -number2
    console.log(minus);
}
substraction(21,12);
const number3 =40 
const number4 = 20;

substraction(number3,number4);

function tenTimes(tenTimes){
    const result =  tenTimes *10;
    return result
}
tenTimes(12);
const printed = tenTimes(12)
console.log(printed);
function domath(num1,num2){
    const sum  = num1 +num2;
    const substraction = sum - num2;
    const multiple = substraction * num1
    const divided = multiple / 5;
    // return sum;
    // return substraction;
    // return multiple;
    return divided;
}
const output = domath(10,5

)
console.log(output);

function ifElseCondition(evenNumber){
    if(evenNumber % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const outputEven = ifElseCondition(45);
console.log(outputEven);
function isOdd(oddNumber){
  return  oddNumber % 2 === 1?true :false;
}
const isOddNumber = isOdd(34)
console.log('This is odd number',isOddNumber);

function oddOrEvenSized(strSentence){
const length = strSentence.length;
// return length;
return strSentence
}
const outPut = oddOrEvenSized('bangladesh');
console.log('The name name of our country is',outPut);
const outPut1 = oddOrEvenSized('bangladesh');
console.log('the name of country is ', outPut1);

function doubleOrTriple(theLongSentence){
    const lengthNumber =theLongSentence.length;
    // return lengthNumber;
        if(lengthNumber % 2 === 0){
            return true
        } 
        else{
            return false;
        }
}
const cheekString = doubleOrTriple('myNameIsAzizulIslam');
console.log('cheek the output string',cheekString);

function conditionalNumberOrString(doDouble, triple){
    if(triple=== true){
        const result = doDouble *2;
        return result ;
    }
    else{
       
       const result1 =doDouble * 3; 
       return result1

    }
}
console.log(conditionalNumberOrString(6,true));
console.log(conditionalNumberOrString(6,false));

function numberOfElements(aziz){
const lengthAziz = aziz.length;
const fullArray = aziz;
return fullArray;
// return lengthAziz;
}
console.log(numberOfElements([1,2,4 ,5 ,6, 10,'aziz','islam']));


// function sumOfNumbers(numbers){
    
//     let sum =  0;
//     for(const number of numbers){
//         sum = sum + number;
//         const length = numbers.length;
//         const average = sum / length;
        
        
//         return average
//     }
// }
// const numbs1 =[12, 2, 5, 87, 0, 45]
// const callSumOfNumbers = sumOfNumbers(numbs1)
// console.log('sum of numbers an array',callSumOfNumbers,)
// console.log(sumOfNumbers('Average of the number',average))


// function calculateAverage(numbers) {

//     if (numbers.length === 0) return 0; // Avoid division by zero
//     const total = numbers.reduce((sum, number) => sum + number, 0);
//     return total / numbers.length;
// }
// const numbs1 = [12, 2, 5, 87, 0, 45];
// const average = calculateAverage(numbs1);
// console.log("Average:", average);

function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = `${feetNumber} fit ${inchRemaining} inch`;
    return result;
}
const inchToFeetConvert = inchToFeet(70);
console.log(inchToFeetConvert);

function fitConvertion (inch){
    const result = inch / 12 ;
    return result;
}
const outPutConvert = fitConvertion(34);
console.log( '34 inch is a ', outPutConvert.toFixed(2));

function mileToKiloMeter(mile){
    const kilo = mile * 1.609344 ;
    return kilo;
}
const kiloResult = mileToKiloMeter(48);
console.log(kiloResult);

function kiloToMiles (kilo){
    const mile = kilo * 0.6213712;
    return mile
}
const mileResult = kiloToMiles(62);
console.log(mileResult);

function isleafYear(year){
   if(year % 4 === 0){
    return true;
   }
   else{
    return false ;
   }
}
console.log(isleafYear(2036));

function secondLeafYear(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true ;
    }
    else{
        return false ;
    }
}
const cheekSecondLeafYear =secondLeafYear(2053);
console.log(cheekSecondLeafYear);
// task - 01
function multiple (a, b, c, d){
    const multification = a * b * c * d ;
    return multification;
}
const multipleResult = multiple(2,2,2,2);
console.log('four parameter result',multipleResult);
// Task - 02
function oddAndEven(number){
   if(number % 2 === 1){
    let result = number * 2;
    return result
   } 
   else{
    const result = number / 2;
    return result
   }
}
const oddEven = oddAndEven(7);
const oddEven1 = oddAndEven(76);
console.log('get result',oddEven);
console.log('get next result',oddEven1);

function averageNumber(){
    const numbers = [3, 32, 389, 34];
    const size = numbers.length
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    const avg = sum /size;
    return avg;
}
const averageOutput = averageNumber()
console.log('average of the number',averageOutput);

function oddOrEven(number){

return number % 2 === 0 ? 'evevn': 'odd';
}
const oddOreven =oddOrEven(7);
console.log('out put odd or even=',oddOreven);
function countZero(){
    const str = '0101010101010';
    const contStr = str.split('0').length -1;
    return contStr ;
}
const resultOutPut = countZero();
console.log(resultOutPut);