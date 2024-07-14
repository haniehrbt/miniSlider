const ctrlbtn = document.querySelector('.ctrlbtn');
const sidebar = document.querySelector('.sidebar');

ctrlbtn.addEventListener('click' , function(){
    sidebar.classList.toggle('show');
    ctrlbtn.classList.toggle('open');
})