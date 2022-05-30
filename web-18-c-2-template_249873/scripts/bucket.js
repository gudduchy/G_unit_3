
let bucket =document.getElementById("bucket")
    let coffee = JSON.parse(localStorage.getItem("coffee"))

   coffee.forEach(function(ele){

        let div = document.createElement("div")
      let img =document.createElement("img")
      img.src=ele.image
      
      let p1 = document.createElement("h3")
      p1.innerText = ele.title

       let p2 = document.createElement("p")
      p2.innerText = "₹ "+ele.price

  let btn = document.createElement("button")
  btn.innerText = "remove_coffee"

       div.append(img,p1,p2,btn)
       bucket.append(div)
    })