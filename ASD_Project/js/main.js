// JavaScript Document

//Jordan Weaver
//ASD Week 2 11/13

$('#signupform').on("pageinit",function(){
	});		


$('#submit').on('click', function(){
	console.log('Click Event works');

		console.log('In Store Data');
		 if($('#key').val() == ""){
			var key	= Math.floor(Math.random()*10000001);
		}else{
			var key = $('#key').val();
		};
		
		var item				= {};
			item.fname			=["First Name", $('#firstname').val()];
			item.lname			=["Last Name", $('#lastname').val()];
			item.state			=["State", $('#usstate').val()];
			item.email			=["Email", $('#email').val()];
			
			console.log('#key');
			//Save Data into Local Storage:
			localStorage.setItem(key, JSON.stringify(item));
			window.reload(5);
			
			
			var firstName = localStorage.getItem('fname');
			firstName = "<strong>First Name:</strong>" + firstName;
			$("#display ul").append('<li>' + firstName + '</li>');
			
			var lastName = localStorage.getItem('lname');
			lastName = "<strong>Last Name:</strong>" + lastName;
			$(".display ul").append('<li>' + lastName + '</li>');
			
			var state = localStorage.getItem('state');
			state = "<strong>State:</strong>" + state;
			$(".display ul").append('<li>' + state + '</li>');
			
			var email = localStorage.getItem('email');
			email = "<strong>Email:</strong>" + email;
			$(".display ul").append('<li>' + email + '</li>');
			
			console.log(firstName + lastName + state + email);

});

