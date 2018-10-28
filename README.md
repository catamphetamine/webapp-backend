## Install

```
npm install
```

## Run

Create `serverless.json` file:

```json
{
  "name": "webapp-backend",
	"code": {
		"initialize": "./custom/initialize.js"
	}
}
```

Run the API server locally:

```
npm run dev
```

Requires `webapp-api`.