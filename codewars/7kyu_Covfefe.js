function covfefe(str){
	if(str.toLowerCase().includes('coverage')) {
		return str.replace(/(c)overage/gi, '$1ovfefe');
 	} else {
		return str + ' covfefe';
	}
}