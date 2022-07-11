import React, { useState, useEffect } from 'react';

export const TodoItem = React.memo(({
  todo, changeTodo, removeTodo,
}) => {
  const [completed, setComplited] = useState(todo.completed);
  const [editTodo, setEditTodo] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  useEffect(() => setComplited(todo.completed), [todo.completed]);

  return (
    <li
      className={`${completed && 'completed'} ${editTodo && 'editing'}`}
    >
      { !editTodo
        ? (
          <div
            onDoubleClick={() => setEditTodo(true)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className="toggle"
              id={todo.id}
              onClick={(e) => {
                setComplited(e.target.checked);
                changeTodo(todo.id, { completed: e.target.checked });
              }}
            />
            <label>
              {todo.title}
            </label>
            <button
              type="button"
              className="destroy"
              data-cy="deleteTodo"
              onClick={() => removeTodo(todo.id)}
            />
          </div>
        )
        : (
          <input
            type="text"
            className="edit"
            id="editTodo"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                if (!e.target.value) {
                  removeTodo(todo.id);
                } else {
                  changeTodo(todo.id, { title: editValue });
                  setEditTodo(false);
                }
              }

              if (e.key === 'Escape') {
                e.preventDefault();
                setEditTodo(false);
              }
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                removeTodo(todo.id);
              } else {
                changeTodo(todo.id, { title: editValue });
                setEditTodo(false);
              }
            }}
          />
        )}
    </li>
  );
});
