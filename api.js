
// Read all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Read a single note
app.get('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  res.json(note);
});

// Update a note
app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  if (title) {
    note.title = title;
  }

  if (content) {
    note.content = content;
  }

  res.json(note);
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  notes.splice(index, 1);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
