let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn')
let tasksList =  document.querySelector('#tasksList')


addBtn.addEventListener('click',addTask);

function addTask(){
   console.log(taskInput.value);
   if(taskInput.value == '') return;

   let li = document.createElement('li');
   li.innerText = taskInput.value;

   let deleteBtn = document.createElement('i')
   deleteBtn.classList.add('fa-solid','fa-trash')
   li.appendChild(deleteBtn)

   tasksList.appendChild(li);

   li.addEventListener('click',function(e){
    li.classList.toggle('complete')
   })
   deleteBtn.addEventListener('click',function(){
    li.remove()
   })

   taskInput.value = '';
    
}