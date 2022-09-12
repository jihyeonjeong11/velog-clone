function checkLocalStorage() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}

class FallbackStorage {
  fallbackStorage: {
    [key: string] : string;
  } = {};
  // localstorage가 안될때, 위 checkLocalStorage가 에러날때, 인메모리 fallbackStorage에 저장한다.

  valid: boolean = checkLocalStorage();

  setItem(key: string, value: any){
    const string = JSON.stringify(value);
    if(this.valid) {
      localStorage.setItem(key, string);
      return
    }
    this.fallbackStorage[key] = string;
  }

  getItem(key: string) {
    let value = this.valid
      ? localStorage.getItem(key)
      : this.fallbackStorage[key];
    try {
      const parsed = JSON.parse(value || '');
      return parsed;
    } catch (e) {
      return null;
    }
  }

  removeItem(key: string) {
    if(this.valid) {
      localStorage.removeItem(key);
      return;
    }
    delete this.fallbackStorage[key];
  }
}

const storage = new FallbackStorage();

storage.setItem('theme', 'dark')

export default storage;