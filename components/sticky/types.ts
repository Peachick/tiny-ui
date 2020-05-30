import React from 'react';
import { BaseProps } from '../_utils/props';
import { Target } from '../_utils/dom';

export interface StickyProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  offsetTop?: number;
  offsetBottom?: number;
  container?: () => Target;
  onChange?: (stuck: boolean) => void;
}
