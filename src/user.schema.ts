import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fisrtName: String,
    lastName: String,
    phoneNumber: Number,
    mailID: String,
    passWord: String,
    confirmPassWord: String
  });

  export interface UserInterface extends Document{
    fisrtName: string,
    lastName: string,
    phoneNumber: number,
    mailID: string,
    passWord: string,
    confirmPassWord: string

  }

