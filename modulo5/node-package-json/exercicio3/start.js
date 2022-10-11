let newTask = process.argv[2]
const tasks = ['Estudar', 'Treinar']

function addTask(newTask){
	tasks.push(newTask)
	console.log('Tarefa adicionada com sucesso!')
console.log(tasks)
}
addTask(newTask)