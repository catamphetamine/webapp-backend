## Install

First, install [`webapp-internal-api`](https://github.com/catamphetamine/webapp-internal-api) and [`webapp-db`](https://github.com/catamphetamine/webapp-db) and seed the database (as per `webapp-db` README).

Then:

```
git clone git@github.com:catamphetamine/webapp-backend.git
cd webapp-backend
npm install
```

## Run

Create `serverless.json` file (it is excluded from the repo because it contains passwords):

```json
{
  "name": "webapp-backend",
	"code": {
		"initialize": "./custom/initialize.js"
	}
}
```

Run:

```
npm run dev
```