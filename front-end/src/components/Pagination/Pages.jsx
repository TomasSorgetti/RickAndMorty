import React from 'react'
import ReactPaginate from "react-paginate";

const Pages = ({ info, handleChange }) => {

    return (
      
        <ReactPaginate
            className='flex w-11/12 my-10 items-center justify-center gap-2 mx-auto'
      pageCount={info?.pages}
      onPageChange={(data) => handleChange(data.selected+1)}
    />
  );
};

export default Pages