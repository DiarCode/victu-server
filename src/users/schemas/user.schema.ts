import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';
import { Metrics } from 'src/metrics/schemas/metrica.schema';
import { Program } from 'src/program/schema/program.schema';
import { Role } from 'src/roles/schemas/roles.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ type: String })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ type: String })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  @Exclude()
  password: string;

  @ApiProperty({ type: [Role] })
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Role.name })
  roles: Role[];

  @ApiProperty({ type: Metrics })
  @Prop({ type: mongoose.Schema.Types.Mixed, ref: Metrics.name })
  metrics: Metrics;

  @ApiProperty({ type: Program })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Program.name })
  program: Program;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserSсhemaModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
