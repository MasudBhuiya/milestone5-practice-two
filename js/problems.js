
document.getElementById('bold').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.fontWeight = 'bold';
})
document.getElementById('italic').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.fontStyle = 'italic';
})
document.getElementById('underline').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.textDecoration = "underline";
})
document.getElementById('text-left').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.textAlign = "left";
})
document.getElementById('text-center').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.textAlign = "center";
})
document.getElementById('text-right').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.textAlign = "right";
})
document.getElementById('text-full').addEventListener('click', function(){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.textAlign = "justify";
})
document.getElementById('number').addEventListener('click', function(event){
    const getTextarea = document.getElementById('textarea');
    getTextarea.style.fontSize = `${event.target.value}em`;
})
document.getElementById('color').addEventListener('click', function(event){
    const getTextarea = document.getElementById('textarea');
//    -----------------------------------;
})




