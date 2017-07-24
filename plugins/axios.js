import * as axios from 'axios'
import apiConfig from '../api.config'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = apiConfig.baseUrl
}

export default axios.create(options)
