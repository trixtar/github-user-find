import React, {Component} from 'react';
import ListedUser from './listed-user';
import '../../App.css';

export default class SearchResults extends Component {
	render() {
		const {users} = this.props;
		if (!users.length) return <div>No results yet!</div>
		return(
			<div className='container results-list'>
				{users.map(user => <ListedUser key={user.login} username={user.login} />)}
			</div>
		)
	}
}