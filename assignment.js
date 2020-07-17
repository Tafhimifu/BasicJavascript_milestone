//Problem No-01: Javascript source code for Converting feet to mile source code..........

       //function declaration;
       function feetToMile(feet_Value){
        //if input is not a number;
        if(typeof feet_Value == "string"){
            console.log("String data can't be converted.");
             
        }
        //if input is a number;
       else{
           
           if(feet_Value>0){
            var mile_Value=(feet_Value/5280);
           }
           else{
               console.log("Length is scaler ");
           }
       }
    return mile_Value; //return value when function will be called;
    
    }
    console.log(feetToMile(0.0000001));//here function is called and printed output;
    console.log(feetToMile(-3))
    console.log(feetToMile("ki"))
    console.log(feetToMile("89"))
    console.log(feetToMile(10))

            //--------------------------------------------------------------------------------------

                    //Problem No-02:Javascript source code for wood calculation...........


      //function declaration.....
function woodCalculator(Chair_number,Table_number,Bed_number){
    //if input is a string;
    if(typeof Chair_number == "string" || typeof Table_number == "string" || typeof Bed_number == 'string'){
        console.log("String data can't be calculated.");
         
    }
    //if input is a number;
   else{
         //if input is integer and greater then zero;
       if(Number.isInteger(Chair_number) && Chair_number>0 && Number.isInteger(Table_number) &&Table_number>0 && Number.isInteger(Bed_number) && Bed_number>0){
        var total_chairWoods = Chair_number*1;
        var total_tableWoods = Table_number*3;
        var total_bedWoods = Bed_number*5;
        var total_woods= total_chairWoods + total_tableWoods + total_bedWoods;
       }
          //if input is negative and float;
       else{
           console.log("Negative and float number furniture doesnot exist.");
       }
   }
return total_woods; //return value when function will be called;

} 
   //here function is called and printed sample output;
console.log(woodCalculator('90','10',9));
console.log(woodCalculator(10,-2,3));
console.log(woodCalculator(10,2.5,3));

        //-----------------------------------------------------------------------------------------


                 //Problem NO-03:Javascript source code for bricks calculation.....


    //function declaration....
    function brickCalculator(NumberOfFloor){
        //if input is not a number;
        if(typeof NumberOfFloor == "string"){
            console.log("String data can't be converted.");
             
        }
        //if input is a number;
       else{
           
           if(Number.isInteger(NumberOfFloor) && NumberOfFloor>0){
               if(NumberOfFloor<=10){
                   var total_bricksNumber = NumberOfFloor*15000;
               }
               if(NumberOfFloor<=20){
                total_bricksNumber = (NumberOfFloor-10)*12000 + 150000;
               }
               else{
                total_bricksNumber = (NumberOfFloor-20)*10000+270000;
               }
            
           }
           else{
               console.log("Negative and float bricks can't be supplied.");
           }
       }
    return total_bricksNumber; //return value when function will be called;
    
    }
      //here function is called and printed output;
    console.log(brickCalculator("bat"));
    console.log(brickCalculator("2"));
    console.log(brickCalculator(10.5));
    console.log(brickCalculator(17));
    console.log(brickCalculator(26));

        //-----------------------------------------------------------------------------------------

    
                       //Problem No-04:Javascript source code for smallest string data......


var tiny_array=[];//declaration of empty array to hold small data;
//declaration of function......
function tinyFriend(friendNames_array){
    //checking- if given data is a array;
if(Array.isArray(friendNames_array)){
  var smallest_name=friendNames_array[0].length;
    //loop for find out small data
  for(var i=0;i<friendNames_array.length;i++){
      if(smallest_name>friendNames_array[i].length && isNaN(friendNames_array[i])){ //isNaN checks-is the array element a alphabet containing string?
          smallest_name =friendNames_array[i].length;
      }
      else{
          continue;
      }
  }
      //loop for pushing small data on empty array;
  for(var k=0;k<friendNames_array.length;k++){
      if(friendNames_array[k].length== smallest_name){
          var index=tiny_array.indexOf(friendNames_array[k].length); //removing duplicate small data;
          
          if(index==-1){
              tiny_array.push(friendNames_array[k]);
          }
          
       }
  }
    //return function condition for one small data;
  if(tiny_array.length == 1){
      return tiny_array[0];
      
    
  } 
     //return function conditon for more small data
  else{
       return tiny_array;
       
   }
   
}  
 //if given data is not a array;
else{
  console.log("Number data isnot allowed.Only Array is allowed.");
     
 }
}
//function calling and give output for sample data;
console.log(tinyFriend(["kata","Rit","10"])) ;
console.log(tinyFriend(["Jeck","Richi","Mili","Yeho",9]));
console.log(tinyFriend[10,20,30,9]);
 
   //---------------------------------------------------------------------------------------------