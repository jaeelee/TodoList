import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

/* function TodoList() {
    const [todo, setTodo] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value }, } = event;
        setTodo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 기본적으로 정의된 이벤트를 작동하지 못하게 하는 메서드 (submit시 새로고침 되는 현상 방지)
        console.log(todo);
        setTodo("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    );
} */

function TodoList() {
    // const [todos, setTodos] = useRecoilState(todoState); // useState와 동일한 모양
    // const todos = useRecoilValue(todoState); // value만 가져올 떄
    // const setTodos = useSetRecoilState(todoState); //  value를 바꾸고 싶을 때 사용
    const todos = useRecoilValue(todoSelector);
    const [category, setCategory] = useRecoilState(categoryState); // 값과 modifyer함수 제공

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }

    return (
        <div>
            <h1>TODO</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Categories.TODO}>To do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateTodo />
            <ul>
                {todos?.map(aTodo => <Todo key={aTodo.id} {...aTodo} />)}
            </ul>

            {/* <h2>TODO</h2>
            <ul>
                {todo.map((todo) => <Todo key={todo.id} {...todo} />)}
            </ul>

            <h2>Doing</h2>
            <ul>
                {doing.map((todo) => <Todo key={todo.id} {...todo} />)}
            </ul>

            <h2>Done</h2>
            <ul>
                {done.map((todo) => <Todo key={todo.id} {...todo} />)}
            </ul> */}
        </div>
    );
}

export default TodoList;