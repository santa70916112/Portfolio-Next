import { db } from "./db";

export const migrate = async () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS follows (id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER DEFAULT 0);`,
            (err: Error) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("Follows table created successfully.");

                    // Check if there are any rows in the table
                    db.get(`SELECT COUNT(*) AS count FROM follows;`, (countErr: Error, row: { count: number }) => {
                        if (countErr) {
                            console.error(countErr.message);
                        } else if (row.count === 0) {
                            // Insert one row if there are no existing rows
                            db.run(`INSERT INTO follows (count) VALUES (248);`, (insertErr: Error) => {
                                if (insertErr) {
                                    console.error(insertErr.message);
                                } else {
                                    console.log("One row inserted successfully.");
                                }
                            });
                        } else {
                            console.log("Row already exists. No insertion performed.");
                        }
                    });
                }
            }
        );
    });
}
