import axios from 'axios'

export const transferService = async (data) => {
  try {
    const res = await axios.post('https://mp-server-eo7u.onrender.com/api/operations/transfer', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const depositService = async (data) => {
  try {
    const res = await axios.post('https://mp-server-eo7u.onrender.com/api/operations/cash', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
