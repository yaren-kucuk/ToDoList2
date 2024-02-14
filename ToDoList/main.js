let gorevler = [];

function yeniGorevEkle() {
    const input = document.getElementById("newTaskInput");
    const taskName = input.value.trim();
    if (taskName !== "") {
        gorevler.push({
            isim: taskName,
            tamamlandi: false
        });
        input.value = "";
        listeyiGuncelle();
    }
}

function listeyiGuncelle() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    gorevler.forEach((gorev, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = gorev.tamamlandi;
        checkbox.addEventListener("change", function() {
            gorev.tamamlandi = !gorev.tamamlandi;
            listeyiGuncelle();
        });
        const span = document.createElement("span");
        span.textContent = gorev.isim;
        const button = document.createElement("button");
        button.textContent = "delete";
        button.addEventListener("click", function() {
            gorevler.splice(index, 1);
            listeyiGuncelle();
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    });
}
