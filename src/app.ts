import server from 'bunrest';
import { RequestMethod, Handler, Middleware, BunRequest } from "@bunrest-server/request";
import { BunResponse } from "@bunrest-server/response";


async function bootstrap(){
    const bunServer = new server();

    bunServer.get('/test', (request : BunRequest, res: BunResponse) => {

        res.status(200).json({ message: 'succeed' });
    });
    bunServer.listen(3000);
}

bootstrap()
