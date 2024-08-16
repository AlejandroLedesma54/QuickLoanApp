import { Injectable } from '@nestjs/common';
import { UserProfile } from 'src/interfaces/user-profile.interfaz';
import { CreateLoanDto } from './create-loan.dto/create-loan.dto';

@Injectable()
export class LoansService {

    createLoan(createLoanDto: CreateLoanDto): string {
        return 'Loan created';
    }

    calculateLoanRisk(userProfile: UserProfile): string {
        if(userProfile.creditScore > 700) {
            return 'Low risk';
        }else{
            return 'High risk';
        }
    }
}
