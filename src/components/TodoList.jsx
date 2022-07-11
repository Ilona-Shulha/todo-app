import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = React.memo(({
  items, changeAllCompleted, changeTodo, removeTodo, checkedAllCompleted,
}) => (
  <>
    <input
      type="checkbox"
      id="toggle-all"
      className="toggle-all"
      data-cy="toggleAll"
      checked={checkedAllCompleted}
      onClick={(e) => {
        changeAllCompleted(e.target.checked);
      }}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul
      data-cy="todoList"
      className="todo-list"
    >
      {items.map(toDo => (
        <React.Fragment key={toDo.id}>
          <TodoItem
            todo={toDo}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
          />
        </React.Fragment>
      ))}
    </ul>
  </>
));
