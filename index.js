// this is a function of saturday activity with a default
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(firstParam = "go to the office") {
    return `This Monday, I will ${firstParam}.`
};

function wrapAdjective(adjective = "*") {
    return function(message) {
        return`You are ${adjective}${message}${adjective}!`
    };

}