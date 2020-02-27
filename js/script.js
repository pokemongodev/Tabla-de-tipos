$(function() {
	$("#tabla td").each(function()
		/*Buscar td dentro de tabla*/ {
			if ($(this).text() == '1.6'){
				$(this).addClass("superefectivo");
			}
			if ($(this).text() == '0.625'){
				$(this).addClass("pocoefectivo");
			}
			if ($(this).text() == '0.39'){
				$(this).addClass("muypocoefectivo");
			}
		})
});
