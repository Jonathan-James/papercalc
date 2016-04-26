

	var box = document.getElementById('display');

		function addtoscreen(x){
			box.value+=x;
			if(x=='c'){
				box.value='';
			}
		}

		function removenumber(){
			var number=box.value;
			var len=number.length-1;
			var newnumber=number.substring(0,len);
			box.value=newnumber;
		}


		function answer(){


			var x=box.value;

			if(x!==''){
			x=eval(x)
			box.value=x;
			}
		}
		
		function power(y){

			var x=box.value
			if(x!==''){
			var answer=eval(x);
			var power=Math.pow(answer,y);
			box.value=power;
			}

		}
		
		
		
