import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Pagination.css'

function Pagination(props) {
  const handleClickPage = () => {
    props.paginate(props.currentPage)
  }

  return (
    <div className="page" onClick={handleClickPage}>
      {props.page}
    </div>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.func,
  onClick: PropTypes.func,
  key: PropTypes.number,
}

export default Pagination
