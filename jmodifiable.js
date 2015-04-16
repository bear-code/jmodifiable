jQuery.fn.extend({

  modifiable: function() {

    function bindFormChange($form) {

      function touchButtons() {
        var
          changed_objects = [],
          $observable_buttons = $form.find('input[type="submit"], button[type="submit"], button[data-object="reset-form"]');

        changed_objects = $('input, textarea, select', $form).map(function () {
          var
            $input = $(this),
            changed = false;

          if (!changed && $input.is('input:checkbox') || $input.is('input:radio') ) {
            changed = (($input).prop('defaultChecked') != $input.is(':checked'));
          }
          if ($input.is('input') || $input.is('textarea') ) {
            changed = (($input).prop('defaultValue') != $input.val());
          }
          if (!changed && $input.is('select') ) {
            changed = !$('option:selected', $input).prop('defaultSelected');
          }
          if (changed) {
            return $input.attr('id');
          }

        }).toArray();

        (changed_objects.length) ? $observable_buttons.removeAttr('disabled') : $observable_buttons.attr('disabled', 'disabled');
      };
      touchButtons();

      $('input, textarea, select', $form).each(function () {
        var $input = $(this);

        $input.on('keyup', function () {
          touchButtons();
        });
      });

    };

    bindFormChange($(this));
  }

});
