const React = require('react')
const ReactDOM = require('react-dom')

function ShowDog (props) {
  const { dogUrl, label } = props
  return (
    <div>
      <p>{label.length > 0 ? label : 'NO LABEL SPECIFIED'}</p>
      <img src={dogUrl} />
    </div>
  )
}

function ShowDate () {
  const date = new Date()

  return (
    <p>{`The date is: ${date}`}</p>
  )
}

function helloTemplate (props) {
  return (
    <div>
      <div>hello {props.name}</div>
      <ShowDog label='' dogUrl={data.dogUrl} />
      <ShowDate />
    </div>
  )
}

const data = {
  dogUrl: 'http://www.placepuppy.net/400/250',
  name: 'humans'

}
const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
