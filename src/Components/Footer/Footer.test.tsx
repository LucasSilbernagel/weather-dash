import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders', () => {
    render(<Footer />)
    expect(screen.getByText('Built by')).toBeTruthy()
    expect(screen.getByText('Lucas Silbernagel')).toBeTruthy()
    expect(screen.getByText('API:')).toBeTruthy()
    expect(screen.getByText('OpenWeatherMap')).toBeTruthy()
  })
})
