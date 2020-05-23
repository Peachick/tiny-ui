import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { StepsItemProps } from './steps-item';
import { StepsContext } from './steps-context';

export type StepsDirection = 'horizontal' | 'vertical';
export type StepsStatus = 'wait' | 'process' | 'finish' | 'error';

export interface StepsProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  current?: number;
  defaultCurrent?: number;
  direction?: StepsDirection;
  status?: StepsStatus;
  labelPlacement?: StepsDirection;
  onChange?: (current: number) => void;
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (props: StepsProps, ref): React.ReactElement => {
    const {
      defaultCurrent = 0,
      status = 'process',
      direction = 'horizontal',
      labelPlacement = 'horizontal',
      onChange,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('steps', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, `${prefixCls}_${direction}`);
    const [current] = useState<number>(
      'current' in props ? (props.current as number) : defaultCurrent
    );

    return (
      <StepsContext.Provider
        value={{
          current,
          labelPlacement,
        }}>
        <div {...otherProps} ref={ref} className={cls}>
          {React.Children.map(children, (child, idx) => {
            const childElement = child as React.FunctionComponentElement<StepsItemProps>;
            if (childElement.type.displayName === 'StepsItem') {
              const childProps = {
                ...childElement.props,
                stepIndex: idx,
              };
              return React.cloneElement(childElement, childProps);
            } else {
              console.warn('Steps has a child that is not a Step component.');
              return null;
            }
          })}
        </div>
      </StepsContext.Provider>
    );
  }
);

Steps.displayName = 'Steps';

export default Steps;
