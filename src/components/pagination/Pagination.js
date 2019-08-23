import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pageUp, pageDown, totalPages, page }) {
  const initialPage = totalPages === 0 ? page - 1 : page;

  return (
    <>
      <button disabled={page === 1} onClick={pageDown}>←</button>
      <span>page {initialPage} of {totalPages}</span>
      <button disabled={page === totalPages} onClick={pageUp}>→</button>
    </>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageUp: PropTypes.func.isRequired,
  pageDown: PropTypes.func.isRequired
};

export default Pagination;
