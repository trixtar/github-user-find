import React from 'react';
import octicon from './assets/octicon.svg'

function SearchBox(props) {
	const {onChange} = props;
	return (
		<div className='row py-3 px-2 px-lg-5 bg-dark'>
			<div className='col-2 col-sm-1 d-flex justify-content-center align-items-center'>
				<img
					className='img-fluid'
					src={octicon}
					alt='Github logo'
				/>
			</div>
			<div className="col-10 col-sm-11 px-2 px-sm-3 d-flex align-items-center">
				<input
					className='form-control'
					type='search'
					name='search'
					placeholder='Search'
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default SearchBox