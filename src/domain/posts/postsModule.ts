import { Module } from '@nestjs/common';
import { PostController } from '@app/action/posts/postController';
import { PostService } from '@app/domain/posts/service/postService';

@Module({
  providers: [PostService],
  controllers: [PostController],
})
export class PostsModule {}
