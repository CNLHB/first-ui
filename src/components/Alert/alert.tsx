import React, { FC, useState } from "react";
import classNames from "classnames";
export type AlertType = "success" | "default" | "danger" | "warning";
export type PositionType = "left" | "top" | "bottom" | "right";

interface BaseAlertProps {
  className?: string;
  title?: React.ReactNode;
  position?: PositionType;
  message?: React.ReactNode;
  type?: AlertType;
  children: React.ReactNode;
}
//交叉类型
type NativeAlertProps = BaseAlertProps;

//Partial 设置为可选属性
export type AlertProps = Partial<NativeAlertProps>;

export const Alert: FC<AlertProps> = (props) => {
  const [visibility, setVisibility] = useState(true);
  const {
    type,
    title,
    message,
    position,
    className,
    children,
    ...restProps
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    [`alert-${position}`]: position,
    [`alert-none`]: !visibility,
  });
  return (
    <div className={classes} {...restProps}>
      <div className="alert-content">
        <span className="alert-title">{title}</span>
        <span className="alert-message">{message}</span>
      </div>
      <div className="alert-close">
        <span
          onClick={() => {
            setVisibility(false);
          }}
        >
          关闭
        </span>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;
