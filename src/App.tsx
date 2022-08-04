import React from 'react';
import UserList from "./conponents/userList";
import TodoList from "./conponents/todoList";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;