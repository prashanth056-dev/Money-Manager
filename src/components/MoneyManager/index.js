import './index.css'
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDatails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    list: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const typeOptionEl = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === type,
    )
    const {displayText} = typeOptionEl

    if (title !== '' && amount !== '') {
      const newElem = {
        id: uuid(),
        title,
        amount: parseInt(amount),
        type: displayText,
      }
      this.setState(prevState => ({
        list: [...prevState.list, newElem],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  getBalance = () => {
    const {list} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].optionId) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncome = () => {
    const {list} = this.state
    let incomeAmount = 0
    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].optionId) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpenses = () => {
    const {list} = this.state
    let expensesAmount = 0

    list.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].optionId) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  onDelete = id => {
    const {list} = this.state
    const dubLst = list.filter(eachItem => eachItem.id !== id)
    this.setState({
      list: dubLst,
    })
  }

  render() {
    const {title, amount, list, type} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expense = this.getExpenses()

    return (
      <div className="mainBg">
        <div className="profileCard">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="balanceCard">
          <MoneyDatails balance={balance} income={income} expense={expense} />
        </div>
        <div className="transactionCard">
          <form className="formCont" onSubmit={this.onSubmitButton}>
            <h1>Add Transaction</h1>
            <div className="column">
              <label htmlFor="title">TITLE</label>
              <input
                className="input"
                type="text"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="column">
              <label htmlFor="amount">AMOUNT</label>
              <input
                className="input"
                type="number"
                id="amount"
                placeholder="AMOUNT"
                value={parseInt(amount)}
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="column">
              <label htmlFor="type">TYPE</label>
              <select
                value={type}
                className="input"
                id="type"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <div className="formCont">
            <h1>History</h1>
            <ul>
              <li className="listEl">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {list.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  obj={eachItem}
                  func={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
