import { useSelector, useDispatch } from 'react-redux'
import { toogleTheme } from './slice/themeSlice'
import { MdLightMode, MdModeNight } from 'react-icons/md'
import './styles/app.scss'
import Counter from './components/Counter'
import { useEffect } from 'react'
function App() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toogleTheme())
  }

  useEffect(() => {
    console.log('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div className="container">
      <div className="header">
        {' '}
        <span onClick={handleTheme}>
          {theme === 'light' ? (
            <MdLightMode className="toggle" />
          ) : (
            <MdModeNight className="toggle" />
          )}
        </span>
      </div>
      <Counter />
    </div>
  )
}

export default App
