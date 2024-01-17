/**
 * onecx-announcement-bff
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AnnouncementStatus } from './announcementStatus';
import { AnnouncementPriorityType } from './announcementPriorityType';
import { AnnouncementType } from './announcementType';


export interface CreateAnnouncementRequest { 
    title?: string;
    content?: string;
    type?: AnnouncementType;
    priority?: AnnouncementPriorityType;
    status?: AnnouncementStatus;
    startDate?: string;
    endDate?: string;
    appId?: string;
}



