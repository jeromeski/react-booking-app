import React, { Fragment, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Card, Avatar} from 'antd';
import moment from 'moment';
import Ribbon from 'antd/lib/badge/Ribbon';
import { currencyFormatter, getAccountBalance, payoutSetting } from '../actions/stripe';
import { SettingOutlined } from '@ant-design/icons';
import {toast} from 'react-toastify';

const {Meta} = Card;

const ConnectNav = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false)
	const { auth } = useSelector((state) => ({ ...state }));
	const { user, token } = auth;

  const handlePayoutSetting = async () => {
		setLoading(true);
		try {
			const res = await payoutSetting(token);;
			console.log('RES FOR PAYOUT SETTING LINK', res);
			window.location.href = res.data.url
		} catch (err) {
			console.log(err);
			setLoading(false);
			toast('Unable to access settings. Try again');
		}
	};

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      // console.log(res);
      setBalance(res.data)
    })
  },[])

	return (
		<div className='d-flex justify-content-around'>
			<Card>
				<Meta
					name={<Avatar>{user.name[0]}</Avatar>}
					title={user.name}
					description={`Joined ${moment(user.createdAt).fromNow()}`}
				/>
			</Card>
			{auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled && (
				<Fragment>
					<Ribbon text='Available' color='grey'>
						<Card className='bg-light pt-1'>
							{balance &&
								balance.pending &&
								balance.pending.map((bp, i) => (
									<span className='lead' key={i}>
										{currencyFormatter(bp)} {bp.pending}
									</span>
								))}
						</Card>
					</Ribbon>
					<Ribbon text='Payout' color='silver'>
						<Card onClick={handlePayoutSetting} className='bg-light pointer'>
							<SettingOutlined className='h5 pt-2' />
						</Card>
					</Ribbon>
				</Fragment>
			)}
		</div>
	);
}

export default ConnectNav