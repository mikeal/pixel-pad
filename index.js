/* globals URL */
const funky = require('funky')
const elementClass = require('element-class')

let _default = 'white'
let defaultColor = () => {
  if (_default === '#F0F0F0') _default = 'white'
  else _default = '#F0F0F0'
  return _default
}

const pixelView = funky`
<pixel-app-pixel>
  <div class="pixel-fill"
       style="background-color:${pixel => pixel || defaultColor()}"
       gridindex="${(p, i) => i}"
       >
  </div>
</pixel-app-pixel>
`

const rowView = funky`
<pixel-app-row>
  <pixel-row-info gridindex="${(p, i) => i}"></pixel-row-info>
  ${row => row.map(pixelView)}
</pixel-app-row>
`

function init (elem, rows) {
  elem.setPixel = (row, column, color) => {
    // exposed publicly so that it can be set without more writes
    defaultColor = () => 'white'
    rows[row][column] = color
    elem.update(rows)
  }

  let selector = 'button.jscolor'
  let getColor = () => `#${elem.parentNode.querySelector(selector).textContent}`

  let setPixel = (row, column) => {
    let color = getColor()
    elem.setPixel(row, column, color)
  }

  elem.onclick = e => {
    if (!elementClass(e.target).has('pixel-fill')) return
    let row = +e.target.parentNode.parentNode.children[0].getAttribute('gridindex')
    let column = +e.target.getAttribute('gridindex')
    setPixel(row, column)
  }
}

const appView = funky`
${init}
<pixel-app>
  <style>
  pixel-app-pixel {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  pixel-app-row {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
  }
  pixel-row-info {
    display: none;
  }
  div.pixel-fill {
    width: 100%;
    height: 100%;
  }
  div.pixel-fill:hover {
    filter: blur(5px) grayscale(20%);
    border: 1px solid;
  }
  </style>
  ${rows => rows.map(rowView)}
</pixel-app>
`

const padView = funky`
<pixel-app-container>
  <style>
  div.color-palette {
    padding: 5px 5px 5px 5px
  }
  div.color-palette input {
    width: 80px;
  }
  button.jscolor {
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 13;
    -moz-border-radius: 13;
    border-radius: 13px;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
    border: 1px solid;
    border-color: #F0F0F0;
    cursor: pointer;
    margin: 5px 5px 5px 5px;
  }
  button.jscolor:hover {
    border: solid 1px #CCC;
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
        box-shadow: 1px 1px 5px #999;
  }
  </style>
  ${appView}
  <button class="jscolor {value:'FFA500'}">
    FFA500
  </button>
</pixel-app-container>
`

function write (data) {
  data.app = 'pixel-pad'
  data.api = 'https://TODO/api/v1'
  window.parent.postMessage(data, '*')
}

function setHeight (creator) {
  let height = +document.querySelector('pixel-app').offsetHeight
  if (creator) height += 80
  if (window.parent) window.parent.postMessage({height}, '*')
}

function creatorInit (elem, rows) {
  let app = elem.querySelector('pixel-app')
  elem.querySelector('div.pixel-add-row').onclick = () => {
    rows = fill(rows.length + 1, rows[0].length)
    app.update(rows)
    setHeight(true)
  }
  elem.querySelector('div.pixel-add-column').onclick = () => {
    rows = fill(rows.length, rows[0].length + 1)
    app.update(rows)
    setHeight(true)
  }
  elem.querySelector('div.pixel-update-url').onclick = () => {
    let search = `?rows=${rows.length}&columns=${rows[0].length}`
    write({embed: `https://mikeal.github.io/pixel-pad/${search}`})
    window.location.search = search
  }
}
const creatorView = funky`
${creatorInit}
<pixel-app-creator>
  <style>
  pixel-app-creator {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  div.pixel-add-button {
    font-size: 40px;
    color: grey;
    cursor: pointer;
    padding-left: 5px;
  }
  div.pixel-add-fill {
    width: 100%;
  }
  div.pixel-add-column {
    margin-left: -30px;
  }
  div.pixel-add-row {
    margin-left: -30px;
  }
  div.pixel-update-url {
    margin-top: -50px;
    font-size: 40px;
    color: #FFA500;
    cursor: pointer;
    padding-left: 5px;
    align-self: flex-start;
  }
  pixel-app-creator pixel-app {
    padding-top:20px;
  }
  </style>
  ${appView}
  <div class="pixel-update-url">⇛</div>
  <div class="pixel-add-button pixel-add-column">⇛</div>
  <div class="pixel-add-fill"></div>
  <div class="pixel-add-button pixel-add-row">⤋</div>
</pixel-app-creator>
`

//

const fill = (rows, columns) => {
  let ret = []
  let i = 0
  while (i < rows) {
    let row = []
    let ii = 0
    while (ii < columns) {
      row.push(0)
      ii++
    }
    i++
    ret.push(row)
  }
  return ret
}

let url = new URL(window.location.toString())

if (url.searchParams.has('rows')) {
  let rows = +url.searchParams.get('rows')
  let columns = +url.searchParams.get('columns')
  let elem = padView(fill(rows, columns))
  document.getElementById('center-container').appendChild(elem)
  let height = document.body.offsetHeight
  if (window.parent) window.parent.postMessage({height}, '*')
} else {
  let elem = creatorView(fill(7, 15))
  document.getElementById('center-container').appendChild(elem)
}

