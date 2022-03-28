import React from 'react'
import useDataContext from '../useDataContext'
import { Rating } from 'semantic-ui-react'
import {
  updateResultData,
  getResultDataWithRating,
} from '../../controller/controller'

function FilterByRating() {
  const {
    setFilterByRating,
    filterByCategories,
    searchText,
    productData,
    setResultData,
    filterByRating,
  } = useDataContext()
  const handleFilterByRating = (numberRating) => {
    setFilterByRating(numberRating)
    setResultData(() =>
      updateResultData(
        searchText,
        numberRating,
        filterByCategories,
        productData,
      ),
    )
    /*  setResultData(() => getResultDataWithRating(numberRating, productData))*/
  }
  return (
    <div className="filter-rating-container">
      <h3>Filter By Rating - {filterByRating}</h3>
      <Rating
        className="margin-top-bottom-3"
        icon="star"
        defaultRating={1}
        maxRating={5}
        size="tiny"
        disabled
        onClick={(e) => handleFilterByRating(1)}
      />
      <Rating
        className="margin-top-bottom-3"
        icon="star"
        defaultRating={2}
        maxRating={5}
        size="tiny"
        disabled
        onClick={(e) => handleFilterByRating(2)}
      />
      <Rating
        className="margin-top-bottom-3"
        icon="star"
        defaultRating={3}
        maxRating={5}
        size="tiny"
        disabled
        onClick={(e) => handleFilterByRating(3)}
      />
      <Rating
        className="margin-top-bottom-3"
        icon="star"
        defaultRating={4}
        maxRating={5}
        size="tiny"
        disabled
        onClick={(e) => handleFilterByRating(4)}
      />
      <Rating
        className="margin-top-bottom-3"
        icon="star"
        defaultRating={5}
        maxRating={5}
        size="tiny"
        disabled
        onClick={(e) => handleFilterByRating(5)}
      />
    </div>
  )
}

export default FilterByRating
