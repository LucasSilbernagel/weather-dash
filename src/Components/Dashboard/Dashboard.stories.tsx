import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import Dashboard from './Dashboard'

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = () => <Dashboard />

const forecastAtomConfig = [
  {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Fri',
    dayId: 1,
    maxTemp: 6,
    minTemp: 0,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Sat',
    dayId: 2,
    maxTemp: 5,
    minTemp: -0,
    weather: 'broken clouds',
    weatherId: 803,
  },
  {
    day: 'Sun',
    dayId: 3,
    maxTemp: 6,
    minTemp: 1,
    weather: 'light snow',
    weatherId: 600,
  },
  {
    day: 'Mon',
    dayId: 4,
    maxTemp: 6,
    minTemp: 1,
    weather: 'light rain',
    weatherId: 500,
  },
]

export const Loading = Template.bind({})
Loading.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={(snap: any): any => {
        snap.set(atomForecast, [])
      }}
    >
      <Story />
    </RecoilRoot>
  ),
]

export const Loaded = Template.bind({})
Loaded.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={(snap: any): any => {
        snap.set(atomForecast, forecastAtomConfig)
      }}
    >
      <Story />
    </RecoilRoot>
  ),
]
