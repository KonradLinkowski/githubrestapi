const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

// set application port
const port = process.env.PORT || 3000

const app = express()

// allow cors
app.use(cors())

// parse request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// get repository info
function getInfo(user, repo) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/repos/${user}/${repo}`)
    .then(({ data }) => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

// server response
app.get('/repositories/:owner/:repository', (req, res) => {
  getInfo(req.params.owner, req.params.repository)
  .then(repo => {
    res.json({
      "fullName": repo.full_name,
      "description": repo.description,
      "cloneUrl": repo.clone_url,
      "stars": repo.stargazers_count,
      "createdAt": repo.created_at
    })
  })
  .catch(err => {
    console.error(err)
  })
});

// run the server
app.listen(port, () => {
    console.log("Server listening at port: " + port)
});