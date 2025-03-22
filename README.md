# TS4NFDI Service Portal 

Will be extended soon ...

## Development

### Development requirements

- Node v18.18.0


```
nvm install 18.18.0
```
### Authenticate

Add the following two lines to your local npm configuration `~/.npmrc`. Replace `TOKEN` with your personal access
token (classic). 

```
@ts4nfdi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```
### Run TS4NFDI Service Portal for development

#### Manually
To start the development server, install the dependencies with `npm install --legacy-peer-deps` and start the 
application with this command:
```
npm run dev
```
The TS4NFDI Service Portal is available via `http://localhost:3000`.
