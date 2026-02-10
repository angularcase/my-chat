import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class SocketNamespacesService {
  private namespaces = new Map<string, Server>();

  register(name: string, server: Server): void {
    this.namespaces.set(name, server);
  }

  get(name: string): Server | undefined {
    return this.namespaces.get(name);
  }
}
