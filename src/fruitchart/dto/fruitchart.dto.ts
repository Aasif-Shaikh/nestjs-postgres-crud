import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class FruitChartDto {
  @IsNotEmpty()
  fruitName: string;

  @IsNotEmpty()
  lemon: string;

  @IsNotEmpty()
  plates: string;

  @IsNotEmpty()
  quantity: number;
}
