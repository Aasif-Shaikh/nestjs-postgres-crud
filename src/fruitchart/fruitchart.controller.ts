import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { Request } from 'express';
import { FruitChartDto } from './dto/fruitchart.dto';
import { FruitChartService } from './fruitchart.service';
@Controller('fruitchart')
export class FruitChartController {
  constructor(private readonly fruitChartService: FruitChartService) {}
  @Get()
  async getAllFruitCharts() {
    return await this.fruitChartService.getAllFruits();
  }

  @Post()
  async createFruitChart(@Body() fruitChartData: FruitChartDto) {
    return await this.fruitChartService.addFruitChart(fruitChartData);
  }

  @Delete(':id')
  async deleteFruitChart(@Param('id') id: string) {
    return await this.fruitChartService.deleteFruitChartById(id);
  }

  @Put(':id')
  async updateFruitChart(@Param('id') id: string, @Body() uData: any) {
    return await this.fruitChartService.updatedFruitChartById({
      id,
      ...uData,
    });
  }
}
