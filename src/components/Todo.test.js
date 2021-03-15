import {fireEvent, render} from '@testing-library/react'
import Todo from './Todo'

test ('render todo input', ()=> {
    const { queryByTitle } = render(<Todo/>)
    const todo = queryByTitle('todoAdd')
    expect (todo).toBeTruthy
})

test('render button component todo', ()=> {
    const { queryByTitle } = render(<Todo/>)
    const btn = queryByTitle("buttonAdd")
    expect (btn).toBeTruthy();
})

test('simulasi click tambah 1', ()=> {
    const { queryByTitle } = render(<Todo/>)
    const btn = queryByTitle("buttonAdd")
    const todoInput = queryByTitle('todoAdd')
    
    expect(todoInput.value).toBe('')
    fireEvent.change(todoInput, {target:{value: 'hack'}})
    expect(todoInput.value).toBe('hack')
    expect(btn.innerHTML).toBe("Add #1")
    fireEvent.click(btn)
    expect(btn.innerHTML).toBe("Add #2")
})

test('simulasi click tampilkan todo', ()=> {
    const { queryByTitle } = render(<Todo/>)
    const btn = queryByTitle("buttonAdd")
    const todoInput = queryByTitle('todoAdd')
    const todoList = queryByTitle('showTodo')
    
    expect(todoInput.value).toBe('')
    fireEvent.change(todoInput, {target:{value: 'hack'}})
    expect(todoInput.value).toBe('hack')
    fireEvent.click(btn)
    expect(todoInput.value).toBe('')
    expect(todoList).toHaveTextContent('hack')
})