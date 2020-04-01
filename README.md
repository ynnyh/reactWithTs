### 注意点
1. 在containers文件夹下，Dispatch需从redux中引用
```
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
```
2. 在reducers文件夹下，需声明函数为Reducer
```
import { Reducer } from 'redux';
export const enthusiasm: Reducer => {}
```
以上基本为在使用create-react-app时可能会出现的问题，照此格式修改即可运行