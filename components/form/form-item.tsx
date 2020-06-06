import React, { useState, useEffect, useContext, useCallback } from 'react';
import classNames from 'classnames';
import { FormInstanceContext } from './form-instance-context';
import { FormOptionsContext } from './form-options-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { FormItemProps } from './types';
import { getPropName, getValueFromEvent } from './form-helper';
import Row from '../grid/row';
import Col from '../grid/col';
import Transition from '../transition';

const FormItem = (props: FormItemProps): JSX.Element => {
  const {
    colon = true,
    valueGetter = getValueFromEvent,
    valuePropName = 'value',
    name,
    label,
    helper,
    notice,
    rules,
    className,
    style,
    children,
    labelCol: itemLabelCol,
    wrapperCol: itemWrapperCol,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form-item', configContext.prefixCls, customisedCls);
  const form = React.useContext(FormInstanceContext);
  const { wrapperCol, labelCol, validateTrigger, layout } = React.useContext(FormOptionsContext);
  const [value, setValue] = useState(name ? form.getFieldValue(name) : undefined);
  const [error, setError] = useState<string | undefined>(
    name ? form.getFieldError(name) : undefined
  );
  const [hasErrLabel, setHasErrLabel] = useState(false);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_has-error`]: !!error,
    [`${prefixCls}_with-err-label`]: hasErrLabel,
  });
  const isRequired =
    'required' in props ? props.required : (rules && rules.some((rule) => rule.required)) || false;

  // get onChange event from all components which support onChange callback
  const onChange = useCallback(
    (...args: any[]) => {
      if (name) {
        form.setFieldValue(name, valueGetter(...args));
        validateTrigger === 'onChange' && form.validateField(name);
      }
    },
    [name, form, valueGetter, validateTrigger]
  );

  // get onBlur event from input
  const onBlur = useCallback(() => {
    name && validateTrigger === 'onBlur' && form.validateField(name);
  }, [name, form, validateTrigger]);

  let child: any = children;
  const prop = getPropName(valuePropName, child && child.type);
  const childProps = { [prop]: value, onChange, onBlur };
  child = React.cloneElement(child, childProps);

  const labelCls = classNames({
    [`${prefixCls}__label_required`]: label && isRequired,
    [`${prefixCls}__label_colon`]: label && colon,
  });

  const getSpanAndOffset = (col: number | { span: number; offset: number }): [number, number] => {
    if (typeof col === 'number') {
      return [col, 0];
    } else {
      return [col.span, col.offset];
    }
  };

  const getCol = (
    col: number | { span: number; offset: number },
    isSelf?: boolean
  ): [number, number] => {
    if (isSelf) {
      return getSpanAndOffset(col);
    }

    if (layout === 'vertical') {
      return [24, 0];
    } else {
      return getSpanAndOffset(col);
    }
  };

  const [labelSpan, labelOffset] = itemLabelCol ? getCol(itemLabelCol, true) : getCol(labelCol);
  const [wrapperSpan, wrapperOffset] = itemWrapperCol
    ? getCol(itemWrapperCol, true)
    : getCol(wrapperCol);

  useEffect(() => {
    if (!name) {
      return;
    }

    rules && form.setFiledRules(name, rules);

    return form.subscribe((n) => {
      if (name === '*' || n === name || n === '*') {
        setValue(form.getFieldValue(name));
        setError(form.getFieldError(name));
      }
    });
  }, [form, name, rules]);

  useEffect(() => {
    if (error) {
      setHasErrLabel(true);
    }
  }, [error]);

  return (
    <Row className={cls} style={style}>
      <Col span={labelSpan} offset={labelOffset} className={`${prefixCls}__label`}>
        <label
          htmlFor={name}
          title={typeof label === 'string' ? label : undefined}
          className={labelCls}>
          {label}
        </label>
      </Col>
      <Col span={wrapperSpan} offset={wrapperOffset} className={`${prefixCls}__controls`}>
        <div className={`${prefixCls}__input`}>
          <div className={`${prefixCls}__input-content`}>{child}</div>
        </div>
        {notice && <div className={`${prefixCls}__notice`}>{notice}</div>}
        {helper && <div className={`${prefixCls}__helper`}>{helper}</div>}
        <Transition in={!!error} animation="slide-down" onExited={() => setHasErrLabel(false)}>
          <div className={`${prefixCls}__error`}>{error}</div>
        </Transition>
      </Col>
    </Row>
  );
};

FormItem.displayName = 'FormItem';

export default FormItem;
