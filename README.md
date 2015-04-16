# jmodifiable

## detects form input elements change and automatically disables/enables submit/reset buttons.

There is hidden property for each input element on the form that you can use to determine whether or not the value was changed. Each type of input has it's own property name. For example

- for text/textarea it's defaultValue
- for select it's defaultSelect
- for checkbox/radio it's defaultChecked

Can be used as simple as
````
$('form[data-object="examination-cycle-form"]').modifiable();
````
