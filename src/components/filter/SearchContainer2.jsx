import React from 'react'
import useDataContext from '../useDataContext'
import {
  updateResultData,
  getResultDataWithSearchText,
} from '../../controller/controller'

function SearchContainer2() {
  const {
    setSearchText,
    productData,
    setResultData,
    filterByRating,
    filterByCategories,
  } = useDataContext()

  //   useEffect(() => {
  //     setResultData(() => getResultDataWithSearchText(resultData, searchText))
  //   }, [searchText])
  const handleSearchTextChange = (e) => {
    setTimeout(() => {
      setSearchText(e.target.value)
      setResultData(() =>
        updateResultData(
          e.target.value,
          filterByRating,
          filterByCategories,
          productData,
        ),
      )
    }, 1000)
    /*  setTimeout(() => {
      setSearchText(e.target.value)
      setResultData(() =>
        getResultDataWithSearchText(productData, e.target.value),
      )
    }, 1000) */
  }
  const inputStyle = {
    width: '200px',
    padding: '10px',
    borderRadius: '32px',
    border: '1px solid black',
    margin: '5px 0',
  }
  return (
    <div>
      <label>
        <h4>Search By Name: </h4>
      </label>
      <input
        style={inputStyle}
        type="search"
        id="search"
        name="search"
        onChange={handleSearchTextChange}
      />
    </div>
  )
}

export default SearchContainer2
