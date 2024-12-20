import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class ExternalResourceDto {
  @ApiProperty({
    description: 'The external resource ID',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  @Expose()
  id: number;

  @ApiProperty({
    description: 'The external resource name',
    example: 'NCBI Gene',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;
}
