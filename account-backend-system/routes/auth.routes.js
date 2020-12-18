const { Router } = require('express');
const router = Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const jwtGenerator = require('../utils/jwtGenerator');

// /auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        });
      }
      const { name, lastname, email, password } = req.body;
      console.log({ name, lastname, email, password });

      const checkUser = await pool.query(
        `SELECT * FROM users WHERE user_email=$1`,
        [email]
      );
      if (checkUser.rows.length !== 0) {
        return res.status(401).json({
          message: 'Возникла ошибка,такой пользователь уже существует',
        });
      }

      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await pool.query(
        'INSERT INTO users(user_email,user_first_name,user_last_name,password) VALUES($1,$2,$3,$4) RETURNING *',
        [email, name, lastname, hashedPassword]
      );
      console.log(newUser.rows.id);

      const token = jwtGenerator(newUser.rows[0].id);
      res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Возникла ошибка,попробуйте снова' });
    }
  }
);

// /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE user_email=$1', [
      email,
    ]);
    console.log(user.rows[0]);
    if (user.rows.length === 0) {
      return res.status(401).json({
        message: 'Возникла ошибка,пользователя с таким email не существует',
      });
    }
    const checkPassword = await bcrypt.compare(password, user.rows[0].password);
    console.log(checkPassword);
    if (!checkPassword) {
      return res
        .status(401)
        .json({ message: 'Неправильный логин или пароль,попробуйте снова' });
    }
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Возникла ошибка,попробуйте снова' });
  }
});

// /auth/name
router.get('/name', async (req, res) => {
  try {
    const sentToken = req.headers;
    console.log(req);
    const userId = jwt.decode(sentToken.token);
    const userIdValue = userId.obj;

    const userName = await pool.query(
      `SELECT user_first_name FROM users WHERE user_id=$1 `,
      [userIdValue]
    );

    if (userName.rows.length === 0) {
      return res.status(401).json({
        message: 'Возникла ошибка,пользователя с таким именем не существует',
      });
    }
    console.log(userName.rows[0]);

    res.json(userName.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Возникла ошибка,попробуйте снова' });
  }
});

module.exports = router;
