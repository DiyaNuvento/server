import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Group {
  @Prop()
  name?: string;

  @Prop()
  description?: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
