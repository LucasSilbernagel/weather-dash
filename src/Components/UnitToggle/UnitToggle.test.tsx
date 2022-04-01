import { render, screen } from '@testing-library/react'
import UnitToggle from './UnitToggle'

describe('UnitToggle', () => {
  test('renders', () => {
    render(<UnitToggle units={'metric'} handleChange={() => null} />)
    expect(screen.getByText('Celsius')).toBeTruthy()
    expect(screen.getByText('Fahrenheit')).toBeTruthy()
  })
})
