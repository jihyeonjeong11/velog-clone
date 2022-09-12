// import { useDispatch } from 'react-redux';
// import { useTheme } from '../../../lib/hooks/useTheme';
import storage from '../../../lib/storage';
// import darkMode from '../../../modules/darkMode';
import React, {useState} from 'react';

export function useToggleTheme() {
  const [theme, setTheme] = useState('dark'); // redux넣기전까지 임시
  const saveToStorage = (value: 'light' | 'dark') => {
    storage.setItem('theme', value); //csr에서 localstorage 사용

    document.cookie = `theme=${value}; path=/;`; // ssr에서 사용
  }
  const toggle = () => {
    if(false) return;
    if(storage.getItem('theme') === 'dark') {
      // dispatch(darkMode.actions.enableLightMode());
      saveToStorage('light')
      setTheme('light')
    } else {
      // dispatch(darkMode.actions.enableLightMode());
      saveToStorage('dark')
      setTheme('dark')
    }
  };

  return [theme, toggle] as const;
}