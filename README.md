# TodoList
react-hook-form과 recoil연습을 위한 todo 리스트
## Demo

Insert gif or link to demo


## Features

<!-- - Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform -->


## Tech Stack

**Client:** React, recoil



## Authors

- [@jaeelee](https://www.github.com/jaeelee)


## Feedback

If you have any feedback, please reach out to us at jaeelee.dev@gmail.com


## Documentation

### ▶️ react-Hook-Form
form 관리 라이브러리
사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form

- 설치
```
npm install react-hook-form
```

- 사용법

ex)
```javascript
const { watch, register, handleSubmit, formState:{errors}, setError } = useForm();

...

<input {...register("lastName", {required: true})}>

...
```
<table>
<tr>
<th></th>
<th></th>
<tr>
  <tr>
    <td>register</td>
    <td>name, onBlur, onChagne, onClick, ref를 return하는 함수</td>
  </tr>
  <tr>
    <td>watch</td>
    <td>form의 입력값들의 변화를 관찰할 수 있게 해주는 함수</td>
  </tr>
    <tr>
    <td>handleSubmit(onValid, onInvalid)</td>
    <td>validation 담당, preventDefault 담당, validation이나 모든 일들을 전부 끝마친 후에 데이터가 유효할 때만 함수를 호출<br>
    onValid - 데이터가 유효할 때 호출되는 함수(필수)<br>
     onInvalid - 데이터가 유효하지 않을 때 호출되는 함수(필수x)<br>
    </td>
  </tr>
    <tr>
    <td>formState</td>
    <td>validation에 실패한 에러들을 표시해주는 함수</td>
  </tr>
  <tr>
    <td>setError</td>
    <td>특정한 에러를 발생시킴. 발생하는 문제에 따라 추가적으로 에러를 설정할 수 있도록 함. </td>
  </tr>
  <tr>
    <td>setValue</td>
    <td>필드 값을 업데이트 </td>
  </tr>
  <tr>
    <td>reset</td>
    <td>form state와 value 재설정 <br> reset() // form전체 리셋 <br> reset({email:""}) // form에서 특정 필드만 리셋 </td>
  </tr>
</table>

### ▶ recoil Selector
atom의 output을 변형시키는 도구

<br>

### ▶️ enum
열거형, 상수들의 집합을 정의할 수 있음
- 숫자 열거형 (Numeric enums)
```
enum Direction {
Up = 1,
Down,
Left,
Right,
}
```

- 문자열 열거형 (String enums)
```
enum Direction {
Up = "UP",
Down = "DOWN",
Left = "LEFT",
Right = "RIGHT",
}
```