import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from '@app/domain/posts/service/postService';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  findAll(): string {
    return this.postService.findAll();
  }

  // @Get(':id')
  // getOne(): string {
  //   return this.postService.findOne();
  // }

  // @Post()
  // create(@Body() CreateCoffeeDto: CreatePostDto) {
  //   return this.postService.create(CreateCoffeeDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdatePostDto) {
  //   return this.postService.update(id, UpdateCoffeeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(id);
  // }
}
