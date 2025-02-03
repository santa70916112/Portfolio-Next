
/* eslint-disable  @typescript-eslint/no-explicit-any */

import path from "path";
import sqlite3, { Database } from "sqlite3";
import { migrate } from "./init";

const dbPath = path.join(process.cwd(), "db.db");

export const db: Database = new sqlite3.Database(
    dbPath,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Connected to the database.");
        }
    }
);

export const apiGet = async (query: string): Promise<any[]> => {
    await migrate();
    return await new Promise((resolve, reject) => {
        db.all(query, (err: Error | null, rows: any[]) => {
            if (err) {
                console.error(err);
                return reject(err);
            }
            return resolve(rows);
        });
    });
};

export const apiPost = async (query: string, values: any[]): Promise<void> => {
    await migrate();
    return await new Promise((resolve, reject) => {
        db.run(query, values, function (err: Error | null) {
            if (err) {
                console.error(err);
                return reject(err);
            }
            resolve();
        });
    });
};
