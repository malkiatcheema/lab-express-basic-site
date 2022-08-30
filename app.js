const express = require('express')
const app = express()
const port = 8820

console.log('wserver')

// https://www.npmjs.com/package/nodemon

// this line is needed to register the public folder and send
// it to the client
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {

	console.log(__dirname)
	res.sendFile(__dirname + '/views/home.html')
})
app.get('/home', (req, res) => {

	console.log(__dirname)
	res.sendFile(__dirname + '/views/home.html')
})
app.get('/work', (req, res) => {

	console.log(__dirname)
	res.sendFile(__dirname + '/views/work.html')
})

app.get('/about', (req, res) => {

	console.log(__dirname)
	res.sendFile(__dirname + '/views/about.html')
})



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
