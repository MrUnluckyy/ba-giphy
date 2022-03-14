import './button.scss'

const Button = ({ children, ...props }) => {
  return (
    <button className="btn btn-main" {...props}>{children}</button>
  )
}

export default Button