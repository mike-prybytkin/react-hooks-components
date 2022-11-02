export interface ILiveSearchState {
  value: string;
}

export interface ILiveSearchProps {
  onSearch: (querySearch: string) => void;
  placeholderText: string;
}
