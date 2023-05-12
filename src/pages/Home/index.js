import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        //  console.log(error);
      });
  }, []);

  return (
    <div className="homepage">
      <div>
        {todos &&
          todos.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
              </React.Fragment>
            );
          })}
      </div>
      5
    </div>
  );
};
