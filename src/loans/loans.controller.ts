import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoansService } from './loans.service';
import { userProfile } from 'src/user-profile/user-profile';
import { CreateLoanDto } from './create-loan.dto/create-loan.dto';

@Controller('loans')
export class LoansController {  
    constructor(private readonly loanService: LoansService) {}  
    @Post()
    createLoan(@Body() createLoanDto: CreateLoanDto): string {
        return this.loanService.createLoan(createLoanDto);
    }

    @Get(':id')
    getLoanStatus(@Param('id') id: string): string {
        return `Status of loan ${id}`;
    }

    @Get()
    getLoanRisk(): string {
        return this.loanService.calculateLoanRisk(userProfile);
    }
    
}
