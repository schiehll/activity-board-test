import styled, { css } from 'styled-components'
import { dayCell } from 'config'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${(53 * (dayCell.size + dayCell.spacing)) + 30}px;
`

export const Week = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Day = styled.li`${
  ({ color }) => css`
    width: ${dayCell.size}px;
    height: ${dayCell.size}px;
    background-color: ${color};
    margin: ${dayCell.spacing}px 0;
  `
}`
