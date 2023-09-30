function validate(){
	var uname, pwd, s1, s2,z;
	uname =document.getElementById("uname");
	pwd =document.getElementById("pwd");

	s1 =document.getElementById("s1");
	s2 =document.getElementById("s2");

	if (uname.value=="") {
		s1.innerHTML="*Must be fill";
	}
	else{
		s1.innerHTML="";
	}
	if (pwd.value=="") {
		s2.innerHTML="*Must be fill";
	}

	else{
		s2.innerHTML="";
	}
	if ((uname.value=="") || (pwd.value=="")) {
		z=false;
	}
	else{
		z=true;
	}
	return z;
}