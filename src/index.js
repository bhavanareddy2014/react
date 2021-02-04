import React from 'react'
import ReactDom from 'react-dom'
// function Greeting(){
//   return  (
//     <div>
//     <Person/>
//   <p> This is awesome.</p>
//   <ul>
//   <li>
//    Hello</li>
//   </ul>
//    </div>);
  
// }
//  const Person = () => <h1>happy </h1>
//css
import './index.css'
function BookList(){
    return <section className="booklist">
   <h1>This is a  BookList</h1>
   <Title></Title>
   <Title></Title>
   <Title></Title>
   <Title></Title>
   <Title></Title>
   <Title></Title>
   
  </section>
}

const Title = () =>{
  return <article className="book">
  <h3>Think and Grow Rich</h3>
  <Image></Image>
  
  <Author></Author>
   </article>
}
const Image = () =>{
  return <img src="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SY344_BO1,204,203,200_.jpg"></img>
}
const Author = () =>{
  return <h5>Napolean Hill</h5>
}
ReactDom.render(<BookList/>,document.getElementById('root'));