import { Server } from 'socket.io';
export declare class SocketNamespacesService {
    private namespaces;
    register(name: string, server: Server): void;
    get(name: string): Server | undefined;
}
