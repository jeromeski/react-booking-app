import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { Fragment } from 'react';

const DashboardSeller = () => {

  const {auth} = useSelector((state) => ({...state}))

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
    <h1>Connect with stripe</h1>
  )
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
