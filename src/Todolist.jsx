import { Todoitem } from "./Todoitem"

export function Todolist({ todos, toggletodo, deletetodo }) {
    return (
        <ul className='list'>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <Todoitem
                        {...todo}
                        key={todo.id}
                        toggletodo={toggletodo}
                        deletetodo={deletetodo}
                    />
                )

            })}

        </ul>
    )
}