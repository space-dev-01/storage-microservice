import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { StorageModule } from '../storege/storage.module';
import { ImageRepository } from './infra/image.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './infra/entity/image.entity';
import { UseCaseProvider } from './app/use-cases';
import { JwtService } from '@nestjs/jwt';
import { CacheService } from '../../infrastructure/cache/cache.service';
import { LoggerService } from '../../infrastructure/loggers/logger.service';

@Module({
  controllers: [ImagesController],
  providers: [
    ImagesService,
    ImageRepository,
    JwtService,
    CacheService,
    LoggerService,
    ...UseCaseProvider,
  ],
  imports: [StorageModule, TypeOrmModule.forFeature([ImageEntity])],
})
export class ImagesModule {}
