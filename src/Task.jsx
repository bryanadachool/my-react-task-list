export default function Task(){
    return(
        <div>
            <input type="text" placeholder="add your new task"/>
            <span>add</span>
            <ul>
                <li><input type="checkbox" />listado de tareas nombre de la tarea<span class="material-symbols-outlined icon">delete</span></li>
            </ul>
        </div>
    )
}