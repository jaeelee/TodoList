import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
}


function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => { // react-hook-form이 모든 검증을 마쳤을 때만 호출됨
        if (data.password !== data.password1) {
            setError("password1", { message: "password ar not the same." }, { shouldFocus: true });
            return;
        }
        reset();
        // setError("extraError", { message: "Server offline." });
    };
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {
                        required: "write here",
                        validate: {
                            noAt: (value) => value.includes("@") ? "no @ allowed" : true, // return값에 문자열을 넣을 경우 에러메세지로 출력됨
                            noDot: (value) => value.includes(".") ? "no . allowed" : true,
                        },
                    })}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", { required: "write here" })}
                    placeholder="Last Name"
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("username", { required: "write here", minLength: 10 })}
                    placeholder="Username"
                />
                <span>{errors?.username?.message}</span>
                <input
                    {...register("password", {
                        required: "Password is required",
                    })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}
export default RegisterForm;