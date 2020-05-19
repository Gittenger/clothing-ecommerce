import React from "react";

import { ButtonComponent } from "./button.styles";

const Button = ({ children, ...props }) => (
  <ButtonComponent {...props}>{children}</ButtonComponent>
);

export default Button;
