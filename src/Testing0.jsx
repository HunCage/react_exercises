import React from "react";
import ReactDOM from "react-dom";

// function Greeting() {
// 	return (
// 		<div>
// 			<h1>Hi by Wire</h1>
// 		</div>
// 	);
// }

// const Greeting = () => {
// 	return React.createElement('h1', {}, "Helloka Petoka!");
// };

// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h1", {}, "Helloka Petoka!")
// 	);
// };

// function Greeting() {
// 	return (
// 		<section>
// 			<article>
// 				<h1>Hi by Wire</h1>
// 				<ul>
// 					<li>
// 						<a href="#">Helloka Petoka</a>
// 					</li>
// 				</ul>
// 				<img src="" alt="" />
// 				<input type="text" />
// 			</article>
// 			<div></div>
// 		</section>
// 	);
// }

function Greeting() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h2>madcage</h2>;
const Message = () => {
	return (
		<p>this is a message</p>
	)
}


ReactDOM.render(
	<React.StrictMode>
		<Greeting />
	</React.StrictMode>,
	document.getElementById("root")
);
