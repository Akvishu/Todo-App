import { Button, Form } from "react-bootstrap";
import Header from "../comp/Header";

function LogIn() {
    return (
        <>
        {/* <Header/> */}
        <h1>Todo App - This is Landing Page!</h1>
            <p>Please visit my todo app page by clicking below mentioned url.</p>
            <a href="/todo" style={{fontSize:'25px'}}>Go On Todo Page</a>
        </>
    );
}
export default LogIn;