import React from 'react';
import '../../App.css';

function SearchBox(props) {
	const {onChange} = props;
	return (
		<div className='row search-box'>
			<div className='col-2'>
				<img
					src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
					alt='Github logo'
					width={32}
					height={32}
				/>
			</div>
			<input className='col-10' type='search' name='search' placeholder='Search' onChange={onChange} />
		</div>
	)
}

export default SearchBox