function covfefe(str){
	if(str.toLowerCase().includes('coverage')) {
		return str.replace(/coverage/gi, "covfefe");
 	} else {
		return str + ' covfefe';
	}
}