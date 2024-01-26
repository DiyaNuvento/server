import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ required: true, example: 45 })
  @IsNumber()
  amount: number;
}
