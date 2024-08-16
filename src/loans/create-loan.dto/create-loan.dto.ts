import { IsNotEmpty, IsString } from "class-validator";

export class CreateLoanDto {
    @IsString()
    @IsNotEmpty()
    readonly borrowerName: string;

    @IsString()
    @IsNotEmpty()
    readonly amount: number;
}
