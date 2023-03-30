import './index.css'

const MoneyDatails = props => {
  const {balance, income, expense} = props

  return (
    <>
      <div className="myCard1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="myCardImg"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="myCard2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="myCardImg"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="myCard3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="myCardImg"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expense}</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDatails
