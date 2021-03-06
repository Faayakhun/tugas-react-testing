import {render, fireEvent} from '@testing-library/react'
import Button from './Button'

test('render button component', ()=> {
    const { queryByTitle } = render(<Button/>)
    const btn = queryByTitle("buttonTest")
    expect (btn).toBeTruthy();
})

test('simulasi click', ()=> {
    const { queryByTitle } = render(<Button/>)
    const btn = queryByTitle("buttonTest")

    expect(btn.innerHTML) === 'click'
    fireEvent.click(btn)
    expect(btn.innerHTML) === "Click 2"
})