'use strict';
/*eslint-env jquery*/

function main() {
  // Add Item
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();

    const userInput = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');

    $('.shopping-list').append(
    `<li>
      <span class="shopping-item">${userInput}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
    );
  });


  // check and un-check an item
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // delete an item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

}


$(main);