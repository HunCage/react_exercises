import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";

const style = { color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" };

const firstBook = {
	author: "Jim Stream",
	title: "Read more Books",
	img: "src/assets/img/cover.png",
	alt: "Book Cover",
};

const secondBook = {
	author: "John Doe",
	title: "Everything is fine",
	img: "src/assets/img/cover2.jpg",
	alt: "Book Cover Two",
};

function BookList() {
	return (
		<section className="booklist">
			<Book img={firstBook.img} title={firstBook.title} author={firstBook.author} alt={firstBook.alt} />
			<Book img={secondBook.img} title={secondBook.title} author={secondBook.author} alt={secondBook.alt} />
		</section>
	);
}

const Book = (props) => {
	// console.log(props);
	return (
		<article className="book">
			<img src={props.img} alt={props.alt} />
			<h1>{props.title}</h1>
			<h5>{props.author.toUpperCase()}</h5>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));
