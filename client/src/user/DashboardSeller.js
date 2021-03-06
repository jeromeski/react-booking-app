import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import { Fragment, useState } from 'react';
import { createConnectAccount } from '../actions/stripe';
import { toast } from 'react-toastify';

const DashboardSeller = () => {
  const [loading, setLoading] = useState(false);
  const {auth} = useSelector((state) => ({...state}))

  const handleClick = async () => {
		setLoading(true);
		try {
			let res = await createConnectAccount(auth.token);
			console.log(res);
			// open a new window with res
			window.location.href = res.data;
		} catch (err) {
			console.log(err);
			toast.error('Stripe connect failed, try again.');
			setLoading(false);
		}
	};

  const connected = () => (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-10'>
					<h2>Your Hotels</h2>
				</div>
				<div className='col-md-2'>
					<Link to='/hotels/new' className='btn btn-primary'>
						+ Add New
					</Link>
				</div>
			</div>
		</div>
	);

  const notConnected = () => (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-6'>
					<div className='p-5 pointer text-center'>
						<HomeOutlined className='h1' />
						<h4>Setup payouts to post hotel rooms</h4>
						<p className='lead'>
							MERN partners with stripe to transfer your earnings to your bank account.
						</p>
						<button disabled={loading} className='btn btn-primary mb-3' onClick={handleClick}>
							{loading ? 'Processing...' : 'Setup Payouts'}
						</button>
						<p className='text-muted'>
							<small>Youll be redirected to Stripe to complete the onboarding process</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      {
        auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled ? connected() : notConnected()
      }
     {/*<pre>{JSON.stringify(auth, null, 4)}</pre>*/}
    </Fragment>
  );
};

export default DashboardSeller;
