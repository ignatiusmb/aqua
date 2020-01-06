import { highlightAll } from 'prismjs';

const Aqua = (function(glob) {
  const util = {
    checkTimeout: 240,
    highlight: () => highlightAll(),
    create: {
      snackbar: type => {
        const barContainer = document.querySelector('.aqua-bars');
        if (!barContainer) {
          const container = document.createElement('div');
          container.className = 'aqua-bars';
          document.body.appendChild(container);
        }
        const snackbar = document.createElement('div');
        const main = document.createElement('main');
        const icon = document.createElement('i');
        snackbar.className = `aqua-snackbar ${type}`;
        icon.className = 'fas fa-times';
        icon.addEventListener('click', () => snackbar.classList.remove('show'));
        snackbar.appendChild(main);
        snackbar.appendChild(icon);
        return barContainer.appendChild(snackbar);
      },

      toolbar: (pre, snackbar) => {
        const toolbar = document.createElement('div');
        toolbar.className = 'aqua-code-toolbar';
        const createTool = (iconClass, description, clickCallback) => {
          const tool = document.createElement('a');
          const icon = document.createElement('i');
          const tooltip = document.createElement('span');
          tool.className = `aqua-ctb-item`;
          icon.className = iconClass;
          tooltip.className = 'aqua-ctb-tooltip';
          tooltip.innerText = description;
          tool.appendChild(icon);
          tool.appendChild(tooltip);
          tool.addEventListener('click', clickCallback);
          return tool;
        };

        // Toggle Numbering Button
        toolbar.appendChild(
          createTool('fas fa-list-ol', 'Toggle Numbering', () => {
            pre.classList.toggle('numbered');
          })
        );

        // Copy Code Button
        const copyTimeout = {};
        const copy = createTool('far fa-copy', 'Copy', () => {
          const codeLines = pre.querySelectorAll('code');
          const copyArea = document.createElement('textarea');
          const description = document.createElement('span');
          copyArea.className = 'ghost-area';
          for (const code of codeLines) copyArea.value += code.innerText;
          document.body.appendChild(copyArea);
          copyArea.focus();
          copyArea.select();
          try {
            if (document.execCommand('copy')) description.textContent = 'Copied to clipboard!';
            else description.textContent = 'Copy failed';
          } catch (err) {
            description.textContent = `An error occurred --> ${err}`;
          }
          if (snackbar.firstChild.tagName !== 'I') snackbar.removeChild(snackbar.firstChild);
          snackbar.insertAdjacentElement('afterbegin', description);
          if (!snackbar.classList.contains('show')) {
            if (copyTimeout.add) clearTimeout(copyTimeout.add);
            if (copyTimeout.remove) clearTimeout(copyTimeout.remove);
            copyTimeout.add = setTimeout(() => snackbar.classList.add('show'), 200);
            copyTimeout.remove = setTimeout(() => snackbar.classList.remove('show'), 5000);
          } else {
            if (copyTimeout.add) clearTimeout(copyTimeout.add);
            if (copyTimeout.remove) clearTimeout(copyTimeout.remove);
            snackbar.classList.remove('show');
            copyTimeout.add = setTimeout(() => snackbar.classList.add('show'), 600);
            copyTimeout.remove = setTimeout(() => snackbar.classList.remove('show'), 5000);
          }
          document.body.removeChild(copyArea);
        });
        toolbar.appendChild(copy);

        return toolbar;
      }
    }
  };

  return {
    code: {
      createToolbar: pre => util.create.toolbar(pre),
      wrapCodes: (code, start) => {
        const pre = document.createElement('pre');
        let lineNumber = !start ? 1 : start;
        for (const line of code.textContent.split('\n')) {
          const code = document.createElement('code');
          code.dataset.line = lineNumber++;
          code.textContent = `${line}\n`;
          pre.appendChild(code);
        }
        while (!pre.firstChild.textContent.trim()) pre.removeChild(pre.firstChild);
        while (!pre.lastChild.textContent.trim()) pre.removeChild(pre.lastChild);

        pre.className = code.className;
        return pre;
      },
      wrapBlock: (pre, dataset, toolbar) => {
        const wrapper = document.createElement('div');
        const header = document.createElement('div');
        wrapper.classList.add('aqua-code-box');
        header.classList.add('aqua-code-header');

        if (!dataset.title) header.classList.add('empty');
        else header.textContent = dataset.title;
        if (!dataset.language) {
          pre.classList.add('language-none');
          header.setAttribute('data-language', '');
        } else {
          pre.classList.add(`language-${dataset.language}`);
          header.setAttribute('data-language', dataset.language);
        }

        header.appendChild(toolbar);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
        return wrapper;
      },

      init: function(container) {
        container = container || document.body;
        const snackbar = util.create.snackbar('code');
        for (const node of container.querySelectorAll('pre.aqua-code')) {
          if (node.getAttribute('data-aqua') === 'watered') continue;

          const pre = this.wrapCodes(node, parseInt(node.dataset.lineStart));
          pre.setAttribute('data-aqua', 'watered');
          const wrapper = this.wrapBlock(pre, node.dataset, this.createToolbar(pre, snackbar));

          node.replaceWith(wrapper);
        }
        container.setAttribute('data-aqua', 'watered');
      }
    },

    form: {
      wrapInput: input => {
        const label = document.createElement('label');
        const placeholder = document.createElement('span');
        label.htmlFor = input.type;
        input.placeholder = ' ';
        placeholder.textContent = input.placeholder;
        placeholder.textContent.charAt(0).toUpperCase();
        label.appendChild(input);
        label.appendChild(placeholder);
        return label;
      },

      init: function(container) {
        container = container || document.body;
        const snackbar = util.create.snackbar('form');
        for (const form of container.querySelectorAll('form.aqua-form')) {
          for (const input of form.querySelectorAll('input')) {
            input.replaceWith(this.wrapInput(document.cloneNode(input)));
          }
        }
      }
    },

    modal: {
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
        eventPop: el => {
          el.addEventListener('click', () => {
            popup.classList.add('pop');
            document.body.style.overflow = 'hidden';
          });
        },
        eventClose: el => {
          el.addEventListener('click', () => {
            popup.classList.remove('pop');
            document.body.style.overflow = 'unset';
          });
        }
      },

      init: function(container) {
        container = container || document.body;
        const snackbar = util.create.snackbar('modal');
        for (const modal of document.querySelectorAll('.aqua-modal')) {
          const popup = modal.querySelector('.aqua-modal-popup');
          const content = popup.querySelector('.content');
          content.classList.add('aqua-modal-zoom');
          content.insertAdjacentElement('afterbegin', this.createCloseButton());

          for (const preview of modal.querySelectorAll('.aqua-modal-preview')) {
            preview.querySelectorAll('.overlay').forEach(overlay => {
              overlay.appendChild(this.overlay.addIcon());
            });
            this.overlay.eventPop(preview);
          }

          popup.querySelectorAll('.close').forEach(close => {
            this.overlay.eventClose(close);
          });
        }
      }
    },

    tsunami: function() {
      this.code.init();
      this.form.init();
    }
  };
})(typeof window === 'undefined' ? {} : window);

if (typeof module !== 'undefined' && module.exports) module.exports = Aqua;
if (typeof global !== 'undefined') global.Aqua = Aqua;

(function() {
  if (typeof self === 'undefined' || !self.Aqua || !self.document || !document.querySelector) {
    return;
  }
  document.addEventListener('DOMContentLoaded', Aqua.tsunami);
})();
