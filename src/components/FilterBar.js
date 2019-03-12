import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions/visibilityFilter'
import { getVisibilityFiler } from '../selectors/todos'

import FilterButton from './FilterButton'

function FilterBar(props) {
  const {
    visibilityFilter,
    showAll,
    showActive,
    showCompleted
  } = props

  return (
    <div className='filter-bar flex margin-bottom--small'>
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

function mapStateToProps(state) {
  return {
    visibilityFilter: getVisibilityFiler(state)
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