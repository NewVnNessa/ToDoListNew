import React, {useState} from 'react';
import TodoList from"./components/TodoList";

//componente principal da aplicação

export default function App(){
  //var estado que guarda a lista de tarefas
  const [todos, setTodos] = useState([]);
  //var estado guarda a imout da tarefa

  const[newTask, setNewTask] = useState("");
  const[datadia, setDataDia] = useState("");
  const[hora, setHora] = useState("");
  const[visivel, setVisivel] = useState(true);

  //função ue adiciona uma nova tarefa na lista de tarefas
  const addTask = ()=> {
    if(newTask.trim()==="")return;
    //cria um objeto tarefa
    const newTodo = {
      id:Date.now(), 
      text: newTask,
      date: datadia,
      hora: hora
    }

    //atualizar a lista armazenada em 'todos'
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  // Função que remove uma tarefa pelo id
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  return(
    <div style={styles.container}>
      <h1>Minha ToDo List</h1>
      <div style={styles.container}>
        
        <input
         type = "date"
         placeholder = "Entre com uma data da tarefa!"
         value ={datadia}
         onChange = {(e) => setDataDia(e.target.value)}
         style = {styles.inputdh}
        />
        <input
         type = "time"
         placeholder = "Entre com a hora da tarefa!"
         value = {hora}
         onChange = {(e) => setHora(e.target.value)}
         style = {styles.inputdh}
        />
        <input
         type = "text"
         placeholder = "Digite uma nova tarefa!"
         value = {newTask}
         onChange = {(e) => setNewTask(e.target.value)}
         style = {styles.input}
        />
        <button onClick = {addTask} style = {styles.button}>
          Adicionar
        </button> 
        <button onClick = {() => setVisivel(!visivel)} style = {styles.button}>
          display
        </button> 
        <div>
          {/*Renderização condicional*/}
          { visivel && 
          <TodoList todos = {todos} removeTask = {removeTask}/>
          } 
        </div>
      </div>
    </div>
  )
}

const styles = {
  container:{maxWidth:"600", margin:"50px auto", textAlign:"center",
    fontFamily:"Arial, sans-serif"},
    inputdh:{padding:"10px", width:"39%", marginRight:"5px", 
      borderRadius:"10px"},
    input:{padding:"10px",  width:"39%", marginRight:"5px"},
    button:{padding:"10px", cursor:"pointer"} 
  }

