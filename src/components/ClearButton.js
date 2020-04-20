import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import { Button } from 'lib/Button'

export const ClearButton = () => {
  const dispatch = useDispatch()
  return (
    <Button
      background='#e45e69'
      onClick={() => {
        dispatch(fridge.actions.removeAll())
      }}
    >
      Remove All
    </Button>
  )
}
