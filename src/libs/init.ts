import { db } from "./db";

export const migrate = () => {
    db.serialize(() => {
        db.run(
            `CREATE TABLE IF NOT EXISTS follows (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    count INTEGER DEFAULT 0
);
    `,
            (err: Error) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("Follows table created successfully.");
            }
        );
    });
}