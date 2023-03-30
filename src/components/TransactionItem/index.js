// Write your code here
import './index.css'

const TransactionItem = props => {
  const {obj, func} = props
  const {id, title, amount, type} = obj

  const onFunc = () => {
    func(id)
  }

  return (
    <li className="listEl">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button className="button" type="button" onClick={onFunc}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
