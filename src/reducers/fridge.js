import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    items: [
      { id: 1, name: 'Milk', needsMore: false, category: 'drink' },
      { id: 2, name: 'Butter', needsMore: true, category: 'food' },
      { id: 3, name: 'Cheese', needsMore: false, category: 'food' },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, category, dueDate } = action.payload
      state.items.push({
        id: Date.now(),
        name,
        category,
        startDate: Date.now(), // when added
        dueDate, // from datepicker
      })
    },
    removeItem: (state, action) => {
      // find 'cheese' or whatever item
      // remove it from the items array
      // id = 3
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleNeedsMore: (state, action) => {
      console.log(action.payload)
      // find 'cheese'
      const foundItem = state.items.find((item) => item.id === action.payload)

      // toggle the value of needsMore
      if (foundItem) {
        foundItem.needsMore = !foundItem.needsMore
      }
    },
  },
})
