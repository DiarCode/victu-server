import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';
import { Metrica } from 'src/metrics/schemas/metrica.schema';
import { Program } from 'src/program/schema/program.schema';
import { Role } from 'src/roles/schemas/roles.schema';
import {Activity} from "../../activity/schema/activity.schema";

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

  @ApiProperty({ type: Metrica })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Metrica.name })
  metrica: Metrica;

  @ApiProperty({ type: Program })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Program.name })
  program: Program;

  @ApiProperty({ type: Activity })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Activity.name })
  activity: Activity;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserSсhemaModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
