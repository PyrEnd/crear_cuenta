const Alert = ({alert}) => {
  return (
    <div>
      <div className={`alert alert-${alert.color}`} role="alert">
        {alert.msg}
      </div>
    </div>
  )
}

export default Alert
