import axios from 'axios'

const baseUrl = 'api/matches'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
    return response.data
}

export default { getAll }