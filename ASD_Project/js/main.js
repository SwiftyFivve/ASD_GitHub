// JavaScript Document

//Jordan Weaver
//ASD Week 2 11/13

$('#signupform').on("pageinit",function(){
	});		


$('#submit').on('click', function(){
	console.log(key);
function storeData(key){
		//If there is no key this means this is a brand new item and we need a new key
		console.log(key);
		if($('key')){
			var id			= Math.floor(Math.random()*10000001);
		}else{
			id = key;
		};
		
		var item				= {};
			item.fname			=["First Name", ('#firstname').value];
			item.lname			=["Last Name", $('#lastname').value];
			item.state			=["State", $('usstate').value];
			item.email			=["Email", $('email').value];
			
			console.log(key);
			//Save Data into Local Storage:
			localStorage.setItem(id, JSON.stringify(item));
			alert("Goal Saved!");
			window.reload(5);
			
		
	
}
});


//	function loadData(){
	//	$('#fname').val(localStorage.fname);
	//}
	
//	function saveData(){
//	localStorage.fname = $('#fname');
	//	localStorage.lname = $('#lname').val();
	//	localStorage.state = $('state');
	//	localStorage.email = $('email');
	//}