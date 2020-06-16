export default {
	createCloseButton: () => {
		const close = document.createElement('a');
		const closeIcon = document.createElement('i');
		close.className = 'close';
		closeIcon.className = 'fas fa-window-close';
		close.appendChild(closeIcon);
		close.addEventListener('click', popup.classList.remove('pop'));
	},
	overlay: {
		addIcon: () => {
			const icon = document.createElement('i');
			icon.className = 'fas fa-plus';
			return icon;
		},
		eventPop: (el) => {
			el.addEventListener('click', () => {
				popup.classList.add('pop');
				document.body.style.overflow = 'hidden';
			});
		},
		eventClose: (el) => {
			el.addEventListener('click', () => {
				popup.classList.remove('pop');
				document.body.style.overflow = 'unset';
			});
		},
	},

	init: function (container) {
		container = container || document.body;
		const snackbar = util.create.snackbar('modal');
		for (const modal of document.querySelectorAll('.aqua-modal')) {
			const popup = modal.querySelector('.aqua-modal-popup');
			const content = popup.querySelector('.content');
			content.classList.add('aqua-modal-zoom');
			content.insertAdjacentElement('afterbegin', this.createCloseButton());

			for (const preview of modal.querySelectorAll('.aqua-modal-preview')) {
				preview.querySelectorAll('.overlay').forEach((overlay) => {
					overlay.appendChild(this.overlay.addIcon());
				});
				this.overlay.eventPop(preview);
			}

			popup.querySelectorAll('.close').forEach((close) => {
				this.overlay.eventClose(close);
			});
		}
	},
};
