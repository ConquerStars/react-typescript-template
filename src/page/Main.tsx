import React from 'react'
import { Button } from 'antd-mobile'

let logpage = (history:any) => {
  history.push('/detail')
}

let back = (history:any) => {
  history.goBack()
}

export default ({ history }:any)=> {
  return (
    <div>
      <Button onClick={()=>logpage(history)}>跳转到详情</Button>
      <Button onClick={()=>back(history)}>返回</Button>
    </div>
  )
}

