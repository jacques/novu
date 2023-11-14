import { Injectable, Logger } from '@nestjs/common';
import { JobTopicNameEnum } from '@novu/shared';
import { QueueBaseService } from '../queue-base.service';
import {
  IWebSocketBulkJobDto,
  IWebSocketJobDto,
} from '../../../dtos/web-sockets-job.dto';

const LOG_CONTEXT = 'WebSocketsQueueService';

@Injectable()
export class WebSocketsQueueService extends QueueBaseService {
  constructor() {
    super(JobTopicNameEnum.WEB_SOCKETS);

    Logger.log(`Creating queue ${this.topic}`, LOG_CONTEXT);

    this.createQueue();
  }

  public async add(data: IWebSocketJobDto) {
    return await super.add(data);
  }

  public async addBulk(data: IWebSocketBulkJobDto[]) {
    return await super.addBulk(data);
  }
}
