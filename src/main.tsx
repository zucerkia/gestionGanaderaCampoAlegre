import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

import { AppRoutes } from '@/routes/index.tsx'

import { AuthProvider } from './contexts'

import { themeConfig } from './assets/theme'

import './index.scss'

dayjs.locale('es')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
