document.getElementById("frm").addEventListener("submit",function(){
    event.preventDefault()

 var data=serialization(this)
 console.log(data)
})

function serialization(frm){
  var pets={}
  var obj=new FormData(frm)
  obj.forEach((e,k)=>{
     pets[k]=e
  })
  return pets

}
  /*function loadpets(){
      var http=new XMLHttpRequest()
      http.open("GET","data/pro.json")
      http.send()
      http.onreadystatechange=function(){
          var result=this.response
          console.log(this.readyState)
      }
  }

  */


  fetch("data/pro.json").then(function(res){
      if(res.ok){
          res.json().then(function(result){
                 console.log(result)
          })
        }
      console.log(res)
  })

