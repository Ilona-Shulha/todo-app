import React, { useState } from 'react';

export const TodosFilter = ({
  removeCompleted, hiddenBtnDeleteCompleted, countUncompleted,
  filterActive, filterCompleted, filterAll,
}) => {
  const [selectidFilter, setSelectidFilter] = useState('all');

  return (
    <>
      <span
        className="todo-count"
        data-cy="todosCounter"
      >
        {`${countUncompleted} items left`}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={`${(selectidFilter === 'all') && 'selected'}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectidFilter('all');
              filterAll();
            }}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#/active"
            className={`${(selectidFilter === 'active') && 'selected'}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectidFilter('active');
              filterActive();
            }}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#/completed"
            className={`${(selectidFilter === 'completed') && 'selected'}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectidFilter('completed');
              filterCompleted();
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      {hiddenBtnDeleteCompleted && (
      <button
        type="button"
        className="clear-completed"
        onClick={() => removeCompleted()}
      >
        Clear completed
      </button>
      )}

    </>
  );
};
