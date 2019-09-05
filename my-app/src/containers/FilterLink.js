import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'


const mapStateToProps = (state, ownProp) => {
    return {
        active: ownProp.filter === state.visibilityFilter
    }
} 

const mapDispatchToProps = (dispatch, ownProp) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProp.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink