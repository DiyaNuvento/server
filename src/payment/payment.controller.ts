import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { Order } from './types/order';
import * as swagger from '@nestjs/swagger';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('order')
  @swagger.ApiCreatedResponse({ type: Order })
  create(@Body() args: CreatePaymentDto): Promise<Order> {
    return this.paymentService.create(args);
  }

  @Post('verify')
  verifyPayment(@Body() args: VerifyPaymentDto) {
    return this.paymentService.verifySignature(args);
  }
}
