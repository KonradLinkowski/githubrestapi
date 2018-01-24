# Github REST API
A simple REST service for github repositories.
## Instalation
```
git clone https://github.com/Kon1997/githubrestapi
npm install
npm start
```
Default port: 3000.
## Endpoints
```
REQUEST
GET /repositories/{owner}/{repository-name}
RESPONSE
{
  "fullName": "...",
  "description": "...",
  "cloneUrl": "...",
  "stars": 0,
  "createdAt": "..."
}
```