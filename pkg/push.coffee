#!/usr/bin/env coffee

import axios from '@rmw/axios'
import Md from 'markdown-it'

md = Md()

export default main = (title, txt)=>
  Promise.all [
    axios.post(
      "https://open.feishu.cn/open-apis/bot/v2/hook/"+process.env.FEISHU_BOT
      {
        msg_type:"text"
        content:
          text:title+"\n"+txt
      }
    )
    ###
    axios.post(
      "https://pushplus.hxtrip.com/send"
      {
        token:process.env.PUSHPLUS_TOKEN
        title
        topic: 'izhenxiang-desk'
        content:title + "\n" + md.render txt
        template:'html'
      }
    )
    ###
  ]

