import { Fragment, useState } from 'react';

const NewHotel = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    location: '',
    image: '',
    price: '',
    from: '',
    to: '',
    bed: ''
  })

  const {title, content, location, image, price, from, to, bed} = values;

  const handleChange = () => {
    
  }

  const handleImageChange = () => {
    
  }

  const handleSubmit = () => {

  }

  const hotelForm = () => {
    return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label className='btn btn-outline-secondary m-2 text-left'>
						Image
						<input type='file' name='image' onChange={handleImageChange} accept='image/*' hidden />
					</label>
					<input
						className='form-control m-2'
						type='text'
						name='title'
						onChange={handleChange}
						placeholder='Title'
						value={title}
					/>
					<textarea
						className='form-control m-2'
						name='content'
						onChange={handleChange}
						placeholder='Content'
						value={content}
					/>
					<input
						className='form-control m-2'
						type='number'
						name='price'
						onChange={handleChange}
						placeholder='Price'
						value={price}
					/>
					<input
						className='form-control m-2'
						type='number'
						name='bed'
						onChange={handleChange}
						placeholder='Bed'
						value={bed}
					/>
				</div>
        <button className='btn btn-outline-primary m-2'>Save</button>
			</form>
		);
  }
	return (
		<Fragment>
			<div className='container-fluid bg-secondary p-5 text-center'>
				<h2>Add hotel</h2>
			</div>
			<div className='container-fluid'>
        <div className='row'>
          <div className='col-md-10'>
            <br/>
            {hotelForm()}
          </div>
        </div>
      </div>
		</Fragment>
	);
};

export default NewHotel;
