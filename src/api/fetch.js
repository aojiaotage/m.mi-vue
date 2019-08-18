import axios from 'axios'
import url from './index.js'
import * as mock from '../mock/index.js'

function decoPath (path, opts) {
  let p = path
  if (opts && opts.params) {
    for (let k of Object.keys(opts.params)) {
      p = path.replace(`/:${k}`, `/${opts.params[k]}`)
    }
  }
  return p
}

function fetch (api, data, opts) {
  return new Promise((resolve, reject) => {
    const apiObj = url[api]
    if (apiObj && apiObj.implemented) {
      const path = decoPath(apiObj.path, opts)
      axios[apiObj.method](path, data).then(res => {
        resolve(res.data)
      }).catch(err => {
        if (process.env.NODE_ENV === 'production') {
          reject(err)
        } else {
          console.error(err)
          resolve(mock[api])
        }
      })
    } else {
      resolve(mock[api])
    }
  })
}

export default fetch
