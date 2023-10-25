import axios from 'axios'

export const transferService = async (data) => {
  try {
    const res = await axios.post('http://localhost:4000/api/operations/transfer', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const depositService = async (data) => {
  try {
    const res = await axios.post('http://localhost:4000/api/operations/cash', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
