import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CollegeService } from '../service/college.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCollegeDto } from '../dtos/college.dto';
import { AllowAnonymous } from 'src/shared/authorization';

@Controller('college')
@ApiTags('College')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {
    // super(collegeService);
  }

  @Post('register-college')
  @ApiOperation({ summary: 'Register a new college' })
  @ApiResponse({ status: 201, description: 'College registered successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async registerCollege(@Body() body: CreateCollegeDto) {
    return await this.collegeService.registerCollege(body);
  }

  @Get('list-all')
  @AllowAnonymous()
  @ApiOperation({ summary: 'Get a list of all colleges' })
  @ApiResponse({
    status: 200,
    description: 'List of colleges retrieved successfully.',
  })
  async findAllCollege() {
    return await this.collegeService.findAllCollege();
  }

  @Get(':id')
  @AllowAnonymous()
  @ApiOperation({ summary: 'Get a college by ID' })
  @ApiResponse({ status: 200, description: 'College retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'College not found.' })
  async findOneCollege(@Param('id') id: number) {
    return await this.collegeService.findOneCollege(id);
  }
}