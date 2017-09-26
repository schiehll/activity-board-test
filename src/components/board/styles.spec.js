import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { Wrapper, Week, Day } from 'components/board/styles'
import { dayCell } from 'config'

describe('Wrapper', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<Wrapper />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'space-around')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('width', `${(53 * (dayCell.size + dayCell.spacing)) + 30}px`)
  })
})

describe('Week', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<Week />).toJSON()
    expect(tree).toHaveStyleRule('list-style', 'none')
    expect(tree).toHaveStyleRule('padding', '0')
    expect(tree).toHaveStyleRule('margin', '0')
  })
})

describe('Day', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<Day />).toJSON()
    expect(tree).toHaveStyleRule('width', `${dayCell.size}px`)
    expect(tree).toHaveStyleRule('height', `${dayCell.size}px`)
    expect(tree).toHaveStyleRule('margin', `${dayCell.spacing}px 0`)
  })
})
