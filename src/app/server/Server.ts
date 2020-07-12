import express = require("express");

export class Server {

    private app: express.Application;

    constructor(port: number) {
        this.app = express();

        this.app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })

    }

    initCharacter(): void {
        this.app.use('/api', )
    }

}
