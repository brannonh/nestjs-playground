import { IsString } from "class-validator";

export class CreatePenDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  color: string;
}
