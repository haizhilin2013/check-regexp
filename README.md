# 功能强大的正则检测工具

## 示例

```
验证手机号码
phoneRegexp('13456789123') => true

验证邮箱
emailRegexp('ljw@163.com') => true

默认数字验证(4|6)位
codeRegexp('1322') => true
codeRegexp('132233') => true
第二的参数位为true
数字字母验证(4|6)位
codeRegexp('acs1', true) => true
codeRegexp('acs231', true) => true

验证邮政编码
dawkRegexp('517388') => true

验证身份证(仅支持18位)
idRegexp('441622200001011111') => true

验证银行卡(16|19)位
bankCardRegexp('441622200001011111') => true
```
