import API from '../webapp-api'
import configuration from '../webapp-api/configuration'

function $initialize() {
  const api = new API(configuration[STAGE])
  // Make the `api` accessible from functions.
  global.api = api
}