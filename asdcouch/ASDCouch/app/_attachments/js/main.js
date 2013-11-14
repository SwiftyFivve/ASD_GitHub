$('#home').on("pageinit",function(){
	$.ajax({
		"url": "_view/contacts",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, contacts){
				var firstname = contacts.value.firstname;
				var lastname = contacts.value.lastname;
				var state = contacts.value.state;
				var email = contacts.value.email;
				$('#contactlist').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(firstname)
					)
				);
			});
			$('#contactlist').listview('refresh');
		}
	});
});	