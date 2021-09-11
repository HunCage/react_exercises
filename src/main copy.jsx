import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<Image></Image>
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return <img src="src/assets/img/cover.png" alt="Book Cover" />;
};

const Title = () => {
	return <h1>Read more Books</h1>;
};

const Author = () => {
	return <h5 style={{color: "#617d98", fontSize: "0.75rem", marginTop: '0.25rem'}}>Jim Stream</h5>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
