import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

it('should add numbers together', () => {
  const button4 = container.getByTestId('number4');
  fireEvent.click(button4)
  const operatoradd = container.getByTestId('operator-add')
  fireEvent.click(operatoradd)
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1)
  const equalbutton = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('5');

})
it('should minus numbers', () => {
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7)
  const operatorsubtract = container.getByTestId('operator-subtract')
  fireEvent.click(operatorsubtract)
  const button4 = container.getByTestId('number4');
  fireEvent.click(button4)
  const equalbutton = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('3');

})
it('should multiply numbers', () => {
  const button3= container.getByTestId('number3');
  fireEvent.click(button3)
  const operatormultiply = container.getByTestId('operator-multiply')
  fireEvent.click(operatormultiply)
  const button5 = container.getByTestId('number5');
  fireEvent.click(button5)
  const equalbutton = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('15');

})

it('should divide numbers', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2)
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1)
  const operatordivide = container.getByTestId('operator-divide')
  fireEvent.click(operatordivide)
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7)
  const equalbutton = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('3');

})
it('concatenate multiple number button clicks', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2)
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1)
  const button7 = container.getByTestId('number7');
  fireEvent.click(button7)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('217');

})
it('chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2)
  const operatormultiply = container.getByTestId('operator-multiply')
  fireEvent.click(operatormultiply)
  const operatorsubtract = container.getByTestId('operator-subtract')
  fireEvent.click(operatorsubtract)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('4');

})
it('clear the running total without affecting the calculation', () => {
  const button9 = container.getByTestId('number9')
  fireEvent.click(button9)
  const operatormultiply = container.getByTestId('operator-multiply')
  fireEvent.click(operatormultiply)
  const button1 = container.getByTestId('number1')
  fireEvent.click(button1)
  const equalbutton = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton)
  const clearButton = container.getByTestId('clear')
  fireEvent.click(clearButton)
  const addbutton = container.getByTestId('operator-add')
  fireEvent.click(addbutton)
  const button3 = container.getByTestId('number3')
  fireEvent.click(button3)
  const equalbutton2 = container.getByTestId('operator-equals')
  fireEvent.click(equalbutton2)
  const runningTotal = container.getByTestId('running-total')
  expect(runningTotal.textContent).toEqual('12')
})
})