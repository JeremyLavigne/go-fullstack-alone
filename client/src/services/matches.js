import axios from 'axios'

const baseUrl = 'api/matches'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
    return response.data
}

const postOne = async (data) => {
    const newMatch = { 
        key: Math.floor(Math.random() * Math.floor(10000000)),
        object: data
    }
    const request = axios.post(baseUrl, newMatch)
    const response = await request
      return response.data
  }

export default { getAll, postOne }