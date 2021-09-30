function totalIt() {
var input = document.getElementsByName("product");
var total = 0;
for (var i = 0; i < input.length; i++) {
  if (input[i].checked) {
    total += parseFloat(input[i].value);
  }
}
document.getElementById("total").value = "Rs." + total.toFixed(2);

}
 
document.getElementById('btn').onclick = function() 
{  
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked'); 

  for (var checkbox of markedCheckbox) {  
    document.body.append(checkbox.value +' ');  
  
  }  

}