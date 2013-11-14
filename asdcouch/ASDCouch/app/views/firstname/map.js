function(doc){
	if (doc._id.substr(0,10)==="firstname:"){
	emit(doc._id),{
	"lastname":doc.lastname,
	"state":doc.state,
	"email":doc.email
	}
	}
};