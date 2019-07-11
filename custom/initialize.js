import DB from '../webapp-db'
import dbConfiguration from '../webapp-db/configuration'

import API from '../webapp-internal-api'
import apiConfiguration from '../webapp-internal-api/configuration'

// `STAGE` variable will be accessible at runtime.
function $initialize() {
  const api = new API(apiConfiguration[getConfigStageName(STAGE)])
  const db = new DB(dbConfiguration[getConfigStageName(STAGE)])
  // Make the tools accessible from functions as global variables.
  global.api = api
  global.db = db
}

function getConfigStageName(stage) {
	switch (stage) {
		case 'dev':
			return 'development'
		case 'prod':
			return 'production'
		default:
			return stage
	}
}