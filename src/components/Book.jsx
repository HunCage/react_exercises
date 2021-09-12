import React from "react";

const Book = ({ img, alt, title, author }) => {
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("Hi on wire");
	};
	const complexHandler = (author) => {
		console.log(author);
	};
	return (
		<article className="book" onMouseOver={()=> {

		}}>
			<img src={img} alt={alt} />
			<h1 onClick={()=> console.log(title)}>{title}</h1>
			<h5>{author.toUpperCase()}</h5>
			<button type="button" onClick={clickHandler}>Read</button>
			<button type="button" onClick={() => complexHandler(author)}>Complex</button>
		</article>
	);
};

export default Book;
