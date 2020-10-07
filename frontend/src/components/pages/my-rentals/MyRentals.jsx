import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMyRentals, clearMyRentals } from 'store/manage/actions';

import ManageNavigation from '../manage/ManageNavigation';
import MyRentalItem from 'components/pages/my-rentals/MyRentalItem';
import { Spinner } from 'components/shared';

const MyRentals = ({ loadMyRentals, clearMyRentals, myRentals }) => {
  useEffect(() => {
    loadMyRentals();
    return () => {
      clearMyRentals();
    };
  }, [loadMyRentals, clearMyRentals]);

  const onRender = () => {
    if (myRentals === null) return <Spinner />;
    else if (!myRentals?.length)
      return <h1 className='no-rentals'>There Is No Rentals</h1>;
  };

  return (
    <>
      <ManageNavigation />
      <h2 className='manage__title'>My Rentals</h2>
      <div className='browseList'>
        {myRentals?.map((rental, index) => (
          <MyRentalItem rental={rental} key={index} />
        ))}
        {onRender()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  myRentals: state.manageApp.myRentals,
});

const mapDispatchToProps = {
  loadMyRentals,
  clearMyRentals,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRentals);
