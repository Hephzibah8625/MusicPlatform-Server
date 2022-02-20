import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./user/user.module";


@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URI),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}env`}),
        FileModule,
        TrackModule,
        UserModule
    ]
})
export class AppModule {}