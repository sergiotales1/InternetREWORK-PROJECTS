import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71CX11nGhWL._SY466_.jpg"
    alt="Oath and Honor: A Memoir and a Warning"
  />
)

const Title = () => <h2>Oath and Honor: A Memoir and a Warning</h2>
const Author = () => {
  return <h4>Liz Cheney</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
