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
  const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');

  const {title, content, location, image, price, from, to, bed} = values;

  const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

  const handleImageChange = (e) => {
    // console.log(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({...values, image: e.target.files[0]})
  };

  const handleSubmit = (e) => {};

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
						<br />
						{hotelForm()}
					</div>
					<div className='col-md-2'>
            <img src={preview} alt='preview_image' className='img img-fluid m-2'/>
						<pre>{JSON.stringify(values, null, 4)}</pre>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default NewHotel;
