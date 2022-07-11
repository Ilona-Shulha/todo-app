import React, { useState } from 'react';

export const TodoApp = React.memo(({ onCreateTodo }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue) {
          onCreateTodo(inputValue);
        }

        setInputValue('');
      }}
    >
      <input
        type="text"
        className="new-todo"
        data-cy="createTodo"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
});
