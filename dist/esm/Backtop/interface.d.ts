export interface BacktopProps {
    /**
     * @description 类名
     */
    className?: string;
    /**
     * @description 控制其显示位置, 距离页面右边距
     */
    right?: Number;
    /**
     * @description 控制其显示位置, 距离页面底部距离
     */
    bottom?: Number;
}
export interface ButtonStyle {
    className?: string;
    right?: Number;
    bottom?: Number;
}
export declare type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
