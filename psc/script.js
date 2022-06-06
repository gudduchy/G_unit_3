

         let id;
         let container= document .getElementById("movie")
 
      async function getData(q){
          let url=`https://swapi.dev/api/people/?search=${q}`
          try{
          
             let res = await fetch(url)
             let data = await res.json()
              //console.log(data.results)
             return data.results;
          }catch(err){
              console.log("error"+err)
          }
 
      }
 
       async function main(){
          let query=document.getElementById("query").value
            
          let response =  getData(query)
          let data = await response
         
         apend(data)
      }
      
       function apend(movies){
            //console.log(movies)
           container.innerHTML=null
           
           if(movies==undefined){
              return false
           }
          
          movies.forEach(function(ele){
             let  div = document.createElement("div")
               
                  div.addEventListener("click",function(){
                  
                     localStorage.setItem("movie",JSON.stringify(ele))
                   window.location.href="bookmark.html"
                  })

              let p1=document.createElement("p")
              p1.innerText=ele.name;
              // p1.style.color="white"
               p1.style.cursor="pointer"
               p1.setAttribute("class","p")
 
                let p2=document.createElement("p")
                    p2.innerText=ele.gender
                    p2.style.color="green"
                    p2.style.marginLeft="100px"
                   
 
                    let p3=document.createElement("p")
                    p3.innerText=ele.birth_year
                    p3.style.color="pink"
                    p3.style.marginLeft="100px"
                   
 
               div.append(p1,p2,p3)
               container.append(div)
          })
       }
 
          function debounceFunction(func,delay){
              if(id){
                  clearTimeout(id)
              }
         
           id = setTimeout(function(){
             func();
           },delay)
 
          }