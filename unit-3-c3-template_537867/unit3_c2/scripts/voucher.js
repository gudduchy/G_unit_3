     

      let total=document.getElementById("wallet_balance")
   // total.innerHTML=null
          let details=JSON.parse(localStorage.getItem("user"))
        
          //console.log(details)
          total.append(details.amount) 



   async function  getData(){
   let url=" https://masai-vouchers-api.herokuapp.com/api/vouchers"
     try{
     let res=await fetch(url)
     let data=await res.json()
        //console.log(data[0].vouchers)
        apend(data[0].vouchers)
     }catch(err){
       console.log(err,": error")
     }
    }
    getData()

    function apend(voucher){
      let container =document.getElementById("voucher_list")
      console.log(voucher)
      voucher.forEach(function(ele){
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=ele.image

        let h1=document.createElement("h3")
        h1.innerText=ele.name

        let h2=document.createElement("h3")
        h2.innerText=ele.price
       
      let btn=document.createElement("button")
        btn.innerText="buy"
        
        btn.addEventListener("click",function(){
          // console.log(details)
          // console.log(ele.price)
         
          
          if(ele.price<=details.amount){
            alert("Hurray! purchase successful")
            // details.amount =details.amount-ele.price
            // console.log(details.amount)
            let arr=JSON.parse(localStorage.getItem("purchase"))||[]
            arr.push(ele)
            localStorage.setItem("purchase",JSON.stringify(arr))
            // window.location.reload()
          }
          else{
            alert("Sorry! insufficient balance")
          }

          //total.innerHTML=null
            
          
         details.amount =details.amount-ele.price;

           // console.log(details.amount)
           if(details.amount<=0){
            total.innerHTML=null
            total.innerHTML="00"
           }
           
           else{
            total.innerHTML=null
            
           total.append(details.amount) 
           }
        })
     
        div.append(img,h1,h2,btn)
        container.append(div)
      })
    }