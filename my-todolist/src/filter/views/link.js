import React from 'react'
import {setFilter} from '../actions'
import {connect} from 'react-redux'


const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected">{children}</b>
    }else {
        return (
            <span className="filter not-selected" 
              style={{cursor: "pointer", textDecoration: 'underLine'}}
              onClick={onClick}>
                  {children}
            </span>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)