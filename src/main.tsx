import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from '@/routes/index.tsx'

import './index.scss'
import { ConfigProvider } from 'antd'
import { themeConfig } from './assets/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig}>
      <AppRoutes />
    </ConfigProvider>
  </React.StrictMode>,
)
