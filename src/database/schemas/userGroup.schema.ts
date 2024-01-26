import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { GroupSchema } from './group.schema';
import { UserSchema } from './user.schema';

//Group and user collection have many to many relationship
@Schema({
  timestamps: true,
  versionKey: false,
})
export class UserGroup {
  @Prop()
  name?: string;

  @Prop({ type: Types.ObjectId, ref: UserSchema })
  user?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: GroupSchema })
  group?: Types.ObjectId;
}

export const UserGroupSchema = SchemaFactory.createForClass(UserGroup);
