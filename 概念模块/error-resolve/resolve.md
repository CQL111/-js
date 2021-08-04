## 常见错误处理

1. For more information see about_execution_Policies at ....
```
    为防止恶意脚本的执行，PowerShell 中设计了一个叫做执行策略(Execution Policy)的东西(我更倾向于把它叫做脚本执行策略)。我们可以在不同的应用场景中设置不同的策略来防止恶意脚本的执行。本文主要是解释这些执行策略，因为笔者在学习的时候发现它们并不是那么清晰易懂。
    PowerShell 提供了 Restricted、AllSigned、RemoteSigned、Unrestricted、Bypass、Undefined 六种类型的执行策略
```
> 解决办法：在powershell执行
>> 1. Set-ExecutionPolicy -Scope CurrentUser  在展示中的 excutionPolicy中写 RemoteSinged or Bypass
>> 2. Set-ExecutionPolicy RemoteSigned -Scope CurrentUser