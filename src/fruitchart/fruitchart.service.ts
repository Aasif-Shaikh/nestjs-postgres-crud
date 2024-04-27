import { Injectable, NotFoundException } from '@nestjs/common';
import { FruitChartEntity } from './entities/fruitchart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FruitChartDto } from './dto/fruitchart.dto';
@Injectable()
export class FruitChartService {
  constructor(
    @InjectRepository(FruitChartEntity)
    private fruitChartRepository: Repository<FruitChartEntity>,
  ) {}

  async getAllFruits() {
    return await this.fruitChartRepository.find();
  }

  async addFruitChart(data: FruitChartDto) {
    return await this.fruitChartRepository.save(data);
  }

  async deleteFruitChartById(deletedRecordId: string) {
    const recordIsExistInDB = await this.fruitChartRepository.findOne({
      where: { id: deletedRecordId },
    });
    if (!!recordIsExistInDB) {
      return await this.fruitChartRepository.delete({ id: deletedRecordId });
    }
    return new NotFoundException('No record found against ID');
  }

  async updatedFruitChartById(updatedRecord: any) {
    const existRecord = await this.fruitChartRepository.findOne({
      where: { id: updatedRecord?.id },
    });
    if (!!existRecord) {
      return await this.fruitChartRepository.update(
        { id: updatedRecord?.id },
        updatedRecord,
      );
    }
    return new NotFoundException('No record found again the given ID');
  }
}
