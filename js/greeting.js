var today = new Date();
var hour = today.getHours();
var greeting;

if (hour > 18) {
	greeting = 'Good evening!';
} else if (hour > 12) {
	greeting = 'Good afternoon!';
} else if (hour > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}

document.write('<p>' + greeting + '</p>');
