import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationService } from './location.service';

@Controller('location')
@ApiTags('Location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}
}
