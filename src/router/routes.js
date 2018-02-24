export default [
	{
		path: '/',
		component: () => import('layouts/default'),
		children: [
			{path: '', component: () => import('pages/index')},
			{path: 'alarms', component: () => import('pages/alarms')},
			{path: 'mails', component: () => import('pages/mails')}
		]
	},

	{ // Always leave this as last one
		path: '*',
		component: () => import('pages/404')
	}
]
