import React from "react";
import ReactDOM from "react-dom";
import "./static/css/main.css";
import { books } from "./data/data";
import Book from "./components/Book";

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				{
					/* {books.map((book, index) => { */
				}
				{
					/* return <Book key={index} {...book} ></Book>; /* dynamic key */
				}
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

ReactDOM.render(<BookList />, document.getElementById("root"));
