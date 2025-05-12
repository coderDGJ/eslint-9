#!/bin/bash

# 这是注释  echo 输出
echo "hello world" 

# 1. 变量定义和使用  
#变量名称 = "变量值"
name="小明"
age=18
# 使用的时候用$符号
echo "我的名字:$name"
echo "我的年龄:$age"

# 2. 数组
# 用（）包围 用空格隔开  ${firte} 默认读取第一个 [1] 读取第二个
firte=("苹果" "香蕉" "橘子")
# 使用的时候用$符号
echo "1:${firte[0]}"
echo "2:${firte[1]}"
echo "3:${firte[2]}"


# 3. 条件判断  等于:eq 大于: gt 小于：lt  大于等于：ge 小于等于：le 不等于: ne  
# if 开头 elif  fi 结尾
if [ $age -eq '18' ]; then 
    echo "年龄等于18"
fi

if [ $age -gt 17 ]; then
echo "年龄大于17"
fi

if [ $age -lt 19 ]; then
echo "年龄小于19"
fi

if [ $age -ge 18 ];then
echo "年龄大于等于18"
fi

if [ $age -le 18 ];then
echo "年龄小于等于18"
fi

if [ $age -ne 18 ];then
echo "年龄不等于18"
fi

if [ $age -gt 18 ];then
echo "年龄大于18"
elif [ $age -lt 16 ]; then
echo '年龄小于16'
fi


# 4. 循环
for i in ${firte[*]};
do
echo "当前水果是:$i"
done
# 5. 函数 $0 代表文件路径 相对路径 $() 代表执行命令  ${} 解析内部变量
function say(){
    local name=$1
    echo "hello"$name
    echo "hello1"
    echo "hello2"
}

fir=($(say "小明"))
 echo "返回值是:${fir[2]}"

# 6. 读取用户输入
read -p "请输入你的名字:" name

echo "你的名字是:$name"



