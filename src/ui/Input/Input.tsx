import { memo } from "react"
import styles from './Input.module.css'
interface InputProps {
    value?:string
    onChange?:()=>void
    placeholder?:string
}

const Input=memo(function Input({ value,onChange,placeholder}:InputProps) {
    return (
        <input className={styles.input} placeholder={placeholder} value={value} onChange={onChange}/>
            
    )
})

export default Input
