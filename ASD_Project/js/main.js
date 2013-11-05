// JavaScript Document

//Jordan Weaver
//ASD Week 2 11/13

$('#signupform').on("pageinit",function(){
	});		


$('#submit').on('click', function(){
	console.log('Click Event works');

function storeData(key){
		console.log('In Store Data');
		 if($('#key').val() == ""){
			var key	= Math.floor(Math.random()*10000001);
		}else{
			var key = $('#key').val();
		};
		
		var item				= {};
			item.fname			=["First Name", $('#firstname').value];
			item.lname			=["Last Name", $('#lastname').value];
			item.state			=["State", $('#usstate').value];
			item.email			=["Email", $('#email').value];
			
			console.log('#key');
			//Save Data into Local Storage:
			localStorage.setItem(key, JSON.stringify(item));
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