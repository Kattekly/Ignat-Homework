import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {id: 0, name: 'Кот', age: 3},
        {id: 1, name: 'Александр', age: 66},
        {id: 2, name: 'Коля', age: 16},
        {id: 3, name: 'Виктор', age: 44},
        {id: 4, name: 'Дмитрий', age: 40},
        {id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    // expect(...).toBe(...)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})


})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})


})
