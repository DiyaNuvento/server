import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerifyPaymentDto {
  @ApiProperty({ required: true, example: '' })
  @IsString()
  razorpay_payment_id: string;
  @ApiProperty({ required: true, example: '' })
  @IsString()
  razorpay_signature: string;
  @ApiProperty({ required: true, example: '' })
  @IsString()
  order_id: string;
}
