import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Role {
  @Prop()
  name?: string;

  @Prop()
  permissions?: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
