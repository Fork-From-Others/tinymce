configure({
  sources: [
    source('amd', 'tinymce.plugins.bbcode', '../../src/main/js', function (id) {
			return mapper.hierarchical(id).replace(/^tinymce\/plugins\/bbcode\//, '');
		})
  ]
});
