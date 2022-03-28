import React from 'react'
import useDataContext from '../useDataContext'
import { updateResultData } from '../../controller/controller'

function FilterByCategories() {
  const {
    categories,
    setFilterByCategories,
    setResultData,
    searchText,
    filterByRating,
    productData,
  } = useDataContext()
  const handleChange = (e) => {
    setFilterByCategories(e.target.value)
    setResultData(() =>
      updateResultData(searchText, filterByRating, e.target.value, productData),
    )
  }
  return (
    <div style={{ zIndex: '10000' }}>
      <h3>Filter By Categories</h3>
      <select name="categories" id="categories" onChange={handleChange}>
        <option key={'all'} value="all">
          All
        </option>
        {categories?.map((i) => (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterByCategories
