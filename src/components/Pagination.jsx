import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Pagination.css'

function Pagination(props) {
  const handleClickPage = () => {
    props.paginate(props.page)
  }

  return (
    <div className="page" onClick={handleClickPage}>
      {props.page + 1}
    </div>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.func,
  onClick: PropTypes.func,
  page: PropTypes.number,
}

export default Pagination
