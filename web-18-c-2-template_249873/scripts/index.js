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
        let img =document.createElement("img")
        img.src=ele.image
        
        let p1 = document.createElement("h3")
        p1.innerText = ele.title

         let p2 = document.createElement("p")
        p2.innerText = "₹ "+ele.price

    let btn = document.createElement("button")
    btn.innerText = "add_to_bucket"
        btn.addEventListener("click",function(){
           let arr =JSON.parse(localStorage.getItem("coffee")) ||[]
           arr.push(ele)
          localStorage.setItem("coffee",JSON.stringify(arr))
          
        })
         
        

        div.append(img,p1,p2,btn)
       menu.append(div)

       

      })
      
     
     }
