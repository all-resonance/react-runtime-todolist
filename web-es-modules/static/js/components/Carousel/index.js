import React from 'react'
import Item from './Item.js'
const { useEffect, useState } = React

let timer = null
export default function Carousel(props) {
  const { carouselList, timeout = 2000, width = 600, height = 400 } = props
  const [left, setLeft] = useState(0)

  useEffect(() => {
    timer = setInterval(() => {
      // 到达最后一个时左边的距离
      const lastMargin = -(carouselList.length - 1) * 600
      // console.log(lastMargin, left)
      if (Carousel.left === lastMargin) {
        setLeft(0)
        return
      }
      setLeft(Carousel.left - 600)
    }, timeout)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    Carousel.left = left
  }, [left])

  return React.createElement(
    'div',
    {
      className: 'carousel',
      style: {
        width,
        height,
      },
    },
    React.createElement(
      'div',
      {
        className: 'carousel-warp',
        style: {
          marginLeft: left,
        },
      },
      carouselList.map((item) => {
        return React.createElement(Item, {
          title: item.title,
          img: item.img,
        })
      })
    )
  )
}
