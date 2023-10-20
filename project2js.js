let textbox  = document.getElementById("textbox");
textbox.addEventListener("input" , function(){
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
    return elm !="";
    });
    let cleanListLength = cleanList.length;
    console.log(cleanList);
    document.getElementById("word").innerHTML = cleanListLength;
});



// let textbox = document.getElementById("textbox");
// textbox.addEventListener("input" , function(){
//     let text = this.value;
//     let char = text.length;
//     document.getElementById("char").innerHTML = char;
 
//     text = text.trim();                                           // remove krta h extra spaces ko start or end sy !!
//     let words = text.split(" ");                                  // word ko count krta h !!
//     let cleanList = words.filter(function(elm){                   // yh filter hum is lye use krty hain bcuzz jo baqi text k andr mid me spaces dyty hain wo count na ho !!
//     return elm !="";
//     });
//     let cleanListLength = cleanList.length;
//     document.getElementById("word").innerHTML = cleanListLength;
// });
