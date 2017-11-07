import React from 'react';
import { Link } from 'react-router';

import Search from './Search';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">PHOTOMATCH</Link>
				</h1>
				<Search/>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;