const API_ENDPOINT = 'http://localhost:8080/todos'

export function getTodos() {
  return fetch(API_ENDPOINT)
    .then(_handleErrors)
    .then(response => response.json())
    .then(jsonRaw => _formatTodos(jsonRaw))
    .then(jsonFormatted => ({ todos: jsonFormatted }))
    .catch(error => console.error('Error:', error))
}

export function saveTodo(text) {
  var data = { text: text };

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