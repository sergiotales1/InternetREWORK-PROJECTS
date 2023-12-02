import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'Liz Cheney',
  title: 'Oath and Honor: A Memoir and a Warning',
  img: '../images/book-1.jpg',
}

const secondBook = {
  author: 'Rebecca Yarros',
  title: 'Fourth Wing (The Empyrean, 1)',
  img: 'https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
