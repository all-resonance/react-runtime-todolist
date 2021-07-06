import React from 'react'
import Item from './Item'
import './index.css'
const { createElement } = React

export default function List(props) {
  const { list, setList } = props

  return createElement(
    'ul',
    {
      className: 'todo-list',
      ...props,
    },
    ...list.map((item) => {
      return createElement(Item, {
        id: item.id,
        title: item.title,
        onDel(id) {
          setList(list.filter((item) => item.id !== id))
        },
      })
    })
  )
}
