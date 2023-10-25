import axios from 'axios'

export const registerService = async (data) => {
  try {
    const res = await axios.post('http://localhost:4000/api/auth/register', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const loginService = async (credentials) => {
  try {
    const res = await axios.post('http://localhost:4000/api/auth/login', credentials)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getProfileService = async (id) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/auth/profile/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const editAliasService = async (data) => {
  try {
    const res = await axios.post('http://localhost:4000/api/auth/editAlias', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
