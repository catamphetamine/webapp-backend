export default async function({ params, body, query }) {
	const id = params.id

	let posts = await db.Post.findAll({
		order: [
			['createdAt', 'desc']
		],
		limit: 10,
		offset: query.offset,
		include: [{
			model: db.Account,
			attributes: [
				'id',
				'idAlias',
				'name',
				'data'
			],
			where: {
				[db.Op.or]: {
					id,
					idAlias: id
				}
			}
		}]
	})

	if (posts.length === 0) {
		return []
	}

	posts = posts.map(_ => _.toJSON())

	const account = posts[0].account
	const accountPicture = JSON.parse(account.data).picture

	for (const post of posts) {
		post.account.picture = accountPicture
		post.account.data = undefined
		if (post.content) {
			if (post.content[0] === '[') {
				post.content = JSON.parse(post.content)
			}
		}
		if (post.attachments) {
			post.attachments = JSON.parse(post.attachments)
		}
	}

	return posts
}

function isAliasId(id) {
	return parseInt(id) !== id
}