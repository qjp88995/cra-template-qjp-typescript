import { Input, InputRef, Space } from 'antd';
import classNames from 'classnames';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import styles from './CaptchaInput.module.less';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  length?: number;
  inputClassName?: number;
  disabled?: boolean;
  id?: string;
}

/**
 * @description: 验证码输入器
 */
const CaptchaInput: FC<Props> = (props) => {
  const { value = '', onChange, length = 6, inputClassName, disabled = false, id } = props;
  const [values, setValues] = useState(value ? value.split('') : []);
  const [curInd, setCurInd] = useState(0);
  const inputRefs = useRef<{ [key: number]: InputRef | null }>({});

  useEffect(() => {
    const arr = value ? value.split('') : [];
    setValues(arr.slice(0, length));
  }, [value, length]);

  useEffect(() => {
    const i = values.length >= length ? -1 : values.length;
    setCurInd(i);
    if (i === -1) {
      inputRefs.current[length - 1]?.blur();
    } else {
      inputRefs.current[i]?.focus();
    }
  }, [length, values]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      values.pop();
    }
    if (/[0-9]/.test(e.key)) {
      values.push(e.key);
    }
    setValues([...values]);
    const newValue = values.join('');
    if (newValue !== value && onChange) onChange(values.join(''));
  };

  const handleFocus = () => {
    if (curInd === -1) return;
    inputRefs.current[curInd]?.focus();
  }

  return (
    <Space onClick={handleFocus} id={id}>
      {new Array(length).fill(null).map((_, i) => (
        <Input
          ref={(ref) => inputRefs.current[i] = ref}
          className={classNames(styles.input, inputClassName)}
          style={{ pointerEvents: curInd === i ? 'auto' : 'none' }}
          key={i}
          value={values[i] || ''}
          autoFocus={curInd === i}
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />
      ))}
    </Space>
  );
};

export default CaptchaInput;
