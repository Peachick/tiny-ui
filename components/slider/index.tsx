import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface SliderProps extends BaseProps {
  value?: number | number[];
  min?: number;
  max?: number;
  marks?:
    | boolean
    | {
        [key: number]: {
          style?: React.CSSProperties;
          label?: React.ReactNode;
        };
      };
  dots?: boolean;
  range?: boolean;
  vertical?: boolean;
  step?: number;
  disabled?: boolean;
  tooltip?: boolean;
  progress?: boolean | string;
  renderMarks?: (value: number) => void;
  onChange?: (value: number | number[]) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}

const Slider = (props: SliderProps): React.ReactElement => {
  const {
    value = 0,
    min = 0,
    max = 100,
    // dots = false,
    // step = 1,
    // disabled = false,
    // progress = true,
    // tooltip = false,
    className,
    prefixCls: customisedCls,
    style,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('slider', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [val, setVal] = useState(Array.isArray(value) ? value : [value]);

  const getValueToPercent = (value: number): number => {
    return ((value - min) / (max - min)) * 100;
  };

  const getBarStyle = (value: number[]): React.CSSProperties => {
    const style = { left: '0%', right: '60%' };
    if (!Array.isArray(props.value)) {
      style.right = `${100 - getValueToPercent(value[0])}%`;
    } else {
      const leftValue = value[0] > value[1] ? value[1] : value[0];
      const rightValue = value[0] > value[1] ? value[0] : value[1];
      style.left = `${getValueToPercent(leftValue)}%`;
      style.right = `${100 - getValueToPercent(rightValue)}%`;
    }
    return style;
  };

  const barStyle = getBarStyle(val);

  const onThumbBtnDown = (idx: number, event: React.MouseEvent<HTMLElement>) => {};

  useEffect(() => {
    'value' in props && setVal(Array.isArray(props.value) ? props.value : [props.value!]);
  }, [props.value]);

  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}__bar`} style={{ ...barStyle }} />
      {val.map((item, idx) => (
        <div
          key={idx}
          onMouseDown={(e): void => onThumbBtnDown(idx, e)}
          className={`${prefixCls}__thumb`}
          style={{ left: `${getValueToPercent(item)}%` }}
        />
      ))}
    </div>
  );
};

export default Slider;
