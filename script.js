function addTask(){
    const input = document.getElementById('task-inpuy');
    const text = input.ariaValueMax.trim();

    if(text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    document.getElementById('task-list').appendChild(li);
    input.value = '';

}

document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keydown', function(e){
    if(e.key === 'Enter') {
        addTask();
    }
});