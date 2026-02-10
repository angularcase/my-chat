import { Injectable } from '@nestjs/common';
import { ChatSpaceService } from '../modules/chat-space/chat-space.service';

@Injectable()
export class OriginValidatorService {
  constructor(private readonly chatSpaceService: ChatSpaceService) {}

  /**
   * Returns true if the request origin is allowed for the given widget key.
   * If allowedDomains is empty, allow any origin (development mode).
   */
  async isOriginAllowed(origin: string | undefined, widgetKey: string): Promise<boolean> {
    const space = await this.chatSpaceService.findByWidgetKey(widgetKey);
    if (!space) return false;
    if (space.allowedDomains.length === 0) return true;
    if (!origin) return false;
    const normalized = origin.trim().toLowerCase();
    return space.allowedDomains.some(
      (d) => d.trim().toLowerCase() === normalized,
    );
  }
}
