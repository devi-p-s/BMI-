const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const button = document.getElementById('button');
const result = document.querySelector('.result');


   // Here you can set the image based on the BMI range or simply show an image
 //bmi =w/h*h
function bmi(){
 let hvalue=height.value;
 let wvalue=weight.value;
 let bmiv=wvalue/(hvalue*hvalue);
 
 if(hvalue==""||wvalue==""){
   alert("please fill")
 }

 else{
    
  if (bmiv<18.5){
      result.textContent="underweight";
      result.style.color="red";
   
  }
 
 else if(bmiv<24.9){
    result.textContent="normal weight"
    result.style.color="green"
 }
  else if(bmiv<29.9){
    result.textContent="overweight"
    result.style.color="red"
 }
 else if(bmiv<34.9){
    result.textContent="obesity (class I)"
    result.style.color="red"
 }
 else if(bmiv<39.9){
    result.textContent="obesity (class II)"
    result.style.color="red"
 }
 else if(bmiv>40){
    result.textContent="obesity (class III, severe obesity) "
    result.style.color="red"
 }
 else{
   result.textContent="not found"
 }
 
 }
}
