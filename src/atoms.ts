import { atom } from 'recoil'
import { IDigestedWeatherDay } from './types'

/** Array containing a five-day weather forecast for the selected city */
export const atomForecast = atom<IDigestedWeatherDay[]>({
  key: 'atomForecast',
  default: [],
})
