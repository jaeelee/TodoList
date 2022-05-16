import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import RegisterForm from './components/RegisterForm';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <TodoList /> */}
      <RegisterForm />
    </>
  );
}

export default App;
