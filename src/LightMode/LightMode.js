import { useSelector } from 'react-redux'
import '../index.scss'

export default function LightMode() {
    const darkMode = useSelector(state=>state.darkMode)
    if(darkMode){
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
    }
    else{
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
    }
}