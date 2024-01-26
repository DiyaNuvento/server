import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty({
    required: true,
  })
  currency: string;
  @ApiProperty({
    required: true,
  })
  id: string;
  @ApiProperty({
    required: true,
    example: 4500,
  })
  amount: string | number;
}
