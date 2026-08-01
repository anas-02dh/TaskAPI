const pool = require("../data/database");

class TaskRepository {

  async findAll() {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY id"
    );

    return result.rows;
  }

  async findById(id) {
    const result = await pool.query(
      "SELECT * FROM tasks WHERE id = $1",
      [id]
    );

    return result.rows[0];
  }

  async create(name) {
    const result = await pool.query(
      `
      INSERT INTO tasks (name)
      VALUES ($1)
      RETURNING *
      `,
      [name]
    );

    return result.rows[0];
  }

  async update(id, updatedTask) {
    const result = await pool.query(
      `
      UPDATE tasks
      SET
        name = COALESCE($1, name),
        done = COALESCE($2, done)
      WHERE id = $3
      RETURNING *
      `,
      [
        updatedTask.name ?? null,
        updatedTask.done ?? null,
        id
      ]
    );

    return result.rows[0];
  }

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }
}

module.exports = new TaskRepository();