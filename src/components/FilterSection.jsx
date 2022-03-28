import React from 'react'
import SearchContainer2 from './filter/SearchContainer2'
import FilterByRating from './filter/FilterByRating'
import FilterByCategories from './filter/FilterByCategories'
import useDataContext from './useDataContext'
import { Button } from 'semantic-ui-react'

function FilterSection() {
  const {
    setResultData,
    productData,
    filterByCategories,
    filterByRating,
    searchText,
    setFilterByCategories,
    setFilterByRating,
    setSearchText,
  } = useDataContext()
  const handleClearFilter = () => {
    setFilterByCategories('all')
    setFilterByRating(1)
    setSearchText('')
    setResultData(productData)
  }
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <SearchContainer2 />
        <FilterByCategories />
        <FilterByRating />
        {(filterByCategories !== 'all' ||
          filterByRating !== 1 ||
          searchText !== '') && (
          <Button basic color="red" onClick={handleClearFilter}>
            Clear Filter
          </Button>
        )}
      </div>
    </div>
  )
}

export default FilterSection
