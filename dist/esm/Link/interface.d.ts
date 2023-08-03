export interface LinkProps {
    /**
     * @description 是否禁用状态
     * @default false
     */
    disabled?: Boolean;
    /**
     * @description 是否下划线
     * @default false
     */
    underline?: Boolean;
    /**
     * @description 原生 href 属性
     */
    href?: string;
    /**
    * @description 在新标签页中打开
    */
    target?: string;
    /**
    * @description 类名
    */
    className?: string;
    /**
        * @description 组件标签之间传递内容
        */
    children?: string;
}
export interface ButtonStyle {
    disabled?: Boolean;
    href?: string;
    target?: string;
    className?: string;
    children: React.ReactNode;
}
export declare type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
