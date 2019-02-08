const GET_ALL_TODOS_ENDPOINT = 'http://localhost:8080/todos'

export async function getTodos() {
  const result = await fetch(GET_ALL_TODOS_ENDPOINT)
    .then(response => response.json())
    .then(jsonData => ({
      todos: _formatTodos(jsonData)
    }))
  return result
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