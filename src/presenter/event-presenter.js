import EventListView from '../view/event-list-view';
import EventSortView from '../view/event-sort-view';
import EventListItemView from '../view/event-list-item-view';
import EventEditPointView from '../view/event-edit-point-view';
import { render } from '../render';

export default class EventPresenter {
  eventListComponent = new EventListView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(new EventSortView(), this.container);
    render(this.eventListComponent, this.container);
    render(new EventEditPointView(), this.eventListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventListItemView(), this.eventListComponent.getElement());
    }
  }
}
