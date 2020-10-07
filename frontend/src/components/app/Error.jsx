import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from 'store/bookings/actions';
import { toast } from 'react-toastify';

const Error = ({ errors, clearErrors }) => {
  if (errors !== null) {
    setTimeout(() => {
      clearErrors();
    }, 10000);
  }

  const onRender = () => {
    errors !== null && errors.map((error) => toast.error(error.detail));
  };

  return <>{onRender()}</>;
};
const mapStateToProps = (state) => ({
  errors: state.bookingsApp.errors,
});

const mapDispatchToProps = {
  clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
