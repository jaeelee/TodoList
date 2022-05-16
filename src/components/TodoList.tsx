import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

interface IForm {
    todo: string;
}
function TodoList() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<IForm>();
    const onValid = (data: any) => {// react-hook-form이 모든 검증을 마쳤을 때만 호출됨
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("todo", { required: "Write a to do" })} placeholder="Write a to do" />
                <span>{errors?.todo?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;