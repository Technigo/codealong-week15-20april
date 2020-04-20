import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'
import { Button } from 'lib/Button'
import { Container } from 'lib/Container'
import { Select } from 'lib/Select'
import DatePicker from 'react-date-picker' // a date picker package

// Three examples on how to deal with styled components and aria-labels
const Emoji = styled.span`
  font-size: 40px;
`

const PenEmoji = styled.span.attrs({
  role: 'img',
  'aria-label': 'pen',
})`
  font-size: 40px;
`

const AnotherEmoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel,
}))`
  font-size: 40px;
`

export const AddItemForm = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fridge.actions.addItem({ name, category, dueDate })) // name, category & dueDate as payload
    setName('') // Clearing the input
    setCategory('') // Clearing the input
    setDueDate('') // Clearing the input
  }

  return (
    <Container>
      {/* Just showing different ways with the emojis */}
      <span role='img' aria-label='robot'>
        🤖
      </span>
      <Emoji role='img' aria-label='pen'>
        ✏️
      </Emoji>
      <PenEmoji>✏️</PenEmoji>
      <AnotherEmoji ariaLabel='boat'>⛵️</AnotherEmoji>
      <AnotherEmoji ariaLabel='banana'>🍌</AnotherEmoji>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Category:
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value=''>select...</option>
            <option value='drink'>drink</option>
            <option value='food'>food</option>
            <option value='candy'>candy</option>
            <option value='other'>other</option>
          </Select>
        </label>

        {/* Date picker to set due date */}
        <label>
          Due Date
          <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
        </label>

        <Button type='submit' background='#3f8488'>
          Add item
        </Button>
      </form>
    </Container>
  )
}
