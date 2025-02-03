import { db } from "./db";

export const migrate = async () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS follows (id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER DEFAULT 0);`,
            (err) => {
                if (err) {
                    console.error("Error creating table:", err);
                    return; // Exit if there's an error
                }
                console.log("Follows table created successfully.");

                // Check if there are any rows in the table
                db.get(`SELECT COUNT(*) AS count FROM follows;`, (countErr, row: { count: number }) => {
                    if (countErr) {
                        console.error("Error fetching row count:", countErr);
                        return; // Exit if there's an error
                    }

                    if (row.count === 0) {
                        // Insert one row if there are no existing rows
                        db.run(`INSERT INTO follows (count) VALUES (248);`, (insertErr) => {
                            if (insertErr) {
                                console.error("Error inserting row:", insertErr);
                            } else {
                                console.log("One row inserted successfully.");
                            }
                        });
                    } else {
                        console.log("Row already exists. No insertion performed.");
                    }
                });
            }
        );
    });
};
