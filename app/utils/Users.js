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
    
    get getStreet() {
        return this.street();
      }

    set setStreet(street){
        this.street= street;
    }

    get getZip() {
        return this.zip;
    }

    set setZip(zip) {
        this.zip = zip;
    }

    get getState(){
        return this.state;
    }

    set setState(state){
        this.state = state;
    }

    get getCity(){
        return this.city;
    }

    set setCity(city){
        this.city = city;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }
  }