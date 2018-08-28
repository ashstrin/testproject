/*
fetch("data/weather.json").then(function(response){
	return response.json();
})
.then(function(data){
	var weatherData = data;
})
*/
function show(){
var app = document.querySelector("#app");
var arr = ["Dave", "James", "Misty", "Jane"];
//for(arrEach of arr){
	//app.innerHTML = arrEach;
//}
for(var i = 0; i < arr.length; i++){
	app.innerHTML = arr[i] + "<br>";
	//document.write(arr[i] + " ");
	console.log(arr[i]);
		}
}
show();