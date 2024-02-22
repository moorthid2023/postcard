const toggleButton= document.querySelector('.toggle');
const roundSpan=document.querySelector('.roundSpan');
const post = document.querySelector('.post');
function onOrOff(){
    console.log('ok');
    roundSpan.classList.toggle('round__toggled');
    toggleButton.classList.toggle('toggled');
    // document.body.classList.toggle('toggled');
    post.classList.toggle('toggled');
    post.style.borderColor='grey';
}