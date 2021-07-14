import React from 'react'
import List from './List'

const { createElement, useState } = React

export default function Todo() {
  const [list, setList] = useState([
    {
      id: 0,
      title: '看书',
    },
    {
      id: 1,
      title: '看电影',
    },
    {
      id: 2,
      title: '逛街',
    },
    {
      id: 3,
      title: '写代码',
    },
  ])
  const [value, setVal] = useState('')

  return createElement(
    'div',
    null,
    createElement(List, {
      list,
      setList,
    }),
    createElement('input', {
      value,
      onInput(e) {
        const val = e.target.value
        setVal(val)
      },
    }),
    createElement(
      'button',
      {
        className: 'search-action',
        onClick() {
          if (!value) {
            alert('请输入内容')
            return
          }
          setList(list.filter((item) => item.title.indexOf(value) !== -1))
        },
      },
      '搜索'
    ),
    createElement(
      'button',
      {
        className: 'add-action',
        onClick() {
          if (!value) {
            alert('请输入内容')
            return
          }
          setList(list.concat({ id: list.length, title: value }))
          setVal('')
        },
      },
      '新增事项'
    )
  )
}
