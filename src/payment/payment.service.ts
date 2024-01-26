import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { Order } from './types/order';
import Razorpay = require('razorpay');

@Injectable()
export class PaymentService {
  async create(createPaymentDto: CreatePaymentDto): Promise<Order> {
    const razorpayClient = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    try {
      const payment_capture = 1;
      const amount = createPaymentDto.amount;
      const currency = 'INR';
      const options = {
        amount: amount * 100,
        currency,
        receipt: 'receiptIdSample',
        payment_capture,
      };
      const order = await razorpayClient.orders.create(options);
      return {
        id: order.id,
        currency: order.currency,
        amount: order.amount,
      };
    } catch (err) {
      //handle error event
      console.log(err);
      throw new Error('Something went wrong');
    }
  }

  async verifySignature(dto: VerifyPaymentDto): Promise<{
    response: string;
    message: string;
  }> {
    try {
      const secretKey = process.env.RAZORPAY_TEST_SECRET_KEY;
      const body = dto.order_id + '|' + dto.razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', secretKey)
        .update(body.toString())
        .digest('hex');
      if (!(expectedSignature === dto.razorpay_signature)) {
        return {
          response: 'Failure',
          message: 'Payment signature verification failed due to mismatch',
        };
      }
      //Save transaction id to db and then return success response
      return { response: 'Success', message: 'Payment Successful' };
    } catch (err) {
      //handle error event
      throw new Error('Something went wrong');
    }
  }
}
