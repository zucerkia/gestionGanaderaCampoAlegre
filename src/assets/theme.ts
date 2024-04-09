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

export const themeConfig: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: theme.colors.primary.DEFAULT,
      algorithm: true,
    },
    Input: {
      colorPrimary: theme.colors.primary.DEFAULT,
      algorithm: true,
    },
    Anchor: {
      colorPrimary: theme.colors.primary.DEFAULT,
      algorithm: true,
    },
  },
}
