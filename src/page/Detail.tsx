import React from 'react'
import { Button } from 'antd-mobile'

let logpage = (history:any) => {
  history.push('/')
}

let back = (history:any) => {
  history.goBack()
}

export default ({ history }:any)=> {
  return (
    <div>
      <Button onClick={()=>logpage(history)}>跳转到主页</Button>
      <Button onClick={()=>back(history)}>返回</Button>
    </div>
  )
}

