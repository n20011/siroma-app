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
          images: json.image
        })
      })
  }

  onClickButton () {
    window.location.reload()
  }

  render () {
    var { items, isLoaded, images } = this.state
console.log(this.state)
    if (!isLoaded) {
      return <div>...Loading</div>
    } else {
      return (
        <div>
          <h1 Style='text-align:center'>{items}!</h1>
          <img src={images} width='100%' height='500' />
          <button type='button' onclick={this.onClickButton}>reload</button>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
