import Input from './ui/Input/Input'
import styles from './App.module.css'
import Logo from './ui/Logo/Logo'
function App() {
return (
    <div className={styles.container}><Logo/><Input placeholder='Paste any YouTube link here'/></div>
  )
}

export default App
