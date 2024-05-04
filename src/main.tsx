import React from 'react'
import ReactDOM from 'react-dom/client'

import dayjs from 'dayjs'
import 'dayjs/locale/es'

import { ConfigProvider } from 'antd'
import es from 'antd/locale/es_ES'

import { AppRoutes } from '@/routes/index.tsx'

import { AuthProvider } from './contexts'

import { themeConfig } from './assets/theme'

import './index.scss'

dayjs.locale('es')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig} locale={es}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
