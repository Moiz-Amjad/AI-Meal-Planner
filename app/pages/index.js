import express from 'express';
import cors from 'cors';
import { signInWithGoogle } from './firebase.js';
import { saveUserInfo } from './userService.js';
import { createAndSaveMealPlan } from './mealPlanService.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/google', async (req, res) => {
  try {
    const user = await signInWithGoogle();
    res.json({ userId: user.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/user/:userId', async (req, res) => {
  try {
    await saveUserInfo(req.params.userId, req.body);
    res.json({ message: 'User info saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/mealplan/:userId', async (req, res) => {
  try {
    const mealPlan = await createAndSaveMealPlan(req.params.userId);
    res.json(mealPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));