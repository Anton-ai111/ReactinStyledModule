import {Button} from "./components/button.style";
import {Form} from "./components/form.style";
import {Body} from "./components/body.style";
import {Input} from "./components/input.style";

function App() {
  return (
    <>
    <Body>
      <Form>
        <h1>Login Form</h1>
        <p>Username:</p>
        <Input type="text" placeholder="Enter your name" /><br />
        <p>Password:</p>
        <Input type="password" placeholder="Enter your password" /><br />
        <Button backgroundColor="#4fcdff">Login</Button>
      </Form>
    </Body>
      
    </>
  )
}

export default App
