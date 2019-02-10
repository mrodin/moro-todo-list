const API_ENDPOINT = 'http://localhost:8080/todos'

// Returns all todos
export function getTodos() {
  return fetch(API_ENDPOINT)
    .then(_handleErrors)
    .then(response => response.json())
    .then(jsonRaw => _formatTodos(jsonRaw))
    .then(jsonFormatted => ({ todos: jsonFormatted }))
    .catch(error => console.error('Error:', error))
}

// Saves new todo with given text
export function saveTodo(text) {
  var data = { text: text }

  return fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(_handleErrors)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

// Checks todo (completed)
export function checkTodo(id) {
  return fetch(API_ENDPOINT + `/${id}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(_handleErrors)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

// Unchecks todo (incomplete)
export function uncheckTodo(id) {
  return fetch(API_ENDPOINT + `/${id}/incomplete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(_handleErrors)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
}

// Deletes todo

export function deleteTodo(id) {
  return fetch(API_ENDPOINT + `/${id}`, {
    method: 'DELETE'
  })
    .then(_handleErrors)
    .catch(error => console.error('Error:', error))
}

// Updates todo text

export function updateTodoText(id, text) {
  var data = { text: text }

  return fetch(API_ENDPOINT + `/${id}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(_handleErrors)
    .catch(error => console.error('Error:', error))
}

// Formats array of objects (response from API) to object containing
// all todos with IDs as keys

function _formatTodos(todos) {
  const formattedTodos = todos.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})
  return formattedTodos
}

// Handles possible HTTP error codes from API

function _handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}