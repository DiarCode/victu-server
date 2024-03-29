import { ApiProperty } from '@nestjs/swagger';

export class CreateMetricaDto {
  @ApiProperty({ type: Number })
  age: number;

  @ApiProperty({ type: String })
  gender: string;

  @ApiProperty({ type: Number })
  height: number;

  @ApiProperty({ type: Number })
  weight: number;

  @ApiProperty({ type: Number })
  goalWeight: number;

  @ApiProperty({ type: Date })
  startDate: Date;

  @ApiProperty({ type: Date })
  finishDate: Date;

  @ApiProperty({ type: String })
  activityId: string;

  @ApiProperty({ type: String })
  userId: string;
}
