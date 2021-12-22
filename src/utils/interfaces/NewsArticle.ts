import { NewsArticleCategory } from "./NewsArticleCategory";

export interface NewsArticle {
  title: string,
  publishDate: Date,
  htmlLead: string,
  htmlContent: string,
  articleUrl: string,
  imageUrl: string,
  thumbnailUrl: string,
  categories: NewsArticleCategory[],
}