import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <h3>Basic eCommerce</h3>
      </Link>
    </div>
  )
}
