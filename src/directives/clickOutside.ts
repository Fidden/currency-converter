import {Directive} from 'vue';

export const clickOutside: Directive = {
    beforeMount(el, binding) {
        el.clickOutsideEvent = (evt: Event) => {
            evt.stopPropagation();
            if (!(el === evt.target || el.contains(evt.target))) {
                binding.value(evt, el);
            }
        };
        window.requestAnimationFrame(() => {
            document.addEventListener('mouseup', el.clickOutsideEvent);
        });
    },
    unmounted(el) {
        document.removeEventListener('mouseup', el.clickOutsideEvent);
    }
};
