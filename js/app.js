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
    if (preference === 'yes') {
    message = 'Great! You\'ve come to the right place.';
    } else if (preference === 'no') {
    message = 'Don\'t leave your pants hanging! We can help.';
    } else {
    message = 'Everyone deserves a great belt!';
    };
    return document.write('<h3>' + message + '<h3>');
}