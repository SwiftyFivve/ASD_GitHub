// JavaScript Document

//Jordan Weaver
//ASD Week 2 12/13



$('#submit').on('click',function(e){
	e.preventDefault();
	
	// Date key
	var key = new Date();
		console.log(key);
		
	//My Object	
	var myObj = {};
		myObj.key = key;
		myObj.fname = $('#firstname').val();
		myObj.lname = $('#lastname').val();
		myObj.state = $('#usstate').val();
		myObj.email = $('#email').val();
		console.log(myObj);
		
	//Display	
	var html = '';
		html +='<li id"' + myObj.key + '">';
		html += '<ul>';
		html += '<li>' + myObj.fname + '</li>';
		html += '<li>' + myObj.lname + '</li>';
		html += '<li>' + myObj.state + '</li>';
		html += '<li>' + myObj.email + '</li>';
		html += '<li><a href="#" class="edit">Edit</a></li>';
		html += '<li><a href="#" class="delete">Delete</a></li>';
		html += '</ul></li>';
		
		$('#display ul#main-list').append(html);
		
		
	// Key	
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
		
		$(".delete").on("click", deleteItem);
		$(".edit").on("click", editItem);
	
});



//Edit
	var editItem = function(){
    var key = $(this).data('key');
		console.log(key);
    var value = localStorage.getItem(key);
        console.log(value);
	var item = JSON.parse(value);
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
$('.json').on('click', function(){
	//e.preventDefault();
	console.log('In json click event');
	
	$.ajax({
		url: "xhr/data.JSON",
		type: "GET",
		dataType:"json",
		success: function(result){
			console.log(result)
		},
		error: function (error, parseerror) { 
		console.log(error, parseerror) 
		}
	});
	
	var myObj = {};
		myObj.key = key;
		myObj.fname = $('#firstname').val();
		myObj.lname = $('#lastname').val();
		myObj.state = $('#usstate').val();
		myObj.email = $('#email').val();
		console.log(myObj);
	
});
	
	
