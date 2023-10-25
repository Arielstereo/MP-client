import axios from 'axios'

export const registerService = async (data) => {
  try {
    const res = await axios.post('https://mp-server-eo7u.onrender.com/api/auth/register', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const loginService = async (credentials) => {
  try {
    const res = await axios.post('https://mp-server-eo7u.onrender.com/api/auth/login', credentials)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getProfileService = async (id) => {
  try {
    const res = await axios.get(`https://mp-server-eo7u.onrender.com/api/auth/profile/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const editAliasService = async (data) => {
  try {
    const res = await axios.post('https://mp-server-eo7u.onrender.com/api/auth/editAlias', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
