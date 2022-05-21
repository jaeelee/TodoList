import { atom, selector } from "recoil";

export enum Categories {
    "TODO" = "TODO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TODO,
})

export const todoState = atom<ITodo[]>({
    key: "todo",
    default: [],
})

// selector : atom을 가져다가 output을 변형
export const todoSelector = selector({
    key: "todoSelector",
    get: ({ get }) => {
        const todos = get(todoState);
        const category = get(categoryState);

        return todos.filter((todo) => todo.category === category);
        // return [
        //     todos.filter((todo) => todo.category === "TODO"),
        //     todos.filter((todo) => todo.category === "DOING"),
        //     todos.filter((todo) => todo.category === "DONE"),
        // ]; //filter : 배열에서 조건에 맞지 않는 원소들을 제거한 배열을 return
    }
})