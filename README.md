## Install

```
npm install
```

## Run

Create `serverless.json` file (is excluded from the repo because it will contain passwords):

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