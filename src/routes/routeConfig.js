import React from 'react';
import Home from 'pages/home/Home';
import Streams from 'pages/streams/Streams';
import NotFound from 'pages/notFound/NotFound';

export const ROUTES = [
	{
		path: '/',
		key: 'home',
		label: 'Home',
		exact: true,
		component: Home
	},
	{
		path: '/content',
		key: 'streams',
		label: 'Streams',
		component: Streams
	},
	{
		path: '/not-found',
		key: 'notFound',
		label: 'Not Found',
		component: NotFound
	}
];
