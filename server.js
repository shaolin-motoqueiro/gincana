
const cors = require('cors');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// CREATE
app.post('/usuarios', async (req, res) => {
  const { nome, email, idade } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nome, email, idade) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, idade]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// READ
app.get('/usuarios', async (req, res) => {
  try {
    
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// UPDATE
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;
  try {
    const 
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).(err.message);
  }
});

// DELETE
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.;
  try {
   
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));