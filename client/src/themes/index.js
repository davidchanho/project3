import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default function Theme({children}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
