import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';
import { ContractModule } from './contract/contract.module';


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
    ClientModule,
    ContractModule,
    AuthModule,
    UserModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
