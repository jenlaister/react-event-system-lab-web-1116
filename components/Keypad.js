const React=require('react')


class Keypad extends React.Component {
  constructor(){
  super()
  this.keyUp = this.keyUp.bind(this)
  }

  keyUp(){
    console.log('Entering password...')
  }

  render(){
    return(
      <div className='Keypad'>
      <input type='password' onKeyUp={this.keyUp}/>
      </div>
    )
  }
}

module.exports = Keypad;
