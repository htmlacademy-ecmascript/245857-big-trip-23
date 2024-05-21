
import EventFiltersView from './view/event-filters-view';
import EventPresenter from './presenter/event-presenter';
import { render } from './render.js';

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter({ container: tripEventsElement });

render(new EventFiltersView(), tripFiltersElement);

eventPresenter.init();
