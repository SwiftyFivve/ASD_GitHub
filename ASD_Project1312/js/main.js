// JavaScript Document

//Jordan Weaver
//ASD Week 2 12/13



$('#submit').on('click',function(e){
	e.preventDefault();
	
	
	if($('#key').val() == ""){
		var id	= Math.floor(Math.random()*10000001);
	}else{
		var id = $('#key').val();
	};
		
		
	var myObj = {};
		myObj.key = key;
		myObj.fname = $('#firstname').val();
		myObj.lname = $('#lastname').val();
		myObj.state = $('#usstate').val();
		myObj.email = $('#email').val();
		console.log(myObj);
		
		
	var html = '';
		html +='<li id"' + myObj.key + '">';
		html += '<ul>';
		html += '<li>' + myObj.fname + '</li>';
		html += '<li>' + myObj.lname + '</li>';
		html += '<li>' + myObj.state + '</li>';
		html += '<li>' + myObj.email + '</li>';
		html += '<li><a href="#" class="edit">Edit</a></li>';
		html += '</ul></li>';
		
		$('#display ul#main-list').append(html);
		
		
		
	if($('#key').val() == ""){
		var id	= Math.floor(Math.random()*10000001);
	}else{
		var id = $('#key').val();
	};
		
	var item				= {};
		item.fname			=["First Name", $('#firstname').val()];
		item.lname			=["Last Name", $('#lastname').val()];
		item.state			=["State", $('#usstate').val()];
		item.email			=["Email", $('#email').val()];
			
		//Save Data into Local Storage:
		localStorage.setItem(id, JSON.stringify(item));
		
	$('.edit').on('click',function(e){
		e.preventDefault();
		
		
		//saveData(currKey);
		 var currKey = $(this).data(key);
				console.log(currKey);
                var value = localStorage.getItem(currKey);
                console.log(value);
				var item = JSON.parse(value);
					
				
				
				
				editKey = key;
                $("#submit").data("key",editKey);
                console.log($("#submit").data("key"));
				
		
	});
			
		
	
	
});