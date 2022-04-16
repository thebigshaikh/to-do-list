const getDay = () =>{
    var today = new Date();
    let currentDate = today.getDay();
    var day;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    day = today.toLocaleDateString("en-US", options);
    console.log(day);
    return day;
};
module.exports.getDay = getDay;



const hello = () =>{
    return "Hello World";
};

module.exports.hello = hello;