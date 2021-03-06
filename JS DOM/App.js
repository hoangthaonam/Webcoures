
// function removeItem(){
//     var btn = document.getElementsByClassName("remove");
//     for(var i = 0; i < btn.length; i ++){
//         btn[i].addEventListener("click",function(){
//             var item = this.parentElement.children[1].innerHTML;
//             removeFromlocalStorage(item)
//         })
//     }
// }

var flag = true;
function removeItem(){
    var btn = document.getElementsByClassName("remove");
    for(var i = 0; i < btn.length; i ++){
        btn[i].addEventListener("click",function(){
            removeFromlocalStorage(i);
            this.parentElement.remove();
        })
    }
}
function removeFromlocalStorage(i)
{
    if(flag){
        console.log(i-1);
        var temp = JSON.parse(localStorage.getItem("todo"));
        temp.splice(i-1,1);
        localStorage.setItem('todo',JSON.stringify(temp));
        flag = false;
        location.reload()
    }  
}
function append(todo){
    let li = document.createElement('li');
    li.innerHTML = `
                        <input type="checkbox" class="ckbox"/>
                        <span>${todo}</span>
                        <button class = "remove" >X</button>
                    `
    listTodo.appendChild(li);
    removeItem();
}
var TodoText = document.getElementById("TodoText");
var listTodo = document.getElementById("listTodo");
var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click",(event)=>{
    event.preventDefault()
    if(TodoText.value !== "")
    {
        append(TodoText.value);
        setTodo(TodoText.value);
        TodoText.value = "";
    }
})
window.onload = function(){
    removeItem();
    getTodo().map(todo => {
        append(todo)
    });
    change_checkbox();
}
function getTodo(){
    let arr = [];
    if(localStorage.getItem('todo')!==null)  arr = JSON.parse(localStorage.getItem('todo'));
    return arr;
}
function setTodo(todo){
    let todos = [];
    todos = getTodo();
    todos.push(todo);
    localStorage.setItem('todo',JSON.stringify(todos));
}

// checkbox
function change_checkbox(){
    var checkbox = document.getElementsByClassName("ckbox");

    for(var i = 0; i < checkbox.length; i++)
    {
        checkbox[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.style.background = 'red';
            } else {
                // Checkbox is not checked..
                this.parentElement.style.background = 'green';
            }
        });
    }
}


