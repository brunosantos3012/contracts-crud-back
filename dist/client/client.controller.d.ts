import { ClientService } from './service/client.service';
import { ClientDto } from './dto/client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    insertClient(request: ClientDto): Promise<number>;
    getAll(query: ClientDto): Promise<ClientDto[]>;
    getSingle(clientCode: number): Promise<ClientDto>;
    update(clientCode: number, request: ClientDto): Promise<void>;
    delete(clientCode: number): Promise<void>;
}
