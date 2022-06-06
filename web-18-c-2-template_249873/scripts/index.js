// Add the coffee to local storage with key "coffee"

let menu =document.getElementById("menu")

   let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

  async function getData(){
   try{

     let res = await fetch(url)
     let data = await res.json()
     //console.log(data.menu)
     apend(data.menu.data)
   }catch(err){
     console.log(err,"error")
   }
 }
     
     getData()
            
    
     function apend(coffie){
      console.log(coffie)
       
        coffie.forEach(function(ele){

          let div = document.createElement("div")
          div.setAttribute("class","apend_box")
          
        let img =document.createElement("img")
        img.src=ele.image
        
        let p1 = document.createElement("h3")
        p1.innerText = ele.title
         p1.style.marginLeft="50px"

         let p2 = document.createElement("p")
        p2.innerText = "₹ "+ele.price
        p2.style.marginLeft="50px"
        
         let btn = document.createElement("button")
          btn.innerText = "add_to_bucket"

          btn.addEventListener("click",function(){
           let arr =JSON.parse(localStorage.getItem("coffee")) ||[]
           arr.push(ele)
          localStorage.setItem("coffee",JSON.stringify(arr))
          // console.log(arr.length)
          window.location.reload()
         
          
         
        })
         
        

        div.append(img,p1,p2,btn)
       menu.append(div)

       })
      
     }

     let count =document.getElementById("coffee_count")
     function  Tcount(){

       let arr1= JSON.parse(localStorage.getItem("coffee"))
       console.log(arr1.length)
          count.innerHTML="1"
       for(let i=0;i<arr1.length;i++){
        count.innerHTML=null
         count.append(i+1)
         
       }
      }
      Tcount()
     
    