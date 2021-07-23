## git 的使用

### git 安装

1. window 安装

[官方下载地址](https://gitforwindows.org/)
[国内下载地址](https://npm.taobao.org/mirrors/git-for-windows/)

2. mac 安装

[下载地址](http://sourceforge.net/projects/git-osx-installer/)

### git配置
```
    Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

    这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

    /etc/gitconfig 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。
    ~/.gitconfig 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。
    当前项目的 Git 目录中的配置文件（也就是工作目录中的 .git/config 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 .git/config 里的配置会覆盖 /etc/gitconfig 中的同名变量。
    在 Windows 系统上，Git 会找寻用户主目录下的 .gitconfig 文件。主目录即 $HOME 变量指定的目录，一般都是 C:\Documents and Settings\$USER。

    此外，Git 还会尝试找寻 /etc/gitconfig 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。
```
>git config --global user.name "xx" 设置名称

>git config --global user.email test@xx.com 设置邮箱

> git config --list 查看所有config设置

> ssh-keygen -t rsa -C "邮箱地址" 获取ssh，并在个人文件夹中可以查看公钥；

### git 基本使用

```
    git init 初始化本地仓库
    git clone 获取线上仓库
    git add 将代码添加到暂存区
    git commit - 将暂存区内容添加到仓库中。
    git status	查看仓库当前的状态，显示有变更的文件。
    git diff	比较文件的不同，即暂存区和工作区的差异。

    git reset	回退版本。
    git rm	删除工作区文件。
    git mv	移动或重命名工作区文件。
    git log	查看历史提交记录
    git blame <file>	以列表形式查看指定文件的历史修改记录
    git remote show [remote] 显示某个远程仓库的信息
    git remote add origin [remote] 把本地分支提交到远程库
    
    git pull <远程主机名> <远程分支名>:<本地分支名>
    git push <远程主机名> <本地分支名>:<远程分支名>

    git branch (branchname) 创建分支命令：
    git checkout (branchname) 切换分支命令:
    git branch  展示所有分支
    git checkout -b (branchname)创建新分支并立即切换到该分支
    git branch -d (branchname) 删除分支命令
    git merge newtest  把newtest合并到当前分支；

```

```shell
    本地分支灵活管理，通过rebase；
    git checkout master
    git pull
    git checkout local
    git rebase -i HEAD~2  //合并提交 --- 2表示合并两个
    git rebase master---->解决冲突--->git rebase --continue
    git checkout master
    git merge local
    git push

```
### git 工具

[小乌龟下载地址](https://tortoisegit.org/download/)


