const LIST_TYPES = {
	BACKLOG: 'backlog',
	READY: 'ready',
	IN_PROGRESS: 'inProgress',
	FINISHED: 'finished',
}

const LIST_TITLES = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In Progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: '#ffffff',
	[LIST_TYPES.READY]: '#ffffff',
	[LIST_TYPES.IN_PROGRESS]: '#ffffff',
	[LIST_TYPES.FINISHED]: '#ffffff',
}

export { LIST_TYPES, LIST_TITLES, LIST_COLORS }
