import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log(`Server is running ...`)
})