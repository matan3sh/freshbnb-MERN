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

  return (
    <div className='browseList'>
      <div className='myRentals__nav'>
        <ManageNavigation />
      </div>
      {myRentals === null ? (
        <Spinner />
      ) : (
        myRentals?.map((rental, index) => (
          <MyRentalItem rental={rental} key={index} />
        ))
      )}
      {!myRentals?.length && (
        <h1 className='no-rentals'>There Is No Rentals</h1>
      )}
    </div>
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
