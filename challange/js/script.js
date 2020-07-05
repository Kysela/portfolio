	function change(){
        var images = [
                    "asd",
                    "lupa",
                    "shuckle"
                   ];
			for (var loop = 0; loop < 2; loop++) {
            var str = "test" + loop;
			var image = document.getElementById(str);
			image.src = "./images/" + images[loop] + ".png";
			}
		}