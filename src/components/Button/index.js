import React, { PropTypes } from "react"
import cx from "classnames"

import styles from "./index.css"

const Button = ({ className, color, outline, ...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className={ cx({
      [className]: className,
      [styles.button]: true,
      [styles.outline]: outline,
      [styles[color]]: color,
    })
   }
  />
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.oneOf(["blue", "red", "green"]),
}

Button.defaultProps = {
  className: "",
  outline: false,
  color: "blue",
}

Button.displayName = "Button"

export default Button
