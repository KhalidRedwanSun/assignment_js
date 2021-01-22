

// task 1  kilometerToMeter


function  kilometerToMeter(kilo){
    if(kilo<0){
        return "Distance value can not be negetive "
        
    }
    else if(typeof(kilo)=="string" ){
        return "please enter a numeric value not string"


    }

    else{


    

        var meter=kilo*1000;
        return meter;

    }

}

input=  kilometerToMeter(5);
console.log(input);




// task2 budgetCalculator

function budgetCalculator(watch,phone,laptop){
    if(watch<0 || typeof(watch)=="string"){
        return "Please enter positive numeric value in number of watch"
    }

    else if(phone<0 || typeof(phone)=="string"){
        return "Please enter positive numeric value in number of phone"


    

    }

    else if(laptop<0 || typeof(laptop)=="string"){
        return "Please enter positive numeric value in number of laptop"

    }


    else{
        var budget=watch*50+phone*100+laptop*500 ;
        return budget;

    }

}

var returnMyBudget = budgetCalculator(9,2,1);
console.log(returnMyBudget);



// Task 3 hotelCost


function hotelCost(days){

    if (days<0){
        return "number of days can not be negetive"
    }

    else if(typeof(days)=="string"){
        return "number of days can not be string"

    }

    else{

    var totalCost=0;
        for(var i=1;i<=days;i++){
            if (i<=10){
                totalCost=totalCost+100;
            }

            else if (i>10 && i<=20){
                totalCost=totalCost+80;
            }

            else if (i>20){
                totalCost=totalCost+50;
            }




        }

        return totalCost;

    }
}

var hotelFare=hotelCost(9);
console.log(hotelFare);



// TASK 4   megaFriend



function megaFriend(array){

    var stringCount=0;

    for (i=0; i<array.length;i++){
        if (typeof(array[i])=="string"){
            stringCount=stringCount+1;
        }
        
        
    }


    if (stringCount==array.length){
        
        var largerName="";
        for (i=0;i<array.length;i++){
            if( array[i].length>largerName.length){
                largerName=array[i];

            }
        }

        return largerName;


    }

    else{
        return "Your friends  name must be in string";
    }






}

var largerNamedFriend=( megaFriend(["khalid","Sun","Redwan","hossain","jasonRoyce"]));
console.log(largerNamedFriend);


