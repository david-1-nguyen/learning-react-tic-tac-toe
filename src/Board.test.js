import { render, fireEvent } from '@testing-library/react';

import Board from './Board'
import Square from "./Square";

test('should render a new board with an X', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); // Line 1
    const buttons = board.queryAllByRole('button')
    let scndbutton = buttons[2];
    fireEvent.click(scndbutton)
    expect(scndbutton.innerHTML).toBe('X')
})

test('should render a new board that is empty', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); // Line 1
    const buttons = board.queryAllByRole('button')
    let empty = true
    buttons.map(singleButton => {
        if(singleButton.innerHTML !== '') empty = false
    })
    expect(empty).toBe(true)
})

test('Next player initial', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>)
    const boardText = board.getByText('Next player ', {exact: false}).innerHTML
    expect(boardText).toBe('Next player : X')
})


test('Next player after 3 clicks', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>)
    let buttons = board.queryAllByRole('button')
    fireEvent.click(buttons[2])
    fireEvent.click(buttons[3])
    fireEvent.click(buttons[4])
    const boardText = board.getByText('Next player ' ,{exact: false}).innerHTML
    expect(boardText).toBe('Next player : O')
})

test('Next player after 9 clicks', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>)
    let buttons = board.queryAllByRole('button')
    buttons.map(button => {
        fireEvent.click(button)
    })
    const boardText = board.getByText('Next player ' ,{exact: false}).innerHTML
    expect(boardText).toBe('Next player : O')
})