import Todo from '@/models/Todo'
import mTodo from '@/models/mock/Todo'

jest.mock('@/models/Todo')

test('Todo get id:1', () => {
  const mTodo1 = mTodo.filter((v) => v.id === 1)
  const todo1 = Todo.get(1)
  expect(todo1.title).toBe(mTodo1[0].title)
})

test('Todo get return null', () => {
  expect(Todo.get(-1)).toBe(null)
})

test('Todo get list', () => {
  const todoList = mTodo.map((v) => new Todo(v))
  expect(Todo.getList()[0].title).toBe(todoList[0].title)
  expect(Todo.getList()[1].title).toBe(todoList[1].title)
})
