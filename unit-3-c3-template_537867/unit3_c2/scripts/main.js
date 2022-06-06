

     let form=document.getElementById("form")
 form.addEventListener("submit",myfn)

 function myfn(){
   event.preventDefault()
   let obj={
     name:form.name.value,
     email:form.email.value,
     address:form.address.value,
     amount:form.amount.value,
   };
   console.log(obj)
   localStorage.setItem("user",JSON.stringify(obj))
   window.location.reload()
 }
  