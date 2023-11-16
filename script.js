const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('add-btn');
const liContainer = document.getElementById('li-container');

addBtn.addEventListener('click',function(){
    console.log('btn-clicked')
    if(inputBox.value === '' || inputBox === null || inputBox === undefined){
        alert("Please Insert some text as task");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        liContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-x" style="color: #474747;"></i>';
        li.appendChild(span);
        setData();
    }
    inputBox.value = "";
    setData();
})

liContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        setData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        setData();
    }
}, false)

function setData (){
    localStorage.setItem("data", liContainer.innerHTML);
}
function showData (){
    liContainer.innerHTML =  localStorage.getItem("data");
}
showData();