import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Loading, Error } from "./Loading";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

const Products = ({ products, loading, error }) => {
  const [data, setData] = useState(products);
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const sortMenuRef = useRef(null);
  const filterMenuRef = useRef(null);

  useEffect(() => {
    setData(Array.isArray(products) ? products : []);
  }, [products]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(event.target) &&
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setSortMenuVisible(false);
        setFilterMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[95vw] md:w-full max-w-screen-xl mx-auto px-2 sm:px-4">
      <div className="flex justify-between items-center pt-6 gap-4">
        <SortMenu
          products={Array.isArray(data) ? data : []}
          setData={setData}
          isVisible={sortMenuVisible}
          setVisibility={setSortMenuVisible}
          ref={sortMenuRef}
        />
        <FilterMenu
          setData={setData}
          isVisible={filterMenuVisible}
          setVisibility={setFilterMenuVisible}
          ref={filterMenuRef}
        />
      </div>

      <div
        className="grid auto-rows-fr grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-6"
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : Array.isArray(data) && data.length > 0 ? (
          data
            .slice(0, 30)
            .map((elem) => (
              <ProductCard product={elem} key={elem._id || elem.id} />
            ))
        ) : (
          <p>No products Available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
