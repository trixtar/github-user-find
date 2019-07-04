import React from 'react';
import octicon from './assets/octicon.svg'
import '../../App.css';

function SearchBox(props) {
	const {onChange} = props;
	return (
		<div className='row py-3 px-4 bg-dark search-box'>
			<div className='col-2'>
				<img
					src={octicon}
					alt='Github logo'
					width={32}
					height={32}
				/>
			</div>
			<input
				className='col-10 form-control'
				type='search'
				name='search'
				placeholder='Search'
				onChange={onChange}
			/>
		</div>
	)
}

export default SearchBox