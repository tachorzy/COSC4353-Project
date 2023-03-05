import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'


class User {

    street;
    zip;
    state;
    city;
    name;

    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    
    get street() {
        return this.street();
      }

    set street(street){
        this.street= street;
    }

    get zip() {
        return this.zip;
    }

    set zip(zip) {
        this.zip = zip;
    }

    get state(){
        return this.state;
    }

    set state(state){
        this.state = state;
    }

    get city(){
        return this.city;
    }

    set city(city){
        this.city = city;
    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }
  }