function addContent(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    var message;
    if (hourNow > 18) {
    greeting = 'Good evening!';
    } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
    greeting = 'Good morning!';
    } else {
    greeting = 'Welcome!';
    }
    message = '<h3>' + greeting + '<h3>'
    return document.write(message);
}
function askName(){
    var username = prompt('What is your name?');
    return document.write('<h3>' + 'Nice to meet you, ' + username + '</h3>');
}

function askPreference(){
    var preference = prompt('Do you wear a belt?');
    var message;
    while(preference !== 'yes' && preference !== 'no'){
        preference = prompt('Do you wear a belt? PLEASE ANSWER \"yes\" or \"no\"');
    }
    if (preference === 'yes') {
    message = 'Great! You\'ve come to the right place.';
    } else if (preference === 'no') {
    message = 'Don\'t leave your pants hanging! We can help.';
    } else {
    message = 'Everyone deserves a great belt!';
    };
    return document.write('<h3>' + message + '<h3>');
}

function howMany(){
    var count = prompt('How many belts would you like?');
    while (count === '' || isNaN(count)){
        var count = prompt('How many belts would you like? ENTER A NUMBER!');
    }
    return count;
}
function showOrder(){
    var message = askPreference();
    var total = howMany();
    result = '';
    for (var i = 0; i < total; i++){
        result = result + '<p>' + message + '</p>';
    }
return document.write(result);
}