function addTask(){
    var input = document.getElementById("input");
    var list = document.getElementById("list");
    var li = document.createElement('li');
    li.textContent = input.value;
    li.className = "li";
    var removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    removeBtn.className = 'rm-btn';
    removeBtn.onclick = function () {
        list.removeChild(li);
    }
    li.onclick = function () {
        li.classList.toggle('completed');
    }
    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = "";
}