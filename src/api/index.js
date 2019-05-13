import { version } from '../../package.json';
import { Router } from 'express';
import timers from './timer';

export default ({ config, db }) => {
	let api = Router();

	api.use('/timers', timers);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
