    

     let purchased_vouchers =JSON.parse(localStorage.getItem("purchase"))
     //console.log(purchased_vouchers)
    let container=document.getElementById("purchased_vouchers")

        purchased_vouchers.forEach(function(ele){
         let div=document.createElement("div")

         let img=document.createElement("img")
          img.src=ele.image

          let h1=document.createElement("h3")
            h1.innerText=ele.name

          let h2=document.createElement("h3")
          h2.innerText=ele.price

          div.append(img,h1,h2)
           container.append(div)
       })
         let t_sum=document.getElementById("wallet_balance")
       let sum=0;
      for(let i=0;i< purchased_vouchers.length;i++){
        sum+= purchased_vouchers[i].price;
        //console.log(sum)
      }
      console.log(sum)
      t_sum.append(sum)