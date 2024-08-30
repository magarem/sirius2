import { defineStore } from 'pinia'
import { useCookie } from '#app'

type UserType = {
  name: string
  email: string
}

const fakeData = {
  name: 'Aeropage',
  email: 'test@test.com',
  password: 'password'
}

export const useFakeAuthStore = defineStore('fakeAuth', () => {
  const fakeUser = useCookie<UserType | null>('aeropage_nuxt_fake_user')

  const getFakeUser = () => fakeUser.value ?? { name: '', email: '' }

  const isAuthenticated = () => {
    return getFakeUser().email.length > 0 && getFakeUser().name.length > 0
  }

  const register = (name: string, email: string, password: string) => {
    if (password == '' || email == '' || name == '') {
      return false
    }
    fakeUser.value = { name: name, email: email }
    return true
  }

  const login = (email: string, password: string) => {
    // if (fakeData.email == email && fakeData.password == password) {
    //   fakeUser.value = { name: fakeData.name, email: fakeData.email }
    //   return true
    // }
    // return false
    return true
  }

  const logout = () => {
    fakeUser.value = { name: '', email: '' }
  }

  return {
    fakeUser,
    getFakeUser,
    isAuthenticated,
    login,
    register,
    logout
  }
})
