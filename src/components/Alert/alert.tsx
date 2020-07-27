import React, { FC } from "react";
import classNames from "classnames";
export type AlertType = "success" | "default" | "danger" | "warning";
export type PositionType = "left" | "top" | "bottom" | "right";

interface BaseAlertProps {
  className?: string;
  title?: React.ReactNode;
  position?: PositionType;
  /**设置 Button 的禁用 */
  /**设置 Button 的尺寸 */
  /**设置 Button 的类型 */
  type?: AlertType;
  children: React.ReactNode;
}
//交叉类型
type NativeAlertProps = BaseAlertProps;
//Partial 设置为可选属性
export type AlertProps = Partial<NativeAlertProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from '8'
 * ~~~
 */
export const Alert: FC<AlertProps> = (props) => {
  const { type, title, className, children, ...restProps } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });
  return (
    <div>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;
