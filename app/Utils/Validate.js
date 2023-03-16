import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

export default function validate(username, password) {
    if(validateUser(username)){
        if(validatePass(password)){
            return true;
        }
    }
    return false;
}

export default function validateUser(username){
    if (typeof username === 'string' || username instanceof String){
        if (username.length() > 6 && username.length() < 20){
            return true;
        }
    }
    return false;
}

export default function validatePass(password){
    if (typeof password === 'string' || password instanceof String){
        if (password.length() > 7 && password.length() < 50){
            return true;
        }
    }
    return false;
}