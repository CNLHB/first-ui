import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "success" | "default" | "danger" | "warning";
export type PositionType = "left" | "top" | "bottom" | "right";

interface BaseButtonProps {
  className?: string;
  position?: PositionType;
  /**设置 Button 的禁用 */
  /**设置 Button 的尺寸 */
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
}
//交叉类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//Partial 设置为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from '8'
 * ~~~
 */
export const Alert: FC<ButtonProps> = (props) => {
  const { btnType, className, children, ...restProps } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames("alert", className, {
    [`alert-${btnType}`]: btnType,
  });
  return <div>1</div>;
};

Alert.defaultProps = {
  btnType: "default",
};

export default Alert;
