import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'lib/Container'
import { Title, Subtitle } from 'lib/Text'

export const FridgeSummary = () => {
  const items = useSelector((state) => state.fridge.items)
  const buyMoreItems = items.filter((item) => item.needsMore).length
  // Just interested in how many they are, so just need the length here.

  return (
    <Container>
      <Title>In my fridge I have {items.length} items.</Title>
      <Subtitle color='#3f8488'>
        I need to buy {buyMoreItems} item
        {buyMoreItems === 1 ? '.' : 's.'}
      </Subtitle>
    </Container>
  )
}
