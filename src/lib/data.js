// This file contains functions to fetch data from the API. You can import and use these functions in your components to get the necessary data.

// This function is used to fetch all news categories in the LeftSidebar component.
export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
}

// This function is used to fetch news by category ID in the NewsCategoryPage component.
export async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data;
}

// This function is not used in the current code, but you can use it to fetch news details by ID when needed.
export async function getNewsDetailsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
}
