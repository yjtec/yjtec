## 修改
 src/app.js增加

 ### 头部增加 
```
import request from '@/utils/request';
import ApiSign from 'yjtec-sign';
```

### 底部增加

```
//接口验签
request.interceptors.request.use((url, options) => {
  var sign = new ApiSign('OCdQVv4UMqOkYheY','MeF3Rt3VLYWeJWOkDorygTY3NlEhLYjh');
  return (
    {
      options:{
        ...sign.sign(url,options)
      }
    }
  );
});
```