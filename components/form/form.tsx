import React from 'react';
import classNames from 'classnames';
import FormStoreContext from './form-store-context';
import FormStore from './form-store';
import { BaseProps } from '../_utils/props';

export interface FormProps extends BaseProps {
  store?: FormStore;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
}

const Form = (props: FormProps): JSX.Element => {
  const { prefixCls = 'ty-form', store, onSubmit, className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <FormStoreContext.Provider value={store}>
      <form className={cls} style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </FormStoreContext.Provider>
  );
};

Form.displayName = 'Form';

export default Form;
