


    let form=document.getElementById("form")
    form.addEventListener("submit",myfun)
   
    function myfun(){
      event.preventDefault();
      let obj={
        name:form.name.value,
        mobile:form.mobile.value,
        address:form.address.value
      }
      console.log(obj)
       let id; 
       let i=0;
      id= setInterval(function(){
        console.log("i:",i)
        if(i===12){
          clearInterval(id)
        }
        i++;
       if(i==1){alert("order accepted")
       }
       if(i==3){alert("Your order is being Prepared ")
       }
       if(i==8){alert("Your order is being packed ")
       }
       if(i==10){alert( "Your order is out for delivery")
       }
       if(i==12){alert("Order delivered")
       }
      },1000)
    }