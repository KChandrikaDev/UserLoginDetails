import { PipeTransform, Injectable, ArgumentMetadata, BadGatewayException } from '@nestjs/common';
import{LoginFormDTO} from '../src/dto/Create_Login.dto';

@Injectable()
export class ValidationPipe implements PipeTransform<LoginFormDTO> 
{
  transform(value: LoginFormDTO, metadata: ArgumentMetadata) 
  {
      if(metadata.type === 'body')
      {
          if(!value.phoneNumber)
          {
              throw new BadGatewayException('Mobile number is mandatory');
          }   
      }
      if(!value.firstName)
      {
          throw new BadGatewayException('Firstname is not empty');
      }
      if(value.phoneNumber > 0 && value.phoneNumber.toString().length !== 10)
      {
          throw new BadGatewayException(' Mobile Number should be 10 digit number');
      }
        return value;
    }
}