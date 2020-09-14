import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql669.umbler.com',
      port: 41890,
      username: 'pocuser',
      password: 'm83wPE+}FU',
      database: 'poc-frontend',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ClientModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
