import Home from './Home.svelte';
import Level from './Level.svelte';
import Win from './Win.svelte';
import Lose from './Lose.svelte';

const routes = {
  '/': Home,

  '/game/:level': Level,

  '/win/:level': Win,
  '/lose': Lose,
};

export default routes;
