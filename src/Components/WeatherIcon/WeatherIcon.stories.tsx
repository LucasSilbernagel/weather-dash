import { ComponentStory, ComponentMeta } from '@storybook/react'
import WeatherIcon from './WeatherIcon'

export default {
  title: 'Components/WeatherIcon',
  component: WeatherIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WeatherIcon>

const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
)

export const Snow = Template.bind({})
Snow.args = {
  size: '4rem',
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'light snow',
    weatherId: 600,
  },
}

export const Thunder = Template.bind({})
Thunder.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'thunderstorm with light rain',
    weatherId: 200,
  },
}

export const Drizzle = Template.bind({})
Drizzle.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'light intensity drizzle',
    weatherId: 300,
  },
}

export const Rain = Template.bind({})
Rain.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'light rain',
    weatherId: 500,
  },
}

export const Fog = Template.bind({})
Fog.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'fog',
    weatherId: 741,
  },
}

export const Clear = Template.bind({})
Clear.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'clear sky',
    weatherId: 800,
  },
}

export const Clouds = Template.bind({})
Clouds.args = {
  ...Snow.args,
  day: {
    day: 'Thu',
    dayId: 0,
    maxTemp: 7,
    minTemp: 1,
    weather: 'scattered clouds',
    weatherId: 802,
  },
}
