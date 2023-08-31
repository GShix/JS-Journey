//To show alert on click
/* let namasteBtn =document.querySelector('button');
namasteBtn.addEventListener('click', showMsg);
function showMsg(){
    alert("Namaste World!");
*/

let namasteBtn =document.querySelector('button');
namasteBtn.addEventListener('click', InputMsg);
function InputMsg(){
    let name=prompt('Enter your Name');
    namasteBtn.textContent='Namaste!' +name;
}
