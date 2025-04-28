function capitalize(str){
    if (str.length >= 1){
    return str.charAt(0).toUpperCase() + str.slice(1); 
    }else{
        return console.log("Please enter a string with at least one character, ideally beginning with a letter."); 
    }
}; 
function reverse(str){
    if ( str.length >= 2){
    return str.split('').reverse().join(''); 
    }else{
     return console.log("Please enter a word or phrase containing more than one character.")
    }
};     
       

function contains(str,substr){
if (str.includes(substr)){
return true 
}else{
    return false
}
}; 

module.exports = {capitalize, reverse, contains};