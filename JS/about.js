function change(val, obj){
	if(val=='homeTag'){
		homeTag.style.color='red';
		about.style.color='white';
	}else if(val=='projects'){
		projects.style.color='red';
		about.style.color='white';
	}else if(val=='about'){
		about.style.color='red';
	}
}
function change2(val, obj){
	if(val=='homeTag'){
		homeTag.style.color='white';
		about.style.color='red';
	}else if(val=='projects'){
		projects.style.color='white';
		about.style.color='red';
	}else if(val=='about'){
		about.style.color='red';
	}
}

function clearInfo(val,obj){
    if (val == "name" && obj.value == "Name") {
        obj.value = "";
    } else if (val == "email" && obj.value == "Email") {
        obj.value = "";
    } else if (val == "sub" && obj.value == "Subject") {
        obj.value = "";
    } else if (val == "mes" && obj.value == "Message") {
        obj.value = "";
    }
}

function clearCheck(val, obj){
	if(val == "name" && obj.value == ""){
		obj.value = "Name";
	}else if (val == "email" && obj.value == ""){
		obj.value = "Email";
	}else if (val == "sub" && obj.value == ""){
		obj.value = "Subject";
	}else if (val == "mes" && obj.value == ""){
		obj.value = "Message";
	}
}

