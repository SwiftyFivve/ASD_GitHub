// JavaScript Document

//Jordan Weaver
//ASD Week 2 12/13
$('#register').on('pageinit',function(){
	$('#display ul#main-list').html('');
	
	if(localStorage.length === 0){
		$('#display ul#main-list').append('<li>LocalStorage seems to be empty.</li>');
	}else{
		for(var i=0, len=localStorage.length; i<len; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var myObj = JSON.parse(value);
			console.log(myObj);
			for(var n in myObj){
				
			}
	
			
			
		}
	
		//If Storage is NOT empty
		//Loop through localStorage
		//2. For each item in localStorage return the key.
		//3. Pull the data of the item for THAT key
		//4. Json.parse the retrieved data.
		//5. Loop through that data and display it on the page.
		//Just like MIU app.
	
		var html = '';
			html += '<li id"' + myObj.key + '">';
			html += '<ul>';
			html += '<li>' + myObj.fname + '</li>';
			html += '<li>' + myObj.lname + '</li>';
			html += '<li>' + myObj.state + '</li>';
			html += '<li>' + myObj.email + '</li>';
			html += '<li><a href="#" class="edit" data-key="' + myObj.key + '">Edit</a></li>';
			html += '<li><a href="#" class="delete" data-key="' + myObj.key + '">Delete</a></li>';
			html += '</ul></li>';
		
		$('#display ul#main-list').append(html);
		
		
	}
	
});


$('#submit').on('click',function(e){
	e.preventDefault();
	
		
	// Key	
	if($('#key').val() == ""){
		var id	= Math.floor(Math.random()*10000001);
	}else{
		id = $('#key').val();
	};
		
	var item				= {};
		item.key			=["key", $('#id')];
		item.fname			=["First Name: ", $('#firstname').val()];
		item.lname			=["Last Name: ", $('#lastname').val()];
		item.state			=["State: ", $('#usstate').val()];
		item.email			=["Email: ", $('#email').val()];
			
		//Save Data into Local Storage:
		localStorage.setItem(id, JSON.stringify(item));
		
		$(".delete").on("click", deleteItem);
		$(".edit").on("click", editItem);
		
	var editKey = "";
console.log(editKey);

window.location.reload();
});

//Edit


var editItem = function(){
		console.log(key);
    var currKey = $(this).data('key');
		console.log(currKey);
    var value = localStorage.getItem(currKey);
        console.log(value);
	var item = JSON.parse(value);
	
		$('#firstname').val(item.fname);
		$('#lastname').val(item.lname);
		$('#usstate').val(item.state);
		$('#email').val(item.email);
	
editKey = key;
    $("#submit").data("key",editKey);
    console.log($("#submit").data("key"));
	window.location.reload();
	};				
				
					
//Delete function	
	var  deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this contact?");
     	if(ask){
             localStorage.removeItem($(this).parent().attr("data-key"));
             alert("Contact was deleted!");
             window.location.reload();
     	}else{
             alert("Contact was not deleted.");
     	}
	};

	
//JSON AJAX	

	
	
	
var jsonFun = function(e){
	e.preventDefault();
	console.log('Inside function')
	$.ajax({
		url: "xhr/data.json",
		type: "GET",
		dataType:"json",
		success: function(result){
			console.log(result);
		},
		error: function (error, parseerror) { 
		console.log(error, parseerror); 
		}
		
		
	});
	
};
	
$('#displayLinkJSON').on('click', jsonFun);
	//e.preventDefault();	
	
	
	
	//XML AJAX	

var xmlFun = function(){
	console.log('Inside function')
	$.ajax({
		url: "xhr/data.xml",
		type: "GET",
		dataType:"xml",
		success: function(result){
			console.log(result)
			console.log('success');
		},
		error: function (error, parseerror) { 
		console.log(error, parseerror); 
		}
	});
	
};
	
$('#displayLinkXML').on('click', xmlFun);
	//e.preventDefault();	

