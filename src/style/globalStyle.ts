import { createGlobalStyle } from "styled-components";
import variables, { desVariables, smVariables, tabVariables } from "./variable";
import { GV, declearStyleVariables } from "@/utils/style.util";

const GlobalStyle = createGlobalStyle`
	:root {
		${declearStyleVariables(variables)}
	}

	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	@font-face {
		font-family: "Circular";
		src: url("https://www.bu.edu/cdn/fonts/Circular/Circular-Book.eot");
		src: url("https://www.bu.edu/cdn/fonts/Circular/Circular-Book.eot?#iefix") format("embedded-opentype"),
			url("https://www.bu.edu/cdn/fonts/Circular/Circular-Book.woff") format("woff"),
			url("https://www.bu.edu/cdn/fonts/Circular/Circular-Book.ttf") format("truetype");
		font-style: normal;
		font-weight: 600;
	}

	html {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		scroll-behavior: smooth;

		@media (max-width: 1200px) {
			${declearStyleVariables(desVariables, "!important")}
		}
		
		@media (max-width: 992px) {
			${declearStyleVariables(tabVariables, "!important")}
		}
		
		@media (max-width: 768px) {
			${declearStyleVariables(smVariables, "!important")}
		}
	}
	body {
		box-sizing: border-box;
		margin: 0;
		background: ${GV("white")};
		font-family: ${GV("font")};
		line-height: 150%;
		font-size: ${GV("font-size")};
		color: ${GV("color")};
	}
	#app {
		overflow-x: hidden;
		overflow-y: auto;
		height: 100vh;
	}
	*, *::before, *::after {
		box-sizing: inherit;
	}
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		white-space: pre-wrap;
	}
	p {
		margin:0;
	}
	a {
		text-decoration:none; 
		color:inherit; 
		cursor:pointer;
	}
	button {
		background-color:transparent;
		color:inherit;
		border-width:0;
		padding:0;
		cursor:pointer;
	}
	input::-moz-focus-inner { 
		border:0;
		padding:0;
		margin:0;
	}
	input, textarea {
		outline: 0;
	}
	ul, ol, dd {
		margin:0;
		padding:0;
		list-style:none;
	}
	cite {
		font-style:normal;
	}
	fieldset{
		border-width:0;
		padding:0;
		margin:0;
	}
	figure{
		margin:0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
		margin: 0;
		padding: 0;
	}

	audio,
	canvas,
	progress,
	video {
		display: inline-block;
		vertical-align: baseline;
	}

	audio:not([controls]) {
		display: none;
		height: 0;
	}

	[hidden], template {
		display: none;
	}

	a {
		background-color: transparent;
	}

	a:active,
	a:hover {
		outline: 0;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bold;
	}

	dfn {
		font-style: italic;
	}

	mark {
		background: #ff0;
		color: #000;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sup {
		top: -0.5em;
	}

	sub {
		bottom: -0.25em;
	}

	img {
		border: 0;
		max-width: 100%;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	hr {
		box-sizing: content-box;
		height: 0;
	}

	pre {
		overflow: auto;
	}

	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		color: inherit;
		font: inherit;
		margin: 0;
	}

	button {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	html input[type="button"],
	input[type="reset"],
	input[type="submit"] {
		-webkit-appearance: button;
		-moz-appearance: button;
		appearance: button;
		cursor: pointer;
	}

	button[disabled],
	html input[disabled] {
		cursor: default;
	}

	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	input {
		line-height: normal;
	}

	input[type="checkbox"],
	input[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	input[type="search"] {
		-webkit-appearance: textfield;
		-moz-appearance: textfield;
		appearance: textfield;
		box-sizing: content-box;
	}

	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	fieldset {
		border: 1px solid #c0c0c0;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}

	legend {
		border: 0;
		padding: 0;
	}

	textarea {
		overflow: auto;
	}

	optgroup {
		font-weight: bold;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
	}
	.swiper {
		max-width: 100%;
		height: 100%;
	  }
	  .swiper-slide {
		text-align: center;
		font-size: 18px;
	  
		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
	  }
	  .swiper-button-prev, .swiper-button-next{
			color:#4CAF50;
	  }
	  .swiper-pagination-bullet-active {
		background:#4CAF50 !important;
	}
	.fc-theme-standard td {
		border-color: #4A4A4A;
		width: 64px;
		height: 64px;
	}
	.fc .fc-daygrid-day-top {
		justify-content: center;
	}
	.fc-theme-standard th {
		width: 64px;
		height: 40px;
	}

	.custom-modal .ant-modal-content {
    	backdrop-filter: blur(3px);
	}

	.ant-modal {
		color: inherit;
	}

	.cover-image .ant-upload-wrapper .ant-upload-list .ant-upload-list-item-container {
		width: 100%;
	}
	.ant-upload-wrapper .ant-upload-drag {
		border-color: #eee;
		&:hover {
			border-color: #fff;
		}
	}
	.custom-upload > .ant-upload-select {
		display: block;
	}
	.custom-drawer .ant-drawer-wrapper-body {
		backdrop-filter: blur(3px);
	}
	.custom-picker {
		border-color: ${GV('purple')} !important;
		backdrop-filter: blur(3px);
	}
	.custom-picker .ant-picker-input input, .custom-picker .ant-picker-input span {
		color: ${GV('white')} !important;
		padding: 0.125rem;
	}
	.ck.ck-editor__main>.ck-editor__editable {
		border-color: ${GV('purple')} !important;
		border-radius: 0;
	}
	.ck.ck-toolbar.ck-toolbar_grouping {
		border-color: ${GV('purple')};
	}

	/* .ck-reset_all :not(.ck-reset_all-excluded *), .ck.ck-reset_all {
		color: ${GV('white')} !important;
		&:hover {
		}
	} */
	.ant-radio-group .ant-radio-button-wrapper {
		background: var(--gray) !important;
		border-color: var(--purple) !important;
		color: var(--white);
	}
	.ant-radio-group .ant-radio-button-wrapper-checked {
		background: var(--purple) !important;
		border-color: var(--purple) !important;
	}
	.custom-drawer .ant-drawer-wrapper-body {
		backdrop-filter: none;
	}

	.ant-drawer .ant-drawer-mask {
		top: 88px;
	}
	.ant-drawer-top > .ant-drawer-content-wrapper {
		top: 85px;
		box-shadow: 0 30px 30px -16px rgba(12,22,44,.32);;
		height: 100vh !important;
	}
	.ant-drawer .ant-drawer-body {
		padding: 0 !important;
	}
	@media (max-width: 1260px) {
		.type-animation {
			font-size: 138px;
		}
	}

	@media (max-width: 1024px) {
		.type-animation {
			font-size: 112px;
			line-height: 96px;
		}
	}

	@media (max-width: 836px) {
		.type-animation {
			font-size: 96px;
			line-height: 80px;
		}
	}

	@media (max-width: 736px) {
		.type-animation {
			font-size: 62px;
			line-height: 58px;
		}
	}

`;

export default GlobalStyle;
