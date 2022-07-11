/* eslint-disable no-console */
export const request = (url, options) => fetch(`https://mate.academy/students-api${url}`, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}-${response.statusText}`);
    }

    return response.json();
  });

export const getUser = id => request(`/users/${id}`);

export const getUserTodos = id => request(`/todos?userId=${id}`);

export const createUser = (name, username) => request(`/users`, {
  method: 'Post',
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  body: JSON.stringify({
    name,
    username,
    email: 'ilona@example.com',
    phone: '1234567890',
  }),
});

export const createTodo = (title, userId) => request(`/todos`, {
  method: 'POST',
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  body: JSON.stringify({
    title,
    userId,
    completed: false,
  }),
});

export const deleteTodo = id => request(`/todos/${id}`, {
  method: 'DELETE',
});

export const changeTodoOnServer = (todoId, data) => request(`/todos/${todoId}`, {
  method: 'PATCH',
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  body: JSON.stringify(data),
});

export const deletUser = id => request(`/users/${id}`, {
  method: 'DELETE',
});
