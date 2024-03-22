import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import {
    IOrganizationInvitation,
    OrganizationInvitationStatus,
    OrganizationRole,
    Role
} from '@energyweb/origin-backend-core';

import { ExtendedBaseEntity } from '@energyweb/origin-backend-utils';
import { Organization } from '../organization/organization.entity';

@Entity({ name: 'organization_invitation' })
export class Invitation extends ExtendedBaseEntity implements IOrganizationInvitation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    email: string;

    @Column({ default: Role.OrganizationUser })
    @IsEnum(Role)
    role: OrganizationRole;

    @Column()
    @IsEnum(OrganizationInvitationStatus)
    status: OrganizationInvitationStatus;

    @Column()
    @IsString()
    sender: string;

    @ManyToOne(() => Organization, (organization) => organization.users)
    organization: Organization;
}
