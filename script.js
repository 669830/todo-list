function leggTil(){
    const input = document.getElementById('task-input');
    const tekst = input.value.trim();

    if(tekst === '') return;

    const li = document.createElement('li');
    li.textContent = tekst;

    li.addEventListener('click', function(){
        li.classList.toggle('ferdig');
    });
    
    document.getElementById('task-list').appendChild(li);
    input.value = '';

}

document.getElementById('add-btn').addEventListener('click', leggTil);
document.getElementById('task-input').addEventListener('keydown', function(e){
    if(e.key === 'Enter') {
        leggTil();
    }
});