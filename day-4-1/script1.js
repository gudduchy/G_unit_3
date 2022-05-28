     

         
        let id;

        let container = document.getElementById("movies")

    async function getData(q){
        try{
    let url=`https://www.omdbapi.com/?s=${q}&apikey=689961c2`

      let res = await fetch(url)
      let data = await res.json()
      // console.log(data.Search)
       return data.Search
        }catch(err){
            console.log(err+"sorry!")
        }
    }

    async function main(){
        let query=document.getElementById("query").value
        
        let response= getData(query)
         let data = await response
         //console.log(data)
         apend(data)
    }
      

    function apend(movies){
       // console.log(movies)
       container.innerHTML=null

       if(movies===undefined){
           return false;
       }
          movies.forEach(function(ele){
             
            let div = document.createElement("div")

            let img=document.createElement("img")
            img.src=ele.Poster
            let p1 = document.createElement("h4")
            p1.innerText=ele.Title;
            p1.style.marginLeft="20px"

            let p2 = document.createElement("p")
            p2.innerText=ele.Type;
            div.append(img,p1)
            container.append(div)
        })
    }

       function debounceFunction(func,delay){
       
        if(id){
            clearTimeout(id)
        } 

       id =   setTimeout(function(){

          func();

        },delay)
       }