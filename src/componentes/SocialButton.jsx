import React from "react"

const SocialButton = ({icon}) =>  {
  return (
    <div className="d-flex justify-content-around pb-4">
        <i className={`fa-brands fa-${icon} fa-2x`}></i>
    </div>
  )
}

export default SocialButton
