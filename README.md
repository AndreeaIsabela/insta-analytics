# insta-analytics

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Compiles the server
```
npm run build:server
```

### Starts the server
```
npm start
```

### Starts the server in debug mode
```
npm run debug + atatch debugger (F5)
```

### launch.json
```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Attach debugger",
			"type": "node",
			"request": "attach",
			"port": 5858,
			"address": "localhost",
			"restart": true,
			"sourceMaps": true,
			"outFiles": [],
			"localRoot": "${workspaceRoot}/server/"
    },
    {
			"type": "node",
			"request": "launch",
			"name": "Launch Nodemon",
			"runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
			"program": "${workspaceFolder}/server/app.ts",
			"restart": true,
			"sourceMaps": true,
			"console": "internalConsole",
			"internalConsoleOptions": "neverOpen",
		}
	]
}

