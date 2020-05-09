import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'info'
  | 'error'
  | 'warning'
  | 'success';

export interface ButtonProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['button']> {
  btnType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const {
    size = 'md',
    btnType = 'default',
    loading = false,
    disabled = false,
    block = false,
    prefixCls: customisedCls,
    icon,
    round,
    children,
    className,
    style,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn', configContext.prefixCls, customisedCls);
  const btnSize = props.size || configContext.componentSize || size;
  const cls = classNames(prefixCls, className, `${prefixCls}_${btnSize}`, {
    [`${prefixCls}_${btnType}`]: btnType,
    [`${prefixCls}_block`]: block,
    [`${prefixCls}_round`]: round,
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_loading`]: loading,
  });

  const renderIcon = (): React.ReactElement | null => {
    if (loading) {
      return <span className={`${prefixCls}__loader`} />;
    } else if (icon) {
      return <span className={`${prefixCls}__icon-container`}>{icon}</span>;
    } else {
      return null;
    }
  };

  return (
    <button
      {...otherProps}
      ref={ref}
      role="button"
      className={cls}
      disabled={disabled || loading}
      style={style}>
      {renderIcon()}
      {children && <span className={`${prefixCls}__children`}>{children}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
