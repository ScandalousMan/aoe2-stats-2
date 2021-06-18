import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api-aoe-stats-com.herokuapp.com`
  })
}
