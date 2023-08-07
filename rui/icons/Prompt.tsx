import React from "react";
import Icon, { Props as IconProps } from "./Icon";

export default function PromptIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3V5C11 6.10457 10.1046 7 9 7H7C5.89543 7 5 6.10457 5 5V3Z" />
      <path d="M13 11C13 9.89543 13.8954 9 15 9H17C18.1046 9 19 9.89543 19 11V13C19 14.1046 18.1046 15 17 15H15C13.8954 15 13 14.1046 13 13V11Z" />
      <path d="M7 17C5.89543 17 5 17.8954 5 19V21C5 22.1046 5.89543 23 7 23H9C10.1046 23 11 22.1046 11 21V19C11 17.8954 10.1046 17 9 17H7Z" />
    </Icon>
  );
}
