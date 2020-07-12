import { IRoute, Response, Request } from "express";
import { CharacterDTO } from "./CharacterDTO";
import express = require("express");

export abstract class Character {

    static readonly ROUTE: string = '/character';

    static getCharacters(): IRoute {
        return express.Router()
            .route(Character.ROUTE)
            .get((req: Request, res: Response<CharacterDTO>) => {
                res.json()
            })

    }

    static getCharacter() {

    }

}

