// //comparision of objects:
// let obj1={name:"person1",age:5};
// let obj2={age:5,name:"person1"};


// console.log((obj1.name,obj1.age)==(obj2.name,obj2.age));
//_______________________X_____________________________
//XMLHttpRequest---------------------:
// var request=new XMLHttpRequest();
// request.open("GEt","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
    
//     for (let i=0;i<result.length; i++){
//         console.log(result[i].flag)
//     }
    

// }
//___________________________X__________________________~
//XMLHTTPRequest-----------------------:
var request=new XMLHttpRequest();
request.open("GEt","https://restcountries.com/v3.1/all");f
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    
    for (let i=0;i<result.length; i++){
        console.log(result[i].capital[0],result[i].region,result[i].subregion,result[i].population)
    }
    

}

