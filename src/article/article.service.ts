import { Service } from "typedi";
import { articleModel } from "./schemas/article.schema";
import { Article } from "./models/article.model";
import { Types } from "mongoose";

@Service()
export class ArticleService {
  async getArticles(): Promise<Article[]> {
    return await articleModel.find();
  }

  async getArticleById(id: string): Promise<Article> {
    return (await articleModel.findById(id)) as Article;
  }
}
