function change(val, obj){
	if(val=='homeTag'){
		homeTag.style.color='red';
		projects.style.color='white';
	}else if(val=='projects'){
		projects.style.color='red';
	}else if(val=='about'){
		about.style.color='red';
		projects.style.color='white';
	}
}
function change2(val, obj){
	if(val=='homeTag'){
		homeTag.style.color='white';
		projects.style.color='red';
	}else if(val=='projects'){
		projects.style.color='red';
	}else if(val=='about'){
		about.style.color='white';
		projects.style.color='red';
	}
}