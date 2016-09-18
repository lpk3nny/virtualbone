# virtualbone
[backbone.js](http://backbonejs.org/) with virtual DOM views

### How to use

```javascript
define(['virtualbone'], function (Backbone) {
	Backbone.View.extend({
        ...
        render:     function () {
            this.patch(this.template(this.model));
        }
        ...
    })
})
```

#### What you need to remember for

* your templates must contain outer html
```html
<div id="content">

</div>
```

```html
<script id="tpl" type="text/template">
	<div id="content">
		<div class="wrapper">
			<h1><%- page.get('title') %></h1>
		</div>
	</div>
</script>
```

```javascript
Backbone.View.extend({
	el: document.querySelector('#content'),
	template: _.template(document.querySelector('#tpl').innerHTML)
}
```
* never change views root element tagname
* use **data-ignore** attribute to prevent nested views from diff

```html
<script id="tpl" type="text/template">
	<div id="content">
		<div class="wrapper">
			<h1><%- page.get('title') %></h1>
            <div data-ignore class="items"></div>
		</div>
	</div>
</script>
```

```javascript
initialize: function () {
	this.render();
	this.$el.find('.items').append('<span>nested views</span>');
},
...
render:     function () {
	this.patch(this.template(this.model));
}
```

that's all