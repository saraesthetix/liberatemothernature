		function validateForm(){
			//provera imena
			var name = document.getElementById("name");
			if (name.value == ""){
				alert("Molimo Vas da unesete vaše ime i prezime");
				name.focus();
				return false;
			} else {
				var regExpName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
				if (!regExpName.test(name.value)){
					alert("Molimo Vas da unesete vaše ime i prezime u ispravnom formatu");
					name.focus();
					return false;
				} 
			}			
			//provera grada
			if (document.getElementById("city").value == "-1"){
				alert("Molimo Vas da unesete grad");
				return false;
			}			
			//provera zip koda
			var zip = document.getElementById("zip");
			if(zip.value == ""){
				alert("Molimo Vas da unesete poštanski broj");
				zip.focus();
				return false;
			} else {
				var regExpZip = /^[1-9][0-9]{4}$/;
				if(!regExpZip.test(zip.value)){
					alert("Poštanski broj mora biti u rangu od 10000-99999");
					zip.focus();
					return false;
				}
			}		
			//provera adrese
			var address = document.getElementById("address");
			if(address.value == ""){
				alert("Molimo Vas da unesete adresu");
				address.focus();
				return false;
			} else {
				var regExpAddress = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*\s[0-9]{1,3}([a-z])?$/;
				if(!regExpAddress.test(address.value)){
					alert("Adresa nije uneta u ispravnom formatu");
					address.focus();
					return false;
				}
			}			
			//provera emaila
			var email = document.getElementById("email");
			if(email.value == ""){
				alert("Molimo Vas da unesete svoju e-mail adresu");
				email.focus();
				return false;
			} else {
				var regExpEmail = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!regExpEmail.test(email.value)){
					alert("E-mail adresa nije validna");
					email.focus();
					return false;
				}
			}
			alert("Hvala Vam što ste nam se pridružili!");
}