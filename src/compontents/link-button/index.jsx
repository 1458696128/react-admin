import React from "react";
import './index.less'
/* props：包含所有标签属性的对象
一个组件会接收到一个特别的属性：children，值为标签体，如果是空标签 就没有children */
export default function LinkButton(props){
    return <button className="link-btton" {...props}/>

}
