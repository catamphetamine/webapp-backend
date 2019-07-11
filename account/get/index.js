import { NotFound } from 'serverless-functions/errors'

export default async function({ params, body, query }) {
	let id = params.id
	let account

	if (isAliasId(id)) {
		account = await db.Account.findOne({
			where: {
				idAlias: id.toLowerCase()
			}
		})
		if (account) {
			id = account.id
		}
	}
	else {
		account = await db.Account.findByPk(id)
	}

	if (!account) {
		throw new NotFound()
	}

	return {
		// `data` must not override other properties.
		...JSON.parse(account.data),
		...account.toJSON(),
		data: null
	}
}

function isAliasId(id) {
	return parseInt(id) !== id
}