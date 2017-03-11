import React, { PropTypes } from "react"
import cx from "classnames"

import styles from "./index.css"

const Button = ({ className, color, outline, disabled, ...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className={ cx({
      [className]: className,
      [styles.button]: true,
      [styles.outline]: outline,
      [styles[color]]: color,
      [styles.disabled]: disabled,
    })
   }
  />
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.oneOf(["blue", "red", "green"]),
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  className: "",
  outline: false,
  color: "blue",
  disabled: false,
}

Button.displayName = "Button"

export default Button
