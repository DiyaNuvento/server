import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { RoleSchema } from './role.schema';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop()
  name?: string;

  //user to role relationship= one to one
  @Prop({ type: Types.ObjectId, ref: RoleSchema })
  roleId?: Types.ObjectId;

  @Prop()
  roleName?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
