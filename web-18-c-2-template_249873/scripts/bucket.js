
     let bucket =document.getElementById("bucket")
     let coffee = JSON.parse(localStorage.getItem("coffee"))

     coffee.forEach(function(ele,index){

        let div = document.createElement("div")
      let img =document.createElement("img")
      img.src=ele.image
      
      let p1 = document.createElement("h3")
      p1.innerText = ele.title

       let p2 = document.createElement("p")
      p2.innerText = "₹ "+ele.price

     let btn = document.createElement("button")
     btn.innerText = "remove_coffee"
     btn.addEventListener("click",function(){
     rmv(ele,index)
   })

       div.append(img,p1,p2,btn)
       bucket.append(div)

       function rmv(ele,index){
        event.target.parentNode.remove()
        coffee.splice(index,1)
        localStorage.setItem("coffee",JSON.stringify(coffee))
        window .location.reload()
       
       }
    })

    let Tsum= document.getElementById("total_amount")
    function total_sum(){
    let sum=0
    for(let i=0;i<coffee.length;i++){
       sum+=coffee[i].price
    }
    console.log(sum)
    Tsum.append(sum)
    
    }
    total_sum()
   