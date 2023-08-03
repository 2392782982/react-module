export interface DividerProps {
    /**
     * @description 类型
     */
    text?: any;
    /**
     * @description 设置文案
     * @default false
     */
    SetCopy?: Boolean;
    /**
     * @description 垂直分割
     * @default false
     *
     */
    contentPosition?: Boolean;
}
export interface ButtonStyle {
    text?: any;
    SetCopy?: Boolean;
    contentPosition?: Boolean;
}
export declare type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
