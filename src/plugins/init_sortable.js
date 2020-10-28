import { Sortable } from "sortablejs";

const initSortable = () => {
  var list = document.querySelector("#results");
  var sortable = Sortable.create(list, {
    ghostClass: "ghost",
    animation: 200,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
}

export { initSortable };
