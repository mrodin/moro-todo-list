import React from 'react'
import FilterButton from './FilterButton'
import { setVisibilityFilter } from '../actions/visibilityFilter'
import { connect } from 'react-redux'

function FilterBar(props) {
  const {
    visibilityFilter,
    showAll,
    showActive,
    showCompleted
  } = props

  return (
    <div className='filter-bar flex'>
      <FilterButton
        active={visibilityFilter === 'SHOW_ALL' ? true : false}
        clickHandler={showAll}
      >
        All
      </FilterButton>

      <FilterButton
        active={visibilityFilter === 'SHOW_ACTIVE' ? true : false}
        clickHandler={showActive}
      >
        Active
      </FilterButton>

      <FilterButton
        active={visibilityFilter === 'SHOW_COMPLETED' ? true : false}
        clickHandler={showCompleted}
      >
        Completed
      </FilterButton>
    </div>
  )
}

function mapStateToProps({ visibilityFilter }) {
  return {
    visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAll: () => dispatch(setVisibilityFilter('SHOW_ALL')),
    showActive: () => dispatch(setVisibilityFilter('SHOW_ACTIVE')),
    showCompleted: () => dispatch(setVisibilityFilter('SHOW_COMPLETED'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)