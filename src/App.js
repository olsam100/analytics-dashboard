import ThemeProvider from 'context'
import { Dashboard } from 'routes'

const App = () => {
  return (
    <div className='app'>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </div>
  )
}

export default App
