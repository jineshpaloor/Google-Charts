
        google.load("jquery", "1");
	google.load('visualization', '1.0', {'packages':['corechart']});

        function drawPieChart(list) {
		graph_data = init(list);  
	        data = graph_data[0];
		options = graph_data[1];
		  // Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
		      chart.draw(data, options);
	}

	function drawBarChart(list) {
	 	graph_data = init(list);  
	        data = graph_data[0];
		options = graph_data[1];
		  // Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
		      chart.draw(data, options);
	}


	function init(list){
              	var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		var array = $.map(list, function(el) {
		  return [[el[0],el[1]]];
		});
		data.addRows(array);
		var options = {'title':'How Much Pizza I Ate Last Night',
				     'width':400,
				     'height':300};
		graph_data = [data, options];
		return graph_data;
	}

        function mycallbackPie(list){
		google.setOnLoadCallback(drawPieChart(list));
 
    	}

        function mycallbackBar(list){
		google.setOnLoadCallback(drawBarChart(list));
 
    	}

	$(document).ready(function(){
        $("#btn1").click(function(){
           $.get( "/graph",function(data){ 
		data1 = eval(data);
		mycallbackPie(data1);
			    
		});
           });

	$("#btn2").click(function(){
           $.get( "/graph",function(data){ 
		data1 = eval(data);
		mycallbackBar(data1);
			    
		});
           });

        });

