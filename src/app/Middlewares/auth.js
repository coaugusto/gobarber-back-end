//Middleware verifica se o token existe e retorna o ID de dentro do Token

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  //Busca token do header
  const authHeader = req.headers.authorization;
  //Verifica se eixiste o token
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided carlos.' });
  }
  //Transforma token em array pegando o segundo parametro [, token]
  const [, token] = authHeader.split(' '); //split com espaço para separar string

  try {
    //promisify transforma async retornando uma função
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id; //retorna ID na requisição

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
