import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Liz Cheney',
    title: 'Oath and Honor: A Memoir and a Warning',
    img: '../images/book-1.jpg',
    id: 1,
  },

  {
    author: 'Rebecca Yarros',
    title: 'Fourth Wing (The Empyrean, 1)',
    img: 'https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((el) => {
        console.log(el, { ...el })
        return <Book {...el} key={el.id} />
      })}
    </section>
  )
}

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
