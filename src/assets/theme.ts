import { ThemeConfig } from 'antd'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig, {
  type Colors,
  type DefaultColors,
} from '../../tailwind.config'

const tw = resolveConfig(tailwindConfig)
const { theme } = tw as unknown as {
  theme: (typeof tw)['theme'] & { colors: DefaultColors & Colors }
}

const defaultTheme = {
  colorPrimary: theme.colors.primary.DEFAULT,
  algorithm: true,
}

export const themeConfig: ThemeConfig = {
  components: {
    Button: defaultTheme,
    Input: defaultTheme,
    Anchor: defaultTheme,
    Tabs: defaultTheme,
    Pagination: defaultTheme,
  },
}
