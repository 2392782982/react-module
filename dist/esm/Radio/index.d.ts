import React from "react";
import './Radio.module.less';
interface RadioOption {
    label: string;
    value: string;
}
interface RadioProps {
    /**
  * @description 选项数组
  */
    options: RadioOption[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    /**
   * @description 是否禁用状态
   * @default false
   */
    disabled?: Boolean;
}
declare const Radio: React.FC<RadioProps>;
export default Radio;
