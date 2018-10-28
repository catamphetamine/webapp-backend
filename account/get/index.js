import { NotFound } from 'serverless-functions/errors'

export default async function({ params, body, query }) {
	let id = params.id
	let account

	if (isAliasId(id)) {
		account = await api.db.Account.findOne({
			where: {
				idAlias: id
			}
		})
		id = account.id
	}
	else {
		account = await api.db.Account.findByPk(id)
	}

	if (!account) {
		throw new NotFound()
	}

  return {
  	...account.toJSON(),
  	data: null,
  	...JSON.parse(account.data)
  }
}

function isAliasId(id) {
	return parseInt(id) !== id
}