import { Module } from '@nestjs/common';
import { FruitChartController } from './fruitchart.controller';
import { FruitChartService } from './fruitchart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FruitChartEntity } from './entities/fruitchart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FruitChartEntity])],
  controllers: [FruitChartController],
  providers: [FruitChartService],
  /*   exports: [FruitChartService], */
})
export class FruitChartModule {}
