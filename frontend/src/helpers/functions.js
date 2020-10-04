export const capitalize = (value) => {
  if (!value || typeof value !== 'string') return '';
  return value
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice[1])
    .join(' ');
};

export const extractApiErrors = (resError) => {
  let errors = [{ title: 'Error!', detail: 'Ooops, something went wrong!' }];
  if (resError && resError.data && resError.data.errors)
    errors = resError.data.errors;
  return errors;
};

export const makeReservationID = () => {
  var txt = '';
  var possible = '0123456789';
  for (var i = 0; i < 6; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
};
