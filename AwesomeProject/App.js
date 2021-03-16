import React, { Component } from 'react'
import TelaLogin from './src/componentes/telaLogin'
import { View, Text, StyleSheet } from 'react-native'
import Fot from './src/componentes/footer'
import Display from './src/componentes/display'
import Botao from './src/componentes/Button'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values:[0,0],
  current:0
}

export default class App extends Component {

  state = {...initialState}

  adddigite = (n) => {

   if (n === '.' && this.state.displayValue.includes('.')){
     return
   }

   const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
   const currentValue = clearDisplay ? '' : this.state.displayValue
   
   const displayValue = currentValue + n
   
   this.setState({displayValue,clearDisplay:false})

   if(n !== '.'){
     const newValue = parseFloat(displayValue)
     const values = [...this.state.values]
     values[this.state.current] = newValue
     this.setState({values})
   }

  }

  clearMemory = () => {
    this.setState({...initialState })
  } 

  Operation = (operation) => {
    if (this.state.current === 0){
      this.setState({operation,current:1,clearDisplay:true})
    }else{
      const equals = operation === "="
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (error) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue:`${values[0]}`,
        operation:equals  ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay:true,
        values
      })
    }
  }

  render() {
    return (

      <View style={estilo.container}>
        <Display texto={this.state.displayValue} />
        <View style={estilo.bot}>

          <Botao label='AC' triple onClick={this.clearMemory} />
          <Botao label='/' operation onClick={() => this.Operation('/')} />
          <Botao label='7' onClick={() => this.adddigite('7')} />
          <Botao label='8' onClick={() => this.adddigite('8')} />
          <Botao label='9' onClick={() => this.adddigite('9')} />
          <Botao label='*' operation onClick={() => this.Operation('*')} />
          <Botao label='4' onClick={() => this.adddigite('4')} />
          <Botao label='5' onClick={() => this.adddigite('5')} />
          <Botao label='6' onClick={() => this.adddigite('6')} />
          <Botao label='-' operation onClick={() => this.Operation('-')} />
          <Botao label='1' onClick={() => this.adddigite('1')} />
          <Botao label='2' onClick={() => this.adddigite('2')} />
          <Botao label='3' onClick={() => this.adddigite('3')} />
          <Botao label='+' operation onClick={() => this.Operation('+')} />
          <Botao label='0' onClick={() => this.adddigite('0')} />
          <Botao label='.' onClick={() => this.adddigite('.')} />
          <Botao label='=' double onClick={() => this.Operation('=')} />
        </View>

      </View>

    )
  }

}



const estilo = StyleSheet.create({
  container: {
    flex: 1,

  },
  bot: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

})

