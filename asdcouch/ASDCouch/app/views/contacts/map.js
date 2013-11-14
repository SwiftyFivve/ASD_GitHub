function(doc) {
  if (doc._id.substr(0, 9)=== "contact :") {
    emit(doc._id.substr(10),{
    	"firstname":doc.firstname,
		"lastname":doc.lastname,
		"state":doc.state,
		"email":doc.email
	});
  }
};