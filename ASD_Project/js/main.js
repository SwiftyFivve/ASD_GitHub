// JavaScript Document

//Jordan Weaver
//ASD Week 2 11/13

$('#signupform').on("pageinit",function(){
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
				$('#signupform').style.display = "none";
				$('#clear').style.display =  "inline";
				$('#displayLink').style.display = "none";
				$('#addNew').style.display = "inline";
				break
			case "off":
				$('#signupform').style.display = "block";
				$('#clear').style.display =  "inline";
				$('#displayLink').style.display = "inline";
				$('#addNew').style.display = "none";
				$('#items').style.display = "none";
				break;
			default:
				return false;	
		}
	}




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
			
			//Save Data into Local Storage:
			localStorage.setItem(key, JSON.stringify(item));
			window.reload(5);
			
			console.log(localStorage.getItem(key));
			console.log(localStorage.getItem(fname));
		
	var getData = function(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage, so default data was added.");
			console.log(getData);
			autoFillData();

		};
		
		$("#items").remove();
		$("#display")
			.html('div><ul></ul></div>')
			.find("div:first")
			.attr("id", "itms")
			.css("display", "block")
			.end()
			.find("ul:first")
			.attr("id", "itmesList");
		for(var i=0, len=localStorage.length; i<len; i++){
			console.log(len);
		};
};
});

