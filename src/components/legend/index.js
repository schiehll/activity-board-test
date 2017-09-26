import React from 'react'
import { colors } from 'config'
import { List, Item, Text } from './styles'

const colorsArray = Object.keys(colors)
  .filter(color => color.startsWith('dayCell'))
  .map(color => colors[color])

const Legend = () => (
  <List>
    <Text>Less</Text>
    {colorsArray.map((color, index) => (
      <Item key={index} color={color} />
    ))}
    <Text>More</Text>
  </List>
)

export default Legend
