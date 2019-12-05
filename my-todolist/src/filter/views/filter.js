import React from 'react'
import Link from './link'
import {filterTypes} from '../../constants'

const Filter = () => {
    return (
        <p className="filters">
            <Link filter={filterTypes.ALL}>
                {filterTypes.ALL}
            </Link>
            <Link filter={filterTypes.COMPLETED}>
                {filterTypes.COMPLETED}
            </Link>
            <Link filter={filterTypes.UNCOMPLETED}>
                {filterTypes.UNCOMPLETED}
            </Link>
        </p>
    )
}

export default Filter