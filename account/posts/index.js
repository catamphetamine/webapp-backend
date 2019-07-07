export default async function({ params, body, query }) {
	const id = params.id

	let posts = await api.db.Post.findAll({
		order: [
			['createdAt', 'desc']
		],
		limit: 10,
		offset: query.offset,
		include: [{
			model: api.db.Account,
			attributes: [
				'id',
				'idAlias',
				'name',
				'data'
			],
			where: {
				[api.db.Op.or]: {
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

	const authorPicture = JSON.parse(posts[0].author.data).picture

	for (const post of posts) {
		post.author.picture = authorPicture
		post.author.data = null
		if (post.content) {
			post.content = JSON.parse(post.content)
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