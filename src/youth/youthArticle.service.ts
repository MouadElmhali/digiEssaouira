import { Service } from "typedi";
import { youthArticleModel } from "./schemas/youthArticle.schema";
import { YouthArticle } from "./models/youthArticle.model";
import { Types } from "mongoose";

@Service()
export class YouthArticleService {
  async getYouthArticles(): Promise<YouthArticle[]> {
    return await youthArticleModel.find();
  }

  // async getYouthArticleById(id: string): Promise<YouthArticle> {
  //   return (await youthArticleModel.findById(id)) as YouthArticle;
  // }
}
