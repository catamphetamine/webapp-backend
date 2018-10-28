import { NotFound } from 'serverless-functions/errors'

export default async function({ params, body, query }) {
	let id = params.id
	let account

	if (isNameId(id)) {
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

	account = account.toJSON()
	account.data = JSON.parse(account.data)

  return account
}

function isNameId(id) {
	return parseInt(id) !== id
}