$(document).ready(function(){

        
        $("#search").click(function(){
         if(!($("#query").val()=="")){
var apiUrl="https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&tagged=";

          var string=$("#query").val();
          apiUrl+=string;
          //alert(apiUrl);

          $.ajax({
            url:apiUrl
          }).done(function(data){
            console.log(data);
            var title=data.items[0].title;
            var qid=data.items[0].question_id;
            var answerUrl="https://api.stackexchange.com/2.2/questions/"+qid+"/answers?order=desc&sort=activity&site=stackoverflow";
//alert(answerUrl);
            $("#area1").html(title);
            
            $.ajax({
              url:answerUrl
            }).done(function(answer){

              var answer_id=answer.items[0].answer_id;
              console.log(answer_id);
              var commentUrl="https://api.stackexchange.com/2.2/answers/"+answer_id+"?order=desc&sort=activity&site=stackoverflow&filter=!9YdnSLx)y"
              //alert(commentUrl);

              $.ajax({
                url:commentUrl
              }).done(function(comment){

                var body=comment.items[0].body;
                $("#area2").html(body);
                //alert(body);

              });

            });

          })

         }


        })

        $("#clear").click(function(){

        $("textarea").empty();

      });

      });