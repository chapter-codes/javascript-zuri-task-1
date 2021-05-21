

/* A FUNCTION WHICH CONVERTS TEMPERATURE IN  DEGRE FARENHEIT TO DEGREE CELCIUS */

function convertFahrToCelcius(fahrTemp){

    if(Number(fahrTemp)==fahrTemp){

        const celciusTemp=(Number(fahrTemp)-32)*(5/9)
        console.log(`${celciusTemp.toFixed(4)} deg C`)
    }

    else{
   console.log (`"${JSON.stringify(fahrTemp)}" is not a valid number but a/an ${typeof(fahrTemp)}`)
    }

}

convertFahrToCelcius(200)









/** A FUNCTION WHICH TAKES IN A NUMBER(1, 5, 30.....etc.) AS PARAMETER, GENERATES A SERIES OF NUMBER BY +1 INCREMENT EACH TIME FROM 1  UP TO THAT NUMBER. AND THEN, ON EACH INCREEMENT,  CONVERTS THE NUMBER TO A STRING IF THE NUMBER IS DIVISIBLE WITHOUT A REMAINDER  BY EITHER OF THIS DIVISORS- (2, 3, 5) , OR IF IT IS DIVISIBLE BY AT LEAST TWO NUMBERS FROM(2,3,5), OR IF IT IS DIVISIBLE BY ALL OF THEM(2, 3, 5). THEN RETURNS AN ARRAY OF THE SERIES ON EACH INCREMENT */

 async function checkYuGiOh(n){

    if(Number(n)==n){
            let currentValue=1;
            const  arrayData= []

           while(currentValue
            <=n){
            //    console.log(currentValue)
                if (currentValue%2==0 || currentValue%3==0 || currentValue%5==0){
                    
                    const yuGiOhValue= await convertNumberToString(currentValue) 
                    arrayData.push(yuGiOhValue)
                  }

                  else{
                      arrayData.push(currentValue)
                  }
                
                currentValue++
            }

          return arrayData
            
    }

   else{
    return `invalid parameter: ${JSON.stringify(n)}`
   }
}


checkYuGiOh(10)
.then(arrayData=>console.log(arrayData))





/*
This function sets the string value of a number if divisible by either  2, 3, 5 ,  or by at least two of them or by all of them without a remainder.

Note: this function is being called inside the " checkYuGiOh" function.
*/

function convertNumberToString(i){
    let val;

    if((i%2)==0){
        val="yu"
    }

    if(i%3==0){
        if(val==undefined){
            val='gi'
        }
        else{
            val+="-gi"
        }
    }

    if(i%5==0){
        if(val==undefined){
            val='oh'
        }
        else{
            val+="-0h"
        } 
    }

    return val
}