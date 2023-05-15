import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Services
import { getTodoList } from "../../services/todo/action";

export const Home = () => {
  // Hooks
  const dispatch = useDispatch();

  // Hooks useSelector
  const { todos, loading } = useSelector((state) => state.Todo);

  console.log(todos);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className="homepage">
      <div>
        {loading && <h2>Loading...</h2>}
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
