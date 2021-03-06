import {fireEvent, render} from '@testing-library/react'
import Search from './Search'

test ('render search input', ()=> {
    const { queryByTitle } = render(<Search/>)
    const search = queryByTitle('searchTitle')
    expect (search).toBeTruthy
})

test ('simulasi ketik untuk change input',() =>{
    const { queryByTitle } = render(<Search/>)
    const search = queryByTitle('searchTitle')

    expect(search.value).toBe('123')
    fireEvent.change(search, {target:{value: 'kotak post'}})
    expect(search.value).toBe('kotak post')
})