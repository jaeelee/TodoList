import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../atoms";

// function Todo() {
//     const todos = useRecoilValue(todoState); // value만 가져올 떄
//     return (
//         <ul>
//             {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
//         </ul>
//     );
// }

function Todo({ text, category, id }: ITodo) {
    const setTodos = useSetRecoilState(todoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;
        setTodos((oldTodos) => {

            const targetIndex = oldTodos.findIndex((todo) => todo.id === id) // 조건을 만족하는 index를 찾아줌

            const oldTodo = oldTodos[targetIndex];
            const newTodo = { text, id, category: name as Categories };
            console.log(targetIndex, oldTodo, newTodo);

            // slice함수 사용하기
            // return [...oldTodos.slice(0, targetIndex), newTodo, ...oldTodos.slice(targetIndex + 1)];
            //splice 함수 사용하기 : splice = 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
            const newTodos = [...oldTodos];
            newTodos.splice(targetIndex, 1, newTodo);
            return newTodos;

        });

        // map함수를 이용한 방법
        // setToDos((prevToDos) => {
        //     return prevToDos.map((toDo) =>
        //         toDo.id === id ? { ...toDo, category: name as any } : toDo
        //     );
        // });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TODO && <button name={Categories.TODO} onClick={onClick}>To Do</button>}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
        </li >
    );
}
export default Todo;