#!/usr/bin/env coffee

import axios from '@rmw/axios'
import Md from 'markdown-it'

md = Md()

export default main = (title, txt)=>
  axios.post(
    "https://pushplus.hxtrip.com/send"
    {
      token:process.env.PUSHPLUS_TOKEN
      title
      topic: 'izhenxiang-desk'
      content:md.render txt
      template:'html'
    }
  )

