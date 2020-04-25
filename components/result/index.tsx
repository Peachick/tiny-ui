import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Icon from '../icon';

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | 'loading';

const StatusIcon = Object.freeze({
  success: 'check-fill',
  error: 'close-fill',
  info: 'info-fill',
  warning: 'warn-fill',
  loading: 'sync',
});

export interface ResultProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  status?: ResultStatus;
  icon?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
}

const Result = React.forwardRef<HTMLDivElement, ResultProps>((props: ResultProps, ref) => {
  const {
    prefixCls = 'ty-result',
    status = 'info',
    title,
    subtitle,
    icon,
    extra,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${status}`);

  const renderIcon = (): React.ReactElement => {
    return (
      <div className={`${prefixCls}__icon-container`}>
        {'icon' in props ? (
          icon
        ) : (
          <Icon
            spin={status === 'loading'}
            name={StatusIcon[status]}
            className={`${prefixCls}__icon ${prefixCls}__icon_${status}`}
          />
        )}
      </div>
    );
  };

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      {renderIcon()}
      {title && <div className={`${prefixCls}__title`}>{title}</div>}
      {subtitle && <div className={`${prefixCls}__subtitle`}>{subtitle}</div>}
      {extra && <div className={`${prefixCls}__extra`}>{extra}</div>}
      {children && <div className={`${prefixCls}__content`}>{children}</div>}
    </div>
  );
});

Result.displayName = 'Result';

export default Result;
