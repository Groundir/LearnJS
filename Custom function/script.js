function division(num){
	for(var i = 2; i < num; i++){
		if(num % i == 0){
			return true;
		}
	}
	return false;
}
var har = [3, 5, 7, 9, 6];
console.log(division(3));


/*var str ='abcde abcde abcde';
var newArr = [];

var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
	newArr.push(ucfirst(arr[i]));
}

var newStr = newArr.join(' ');
alert(newStr);

function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}*/

/*var text = "abcde abcde abcde";
var nea = [];
function ucfirst(){
 
}*/

var arr = [1, 2, 3, 3, 3];
arr.length = 3;
console.log(arr);