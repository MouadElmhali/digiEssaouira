import { Arg, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { YouthArticleService } from "./youthArticle.service";
import { YouthArticle } from "./models/youthArticle.model";

@Service()
@Resolver((of) => YouthArticle)
export class YouthArticleResolver {
  constructor(@Inject() private readonly youthArticleService: YouthArticleService) {}

  @Query((returns) => [YouthArticle])
  async youthArticles(): Promise<YouthArticle[]> {
    return await this.youthArticleService.getYouthArticles();
  }

  // @Query((returns) => YouthArticle)
  // async youthArticle(@Arg("id") id: string) {
  //   return await this.youthArticleService.getYouthArticleById(id);
  // }
}
