import React, {Component} from 'react';
import ListedUser from './listed-user';

export default class SearchResults extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className='container p-4'>
                {!users.length
                    ? <h5 className='text-center'>No results yet!</h5>
                    : users.map(user => <ListedUser key={user.login} username={user.login} />)
                }
            </div>
        )
    }
}