export function Storage(item, key) {
	return {
		create: function () {
			localStorage.setItem(key, JSON.stringify(item))
		},
		read: function () {
			localStorage.getItem(key)
		},
		update: function () {
			localStorage.setItem(key, JSON.stringify(item))
			console.log('atualizou o item')
		},
		delete: function () {
			localStorage.setItem(key, JSON.stringify(item))
		}
	}
}
