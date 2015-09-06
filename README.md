### Setup
In web directory execute `init-sass` then `bundle install`. 
Then add this line to the style.css file.

```css
@import url('./styles/css/style.css');
```

In the styles directory execute `bundle exec compass watch` to track changes and update files accordingly.

#### Auto Reload
In the root directory execute `grunt server`.

Add the following to the `functions.php` file:
```php
if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {
  wp_register_script('livereload', 'http://localhost:35729/livereload.js?snipver=1', null, false, true);
  wp_enqueue_script('livereload');
}
```
