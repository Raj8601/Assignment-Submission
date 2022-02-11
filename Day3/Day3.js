//Array of 5 object
console.log("Array of 5 object");
var arr=[
	{
		name:"Ravi",
		car:"BMW",
		city:"Mumbai",
		role:"Accountants"
	},
	{
		name:"Kishan",
		car:"Ferrari",
		city:"Ahmedabad",
		role:"MD"
	},
	{
		name:"Raj",
		car:"Hyundai",
		city:"Hyderabad",
		role:"Employee"
	},
	{
		name:"Shobhit",
		car:"Mahindra",
		city:"Bangalore",
		role:"HR"
	},
	{
		name:"Seema",
		car:"Toyota",
		city:"Delhi",
		role:"CEO"
	}
]
console.log(arr[4].role);



//print properties using for loop
console.log("\nprint properties using for loop");
for(var i=0;i<arr.length;i++)
{
	console.log(arr[i].name);
}


console.log("\nprint properties using forEach loop");
arr.forEach(function(x,i){
	console.log(x.name);
})