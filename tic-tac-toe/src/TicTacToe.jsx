import React, { useReducer, useEffect } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Typography } from '@mui/material'
import './App.css'

// Initial state of the game
const initialState = {
    board: Array(9).fill(null), // Initializes an array of 9 nulls representing the board
    xIsNext: true, // Tracks who's turn is next
    winner: null, //  Tacks the winner of the game
    openDialog: false // controls the visibility of the dialog
}

// Reducer function to manage state updates based on the dispatched actions
function reducer(state, action) {
    switch (action.type) {
        case 'make_move':
            debugger
            if (state.board[action.index] || state.winner) {
                // Prevents move if cell is already filled or game has a winner
                return state;
            }
            const boardCopy = [...state.board];
            boardCopy[action.index] = state.xIsNext ? 'X' : 'O';
            const winner = calculateWinner(boardCopy);
            const isBoardFull = boardCopy.every(cell => cell !== null); // Check if all cells are filled
            return {
                ...state,
                board: boardCopy,
                xIsNext: !state.xIsNext,
                winner: winner,
                openDialog: !!winner || isBoardFull// Opens the dialog is there is a winner or draw
            }
        case 'reset':
            return { ...initialState, board: Array(9).fill(null) }; // Reset the game itself
        case 'close_dialog':
            return { ...state, openDialog: false }; // Closes the dialog
        default:
            throw new Error('Unhandled action type');
    }
}

// It is helper function to determine the winner
function calculateWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let line of lines) {
        const [a, b, c] = line; // [0,1,2] ==> a = 0, b = 1, c = 2
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function TicTacToe() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='game'>
            <Typography variant="h5" component="h2">
                Player1: X
            </Typography>
            <Typography variant="h5" component="h2">
                Player2: O
            </Typography>
            <Grid container spacing={2} justifyContent="center" style={{ maxWidth: 400 }}>
                {state.board.map((cell, index) => (
                    <Grid item xs={4} key={index}>
                        <Paper className='cell' elevation={3}
                            onClick={() => dispatch({ type: 'make_move', index })}>
                            {cell}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Button variant='contained' onClick={() => dispatch({ type: 'reset' })}
                style={{ marginTop: 20 }}>Reset Game</Button>
            <Dialog open={state.openDialog}
                onClose={() => dispatch({ type: 'close_dialog' })}>
                <DialogTitle>{state.winner ? `${state.winner} wins!` : 'Draw'}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => dispatch({ type: 'reset' })} color='primary'>Restart</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TicTacToe