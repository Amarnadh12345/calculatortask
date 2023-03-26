let t=document.getElementsByTagName('td');
	let sp=document.getElementById('span_id');
	let c='';
	var m='';
	let c1='';


	function ReverseString(str) {
 
		    if(str.length < 2) {
		        return str;
		    }
		     
		    const revArray = [];
		    const length = str.length - 1;
		     
		   
		    for(let i = length; i >= 0; i--) {
		        revArray.push(str[i]);
		    }
		     
		    return revArray.join('');
	}


	function back() {
		c=String(c)
		c1=String(c1)
		if (c1!='') {
			var r=c1.slice(c1.length-1);
			c1=ReverseString(c1)
			c1=c1.replace(r,'')
			c1=ReverseString(c1)
			sp.innerHTML=c+m+c1;
		}
		else if (m!='') {
			m=''
			sp.innerHTML=c+m+c1;
		}
		else if (c!='') {
			var r=c.slice(c.length-1);
			c=ReverseString(c)
			c=c.replace(r,'')
			c=ReverseString(c)
			sp.innerHTML=c+m+c1;
		}

	}




	function cal2() {
			c=parseFloat(c)
			c1=parseFloat(c1)
			if (m=='%') {
				c=c%c1;
			}
			if (m=='x') {
				c=c*c1;
			}
			if (m=='/') {
				c=c/c1;
			}
			if (m=='+') {
				c=c+c1;
			}
			if (m=='-') {
				c=c-c1;
			}
			c1='';
			m='';
			sp.innerHTML=c;
	}



	function cal(v) {
		if (v=='=') {
			cal2();
		}
		else if (v=='cl') {
			c='';
			c1='';
			m='';
			sp.innerHTML='';
		}
		else if (v=='%') {
			if (m!='') {
				cal2();
			}
			sp.innerHTML+='%';
			m='%';
		}
		else if (v=='x') {
			if (m!='') {
				cal2();
			}
			sp.innerHTML+='x';
			m='x';
		}
		else if (v=='/') {
			if (m!='') {
				cal2();
			}
			m='/';
			sp.innerHTML+='/';
		}
		else if (v=='+') {
			if (m!='') {
				cal2();
			}
			m='+';
			sp.innerHTML+='+';
		}
		else if (v=='-') {
			if (m!='') {
				cal2();
			}
			m='-'
			sp.innerHTML+='-';
		}
		else {
			if (m!='') {
				if (v=='0') {
					c1+='0';
					sp.innerHTML+=v;
				}
				else if (v=='00') {
					c1+='00';
					sp.innerHTML+=v;
				}
				else if (v=='.'){
					c1+='.'
					sp.innerHTML+=v;
				}
				else {
					c1+=String(v);
					sp.innerHTML+=v;
				}
			}
			else{
				if (v=='0') {
					c+='0';
					sp.innerHTML+=v;
				}
				else if (v=='00') {
					c+='00';
					sp.innerHTML+=v;
				}
				else if (v=='.'){
					c+='.'
					sp.innerHTML+=v;
				}
				else {
					c+=String(v);
					sp.innerHTML+=v;
				}
			}
		}
	}