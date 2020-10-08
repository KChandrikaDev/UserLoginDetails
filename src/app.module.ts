import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, 
    MongooseModule.forRoot('mongodb+srv://admin:password@123@cluster0.wwvgf.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
