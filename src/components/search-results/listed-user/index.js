import React, {Component} from 'react';
import '../../../App.css';

export default class ListedUser extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    };

    state = {
        user: {},
        hover: false,
    }

    componentDidMount() {
        // set up request header
        const token = '3d87f6ba7b8a97d28bedd66e8dcf86e3c45b363f';
        const options = {
            headers: {
               'Authorization': `Basic ${token}`,
            },
        };

        fetch(`https://api.github.com/users/${this.props.username}`, options)
            .then(
                data => data.json(),
                err => console.error(`Error fetching: ${err}`)
            )
            .then(
                res => this.setState({user: res}),
                err => console.error(`Error parsing: ${err}`)
            );
    }

    handleClick = (link) => {
        return () => {
            window.location.href = link;
        };
    }

    handleHover = (bool) => {
        return (event) => {
            this.setState({hover: bool});
        }
    }

    render() {
        if (!Object.keys(this.state.user).length) return null;

        const {username} = this.props;
        const {avatar_url, name, bio, html_url} = this.state.user;
        const hover = this.state.hover ? 'border-primary' : 'border-secondary';
        return (
            <div
                className={`row d-flex align-items-center mb-2 p-2 bg-white border rounded cursor-pointer ${hover}`}
                onMouseEnter={this.handleHover(true)}
                onMouseLeave={this.handleHover(false)}
                onClick={this.handleClick(html_url)}
            >
                <div className='col-3 col-sm-2 col-lg-1 px-0'>
                    <img className='img-thumbnail' src={avatar_url} alt={`${username}'s avatar`} />
                </div>
                <div className='col-9 col-sm-10 col-lg-11 d-flex flex-column'>
                    <h6 className='mb-1 text-primary'>{username}</h6>
                    <h6 className='mb-1'>{name}</h6>
                    <p className='mb-0'><small>{bio}</small></p>
                </div>
            </div>
        );
    }
}