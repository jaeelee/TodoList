import { useForm } from "react-hook-form";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, ITodo, todoState } from "../atoms";


interface IForm {
    todo: string;
}

function CreateTodo() {
    const setTodos = useSetRecoilState(todoState); //  value를 바꾸고 싶을 때 사용
    const category = useRecoilValue(categoryState);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<IForm>();
    const onSubmit = ({ todo }: IForm) => {
        setTodos((oldTodos) => [{ text: todo, id: Date.now(), category }, ...oldTodos]);
        setValue("todo", ""); // 값 설정
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("todo", { required: "Please write a to do" })}
                placeholder="Write a to do" />
            <span>{errors?.todo?.message}</span>
            <button>Add</button>
        </form>
    );
}

export default CreateTodo;