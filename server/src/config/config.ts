import * as dotenv from 'dotenv';

let path;

if(process.env.NODE_ENV == 'test'){
        path = `${__dirname}`;
}
else {
        path = `${__dirname}/../../.env`;
}

dotenv.config({path});

export const PORT = process.env.PORT;
export const SECRET_KEY = process.env.SECRET_KEY+"";
export const DATABASE_NAME = process.env.DATABASE_NAME;+"";
export const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME+"";
export const DATABASE_USER_PASS = process.env.DATABASE_USER_PASS;