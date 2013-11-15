// JavaScript Document

//Jordan Weaver
//ASD Week 2 11/13
$(function(){	
	$.ajax({
		url: "xhr/data.xml",
        type: "GET",
        dataType: "xml",
        success: function(result){
        console.log(result);
		}
	});
	});
		
	$(function(){			
	$.ajax({
		url: "xhr/json.js",
        type: "GET",
        dataType: "json",
        success: function(result){
        console.log(result);
		}
	});	
	});

$('#signupform').on("pageinit",function(){
	
	$(function(){	
	$.ajax({
		url: "xhr/data.xml",
        type: "GET",
        dataType: "xml",
        success: function(result){
        console.log(result);
		}
	});
	});
		
	$(function(){			
	$.ajax({
		url: "xhr/json.js",
        type: "GET",
        dataType: "json",
        cache: false,
        success: function(result){
        console.log(result);
		}
	});	
	});
					
});		



var autoFillData = function (){
                for(var n in json){
                        var id = Math.floor(Math.random()*1000000);
                        localStorage.setItem(id, JSON.stringify(json[n]));
				}
};



	function toggleControls(n){
		switch(n){
			case "on":
				$('#signupform').css('display', 'none');
				$('#clear').css('display', 'inline');
				$('#review').css('display', 'none');
				
				break
			case "off":
				$('#signupform').css('display', 'block');
				$('#clear').css('display', 'inline');
				$('#review').css('display', 'inline');
				
				break;
			default:
				return false;	
		}
	}


$('#submit').on('click', function(){
	console.log('Click Event works');

		console.log('In Store ');
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
			window.reload(5);
			
 

                
});

$('#review').on('pageinit',function(){
	console.log('In page');
	$("#items").remove();
	$("#list")
			.html('<div><ul></ul></div>')
			.find("div:first")
			.attr("id", "items")
			.css("display", "block")
			.end()
			.find("ul:first")
			.attr("id", "itemsList");
	for(var i=0, len=localStorage.length; i<len; i++){
		console.log(len);
		$('<li><ul></ul></li>').appendTo("#itemsList");
		 var key = localStorage.key(i);
		 console.log(key);
         var value = localStorage.getItem(key);
         var obj = JSON.parse(value);
		 console.log(value);
		 console.log(obj);
		 console.log(value[6]);

$.each(obj, function(key, value){
	console.log(value[0] + " " + value[1]);
	 $("#itemsList li ul")
         .eq(i)
         .append('<li>' + value[0] + ': ' + value[1] + '</li>');
	
		});
		
$("<li><a href='#' class='edit'>Edit Content</a><br><a href='#' class='delete'>Delete Content</a></li>")
         .appendTo("#itemsList li ul li:last")
         .attr("data-key", key);
                                                                                                                                        
	 }
	 $(".edit").on("click", editItem);
	 $(".delete").on("click", deleteItem);
	
	
});


var editKey = "";
console.log(editKey);

 
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
 		
	
var editItem = function(){
                var key = $(this).parent().data('key');
				console.log(key);
                var value = localStorage.getItem(key);
                console.log(value);
				var item = JSON.parse(value);
				toggleControls("off")
				$('#firstname').val(item.fname[1]);
				$('#lastname').val(item.lname[1]);
				$('#usstate').val(item.state[1]);
				$('#email').val(item.email[1]);
				
				
				
				editKey = key;
                $("#submit").data("key",editKey);
                console.log($("#submit").data("key"));
				
				
};
                
				


