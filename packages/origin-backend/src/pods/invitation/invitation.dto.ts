import {
    IOrganizationInvitation,
    OrganizationInvitationStatus
} from '@energyweb/origin-backend-core';
import { ApiProperty } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { PublicOrganizationInfoDTO } from '../organization';
import { Invitation } from './invitation.entity';

export class InvitationDTO implements IOrganizationInvitation {
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    role: number;

    @ApiProperty({ enum: OrganizationInvitationStatus, enumName: 'OrganizationInvitationStatus' })
    @IsEnum(OrganizationInvitationStatus)
    status: OrganizationInvitationStatus;

    @ApiProperty({ type: () => PublicOrganizationInfoDTO })
    @ValidateNested()
    organization: PublicOrganizationInfoDTO;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    sender: string;

    @ApiProperty({ type: Date })
    @IsNotEmpty()
    @IsDate()
    createdAt: Date;

    public static fromInvitation(invitation: Invitation): InvitationDTO {
        return plainToClass(InvitationDTO, invitation);
    }
}
