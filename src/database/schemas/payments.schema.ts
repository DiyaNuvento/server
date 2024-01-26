import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserSchema } from './user.schema';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Payment {
  @Prop()
  paymentId?: string;

  //user to payment relationship is one to many
  @Prop({ type: Types.ObjectId, ref: UserSchema })
  userId?: Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
