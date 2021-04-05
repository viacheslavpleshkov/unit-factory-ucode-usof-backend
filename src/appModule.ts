import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@app/domain/users/usersModule';
import { config } from '@app/config';

const ex providers = [
  {
    provide: 'User',
    useClass: 's',
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot(),
    UsersModule,
  ],
  providers: providers,
})
export class AppModule {}
