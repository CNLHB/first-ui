import React from "react";
//import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
  onClick: jest.fn(),
};
describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.queryByText("Nice") as HTMLButtonElement; //测试文本是否正确
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON"); //测试标签是否正确
    expect(element).toHaveClass("btn btn-default"); //测试class是否正确
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.queryByText("Nice") as HTMLButtonElement; //测试文本是否正确
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON"); //测试标签是否正确
    expect(element).toHaveClass("btn btn-lg klass"); //测试class是否正确
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render a link when btnType equals link and herf is provided", () => {
    const wrapper = render(
      <Button {...defaultProps} btnType="link" href="http://www.baidu.com">
        Link
      </Button>
    );
    const element = wrapper.queryByText("Link") as HTMLAnchorElement; //测试文本是否正确
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A"); //测试标签是否正确
    expect(element).toHaveClass("btn btn-link"); //测试class是否正确
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render disabled button when disabled a default", () => {
    const wrapper = render(
      <Button {...defaultProps} btnType="danger">
        disabled
      </Button>
    );
    const element = wrapper.queryByText("disabled") as HTMLButtonElement; //测试文本是否正确
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON"); //测试标签是否正确
    expect(element).toHaveClass("btn btn-danger"); //测试class是否正确
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render disabled button when disabled set a true", () => {
    const wrapper = render(
      <Button {...defaultProps} disabled={true} btnType="danger">
        disabled
      </Button>
    );
    const element = wrapper.queryByText("disabled") as HTMLButtonElement; //测试文本是否正确
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON"); //测试标签是否正确
    expect(element).toHaveClass("btn btn-danger"); //测试class是否正确
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
