$(document).ready(function (){
    var data =[];
var source = Rx.Observable.defer(function(){
    return getDevices();
})
var subscription = source.subscribe(
        function(x){
            devices = JSON.parse(x);
            var sensores =[];
            var icon = "<img src=\"img/ok.png\" class=\"ok\">";
            $.each(devices,function(key,val){
                sensore = "<table>"+
                            "<tr><td>"+val.deviceName+"</td><td>"+icon+"</td></tr>"+
                          "</table>"
//                sensore = "<div class=\"sensore\">"+
//                            "<div class=\"title\">"+
//                                this.deviceName+""+
//                            "</div>"+
//                            "<div class=\"sensore-body\">"+
//                                "<div class=\"data\">"+
//
//                                "</div>"+
//                                "<div class=\"status\">"+
//                                    "Status: "+status+
//                                "</div>"+
//                            "</div>"+
//                        "</div>";
                sensores.push(sensore);
            });
           $(".device").html(sensores);
            
        },
        function(err){
            $(".device").html("Cannot get data" + err);

        });
    
function getDevices(){
  return $.post("PHP/espDevices.php",{menu: 0})
          .promise();  
}
})  
//    jQuery.devices()
//            .done(function(devices){

//    })
//            .fail(function(){
//                $(".device").html("Problem z ładowaniem danych");
//    })
//    
////            .done(function(data) {
////               
////                data = JSON.parse(data);
////                var tables =[];
////                $.each(data,function(key,val){
////                   status = parseInt(val.status);
////                   
////                   table = "<div class=\"sensore\">"+
////                                "<div class=\"title\">"+
////                                    "Czujnik: "+val.name+""+
////                                "</div>"+
////                                "<div class=\"sensore-body\">"+
////                                    "<div class=\"data\">"+
////                                        "Temperatura: 12 <sup>o</sup>C"+
////                                        "\nWilgotność: 50 %"+
////                                    "</div>"+
////                                    "<div class=\"status\">"+
////                                        "Status: "+status+
////                                    "</div>"+
////                                "</div>"+
////                            "</div>";
////                    tables.push(table);
////               });
////               $(".device").html(tables);
////                
////            })
////            .fail(function(){
////                $("#temperature").html("Problem z ładowaniem danych");
////            })
//})