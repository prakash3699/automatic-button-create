let array=["Red","Blue","Black","Pink","Gray"];
array.forEach(function(a){
	let cnt=document.querySelector(".container");
	let clicked=document.createElement("button");
	
	clicked.innerHTML=a;
	cnt.appendChild(clicked);
	clicked.style.padding="12px";
	clicked.style.margin="12px";
});