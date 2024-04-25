const pannels = document.querySelectorAll('.panel');

pannels.forEach((pannel)=>{
    pannel.addEventListener('click',()=>{
       removeActivieClass(); 
       pannel.classList.add('active');
    })
});

function removeActivieClass(){
    pannels.forEach((pannel)=>{
        pannel.classList.remove('active')
    });
};