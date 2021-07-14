import React from 'react'

export default function Item(props) {
  const { title, img } = props

  return React.createElement(
    'div',
    {
      className: 'carousel-item',
    },
    React.createElement(
      'div',
      {
        className: 'carousel-item-img-wrap',
      },
      React.createElement('img', {
        src: img,
      })
    ),
    React.createElement(
      'div',
      {
        className: 'carousel-item-title',
      },
      title
    )
  )
}
