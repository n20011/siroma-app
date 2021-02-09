import React, { Component } from 'react'
import { render } from 'react-dom'
import './App.css'

class Exchange extends Component {
  constructor (props) {
    super(props)
    this.state = { // state初期化
      isLoaded: false,
      items: []
    }
  }
  componentDidMount () { // render直後に行いたい処理を書くところ
    fetch('https://yesno.wtf/api') // api
      .then(res => res.json())
      .then(json => {
        console.log(json.rates)
        this.setState({
          isLoaded: true,
          items: json.answer,
          image: json.image
        })
      })
  }

  render () {
    var { items, isLoaded, image } = this.state
console.log(image)
    if (!isLoaded) {
      return <div>...Loading</div>
    } else {
      return (
        <div>
          <h1 Style='text-align:center'>{items}!</h1>
          <img src={image} width='100%' height='500' />
          <button type='button' onclick=''>reload</button>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
