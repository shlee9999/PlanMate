import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: ${(props) => props.theme.body};
}
ol, ul, li {
	list-style: none;  
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: inherit;
  -webkit-user-select: auto;
  -ms-user-select: auto; /* IE 10 and IE 11 */
  user-select: auto; /* Standard syntax */
}
input {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  &::placeholder{
    color:${(props) => props.theme.text.gray2}
  }
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border.default};
  padding:0 8px;

}
textarea {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  outline: none;
  border: none;
  resize: none;
}
hr{
  margin: 2px;
  border: none;
  height: 1px;
  width: 98%;
}
*{
	box-sizing: border-box;
}
`
