import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  readonly  completeProfile: boolean;
  @IsNotEmpty()
  @IsString()
  readonly deviceToken: string;
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  readonly isRemote: boolean;
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string;
  @IsNotEmpty()
  @IsString()
  readonly userAvatar: string;
}
