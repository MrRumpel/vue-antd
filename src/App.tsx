import { defineComponent } from "vue";

import './theme';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src="./assets/logo.png" />
        {/* <HelloWorld msg="Hello Vue 3 + Vite" /> */}
      </>
    );
  },
})
