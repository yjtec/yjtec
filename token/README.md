##基本用法

```
import Token from 'yjtec-token';
var token = new Token('pay_service_token');
token.set('123123');
token.remove();
token.setHeader(token.get());
```

### constructor(key)

> 构造方法，设置token存储的键

### set(value)

>设置token值

### get()

> 获取token的值


### remove()

> 移除token

### setHeader(token)

> 设置请求头



##统一定义文件

src/utils/token.js

```
import Token from 'yjtec-token';
var token = new Token('pay_service_token');
export default token;

```

### 其他地方引用

```
import token from '@/utils/token';
console.log(token);
console.log(token.get());
```