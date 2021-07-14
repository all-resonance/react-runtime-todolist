import React from 'react'
import ReactDom from 'react-dom'
import Carousel from './components/Carousel/index.js'

const carouselList = [
  {
    img: './static/img/01.jpeg',
    title: '图片01',
  },
  {
    img: './static/img/02.jpeg',
    title: '图片02',
  },
  {
    img: './static/img/03.jpeg',
    title: '图片03',
  },
  {
    img: './static/img/04.jpeg',
    title: '图片04',
  },
  {
    img: './static/img/05.jpeg',
    title: '图片05',
  },
]

ReactDom.render(
  React.createElement(Carousel, {
    carouselList,
  }),
  document.querySelector('#app')
)
