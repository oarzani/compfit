import React from "react";
import RangeBar from "../components/RangeBar";
import FilterBar from "../components/FilterBar";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import StartSearch from "../components/SearchCityBar";
export default {
  title: "Bars"
};

export const PriceRangeBar = () => <RangeBar />;

export const Filter = () => <FilterBar />;

export const SearchBar = () => <SecondSearchbar />;

export const Search = () => <StartSearch />;
