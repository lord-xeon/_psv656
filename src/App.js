import React, { useEffect, useRef } from "react";
//When importing Viewer directly from the node module we get the error:
//Uncaught TypeError: THREE.Quaternion is not a constructor
// import { Viewer } from 'photo-sphere-viewer';

// If instead we import from the source itself, we get THREE defined
// However we now get SVG problems from webpack:
// 		Uncaught TypeError: Cannot read properties of null (reading 'classList')

// Inside MenuButton.js 
// 	import menuIcon from '../icons/menu.svg';
// 	Using the webpack config from create-react-app by default it's turning that SVG into a file location string:
//	/static/media/menu.58c50e81f2a944425fe310515743dc84.svg 		

import { Viewer } from "photo-sphere-viewer/src/Viewer";

import './App.css';

export default function App() {
	let selectedPhoto = {
		name:"Pingo Lake",
		file_name:"Pingo_Lake.jpg",
	};
	let ref = use360(selectedPhoto, [selectedPhoto]);

	return (
		<section className="three-60-list">
			<figure ref={ref} style={{ width:"100vw", height:"400px" }} />
		</section>
	);
}
function use360(photo, dependencies){
	let ref = useRef();

	useEffect(() => {
		if(!photo){
			return;
		}
		const viewer = new Viewer({
			navbar: [],
			container: ref.current,
			panorama: `/360/${photo.file_name}`,
		});
		console.log("Viewer is:", viewer);
		return () => {};
	}, [photo, dependencies]);

	return ref;
}