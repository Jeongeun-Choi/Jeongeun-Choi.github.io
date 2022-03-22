import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

type IconProps = {
  icon: IconDefinition;
  style: object;
};

const IconButton: FunctionComponent<IconProps> = ({
  icon,
  style,
  ...props
}) => <FontAwesomeIcon icon={icon} style={style} {...props} />;

export default IconButton;
