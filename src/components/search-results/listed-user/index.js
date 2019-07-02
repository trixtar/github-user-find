import React, {Component} from 'react';

export default class ListedUser extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	};

	/*
	state = {
		user: {},
	}

	componentDidMount() {
		const url = `https://api.github.com/users/:${this.props.username}`;
		fetch(url)
			.then(data => data.json())
			.then(res => {
				console.log('user res', res);
				this.setState({user: res}, () => console.log(this.state.user));
			})
			.catch(err => console.log(err));
	}
	*/

	handleClick(link) {
		return () => {
			window.location.href = link
		};
	}

	render() {
		const {username, avatar, userpage} = this.props;
		return (
			<div className='row mb-1 p-1 border border-primary rounded' onClick={this.handleClick(userpage)}>
				<div className='col-3'>
					<img className='img-thumbnail' src={avatar} alt={`${username}'s avatar`} />
				</div>
				<div className='col-9 d-flex align-items-center'>
					{username}
				</div>
			</div>
		);
	}
}