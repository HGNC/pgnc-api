import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { SignInProvider } from './provider/sign-in.provider';
import { GenerateTokensProvider } from './provider/generate-tokens.provider';
import { RefreshTokensProvider } from './provider/refresh-tokens.provider';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './config/jwt.config';
import { JwtModule } from '@nestjs/jwt';

/**
 * The AuthModule is responsible for handling authentication-related functionality.
 * It imports the UserModule to handle user-related operations and provides the AuthService
 * for authentication services.
 */
@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        {
            provide: HashingProvider,
            useClass: BcryptProvider,
        },
        SignInProvider,
        GenerateTokensProvider,
        RefreshTokensProvider,
    ],
    exports: [AuthService, HashingProvider],
    imports: [
        forwardRef(() => UserModule),
        ConfigModule.forFeature(jwtConfig),
        JwtModule.registerAsync(jwtConfig.asProvider()),
    ],
})
export class AuthModule {}
