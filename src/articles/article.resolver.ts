import { Arg, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { ArticleService } from "./article.service";
import { Article } from "./models/article.model";

@Service()
@Resolver((of) => Article)
export class ArticleResolver {
  constructor(@Inject() private readonly articleService: ArticleService) {}

  @Query((returns) => [Article])
  async articles(): Promise<Article[]> {
    return await this.articleService.getArticles();
  }

  @Query((returns) => [Article])
  async article(@Arg("id") id: string): Promise<Article> {
    return await this.articleService.getArticle(id);
  }
}
