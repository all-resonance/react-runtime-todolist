import React from 'react'
const { createElement } = React

export default function List({ children, ...props }) {
  const { id, title, onDel } = props
  return createElement(
    'li',
    {className: 'todo-item',...props},
    createElement(
      'div',
      {
        className: 'todo-item-action',
      },
      title,
      createElement(
        'button',
        {
          onClick() {
            onDel(id)
          },
        },
        '删除'
      )
    )
  )
}
