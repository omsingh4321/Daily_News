const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_DOMAIN2="https://api.thenewsapi.com/v1/news/top?api_token=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY1 = "";
const API_KEY2="";
const API_KEY3="";

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=hi&category=${category}&max=8&apikey=${API_KEY3}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=hi&max=8&apikey=${API_KEY3}`;
