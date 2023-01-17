var questions=[
    {section:"Azerbaijan", level:"simple",question:"1) Neçə? Nə qədər? Neçənci? questionları hansı nitq hissəsinin questionlarıdır?",answer:"v1", variant1:"A) Sayın" ,variant2:"B) İsmin",variant3:"C) Sifətin",variant4:"D) Zərfin"},
    {section:"Azerbaijan", level:"simple",question:"2) Verilənlərdən biri əsas nitq hissələrinə aid deyil:",answer:"v4", variant1:"A) Isim" ,variant2:"B) Fel",variant3:"C) Sifət",variant4:"D) Ədat"},
    {section:"Azerbaijan", level:"simple",question:"3) Nitq hissələri haqqında verilmiş fikirlərdən hansı səhvdir?",answer:"v3", variant1:"A) Sözlər danışıqları qrammatik xüsusiyyətlərinə görə nitq hissələrini əmələ gətirir" ,variant2:"B) Nitq hissələrini dilçiliyin morfologiya şöbəsində öyrənirlər",variant3:"C) Bütün nitq hissələri questiona answer verir",variant4:"D) Nitq hissələri iki hissəyə bölünür"},
    {section:"Azerbaijan", level:"medium",question:"1) Söz birləşməsi və söz üçün mediumq əlaməti göstərin:",answer:"v3", variant1:"A) Hər ikisinin səslərdən əmələ gəlməsi" ,variant2:"B) Hər ikisi bitmiş fikir ifadə edir",variant3:"C) Hər ikisinin ad bildirməsi",variant4:"D) Hər ikisinin sözlərdən əmələ gəlməsi"},
    {section:"Azerbaijan", level:"medium",question:"2) Söz birləşməsi ilə sözün fərqli xüsusiyyəti kimi verilə bilməz:",answer:"v2", variant1:"A) Söz birləşməsi də sözlər kimi ad bildirir" ,variant2:"B) Söz birləşməsi səslərdən əmələ gəlir",variant3:"C) Söz birləşməsi sözlərdən əmələ gəlir",variant4:"D) Söz birləşməsi daxilində sözlərin mənası bir qədər konkretləşir"},
    {section:"Azerbaijan", level:"medium",question:"3) Aşağıdakılardan biri səhvdir:",answer:"v4", variant1:"A) Söz birləşməsi həm formasına, həm də mənasına görə sözdən fərqlənir" ,variant2:"B) Söz səslərdən, söz birləşməsi isə sözlərdən əmələ gəlir",variant3:"C) Sözlərlə söz birləşmələri arasında yaxınlıq var",variant4:"D) Həm söz, həm də söz birləşməsi konkret ad bildirir"},
    {section:"Azerbaijan", level:"Difficult",question:"1) Azərbaycan ədəbi dilinin hansı normasında dəyişmə gec olur?",answer:"v3", variant1:"A) Həm fonetik, həm leksik" ,variant2:"B) 	Leksik",variant3:"C) Fonetik",variant4:"D) Qrammatik"},
    {section:"Azerbaijan", level:"Difficult",question:"2) “ Yazın əvvəlində yola çıxan karvan Miyanəyə yaxınnaşanda aləmi gül – çiçək bürümüşdü ” cümləsində ədəbi dilin hansı norması pozulmuşdur?",answer:"v2", variant1:"A) Qrammatik" ,variant2:"B) Fonetik",variant3:"C) Həm fonetik, həm qrammatik",variant4:"D) Leksik"},
    {section:"Azerbaijan", level:"Difficult",question:"3) Sözün düzgün tələffüzü və düzgün yazılışı ədəbi dilin hansı normasına aiddir?",answer:"v2", variant1:"A) Qrammatik" ,variant2:"B) Fonetik",variant3:"C) Leksik",variant4:"D) Həm fonetik, həm leksik"},
    {section:"English", level:"simple",question:"1) Ann ... goodbye to me and left.",answer:"v1", variant1:"A) said" ,variant2:"B) tell",variant3:"C) told",variant4:"D) say"},
    {section:"English", level:"simple",question:"2) Don't ... anybody what I ... . It's a secret just between us.",answer:"v4", variant1:"A) told*say" ,variant2:"B) tell*say",variant3:"C) told*said",variant4:"D) tell*said"},
    {section:"English", level:"simple",question:"3) ... us about your holiday. Did you have a nice time?",answer:"v4", variant1:"A) told" ,variant2:"B) said",variant3:"C) say",variant4:"D) tell"},
    {section:"English", level:"medium",question:"1) She was determined to be ... author.",answer:"v1", variant1:"A) an" ,variant2:"B) -",variant3:"C) the",variant4:"D) a"},
    {section:"English", level:"medium",question:"2) The Director was ... the best parking-place.",answer:"v3", variant1:"A) catered" ,variant2:"B) left",variant3:"C) allocated",variant4:"D) donated"},
    {section:"English", level:"medium",question:"3) She recently became ... minister in the new government.",answer:"v2", variant1:"A) -" ,variant2:"B) a",variant3:"C) an",variant4:"D) the"},
    {section:"English", level:"Difficult",question:"1) I am looking for a solution to my problem. I don't need more questions about it from you. I need ......",answer:"v4", variant1:"A) descriptions" ,variant2:"B) notes",variant3:"C) papers",variant4:"D) answers"},
    {section:"English", level:"Difficult",question:"2) He wants me to ......... him to go the movies until 10:00 PM. I told him that I forbid him to be out that late until he is 13-years-old.",answer:"v1", variant1:"A) allow" ,variant2:"B) make",variant3:"C) face",variant4:"D) try"},
    {section:"English", level:"Difficult",question:"3) I'll never ......... another person, but I will defend myself if someone hits me.",answer:"v2", variant1:"A) create" ,variant2:"B) attack",variant3:"C) tug",variant4:"D) hug"},
    {section:"History", level:"simple",question:"1) In Rome they were called tenants:",answer:"v2", variant1:"A) Patrisi" ,variant2:"B) Kolon",variant3:"C) Çati",variant4:"D) Hilot"},
    {section:"History", level:"simple",question:"2) It does not belong to 'slaves in huts':",answer:"v3", variant1:"A) They were building a family" ,variant2:"B) They had working tools",variant3:"C) They were considered agile and combative",variant4:"D) They had little property"},
    {section:"History", level:"simple",question:"3) It does not belong to Emperor Constantine:",answer:"v2", variant1:"A) Patronage of Christianity" ,variant2:"B) The division of the empire into two parts",variant3:"C) The conversion of Christianity to the state religion",variant4:"D) Transfer of the capital"},
    {section:"History", level:"medium",question:"1) Amir Teymur in 1388:",answer:"v2", variant1:"A) He defeated the Ottoman troops" ,variant2:"B) He captured the city of Urganj",variant3:"C) He left the jurisdiction of the judge of Jagatay",variant4:"D) He laid the foundation of a new state"},
    {section:"History", level:"medium",question:"2) Timur in 1398:",answer:"v4", variant1:"A) The Red Army attacked" ,variant2:"B) He suppressed the rebellion of Sarbadaris",variant3:"C) He captured the city of Urganj",variant4:"D) He captured the city of Urganj"},
    {section:"History", level:"medium",question:"3) In the 70s of the XIV century, he won a victory in the struggle for power in Central Asia:",answer:"v3", variant1:"A) Togluq Teymur" ,variant2:"B) Amir Hussein",variant3:"C) Amir Teymur",variant4:"D) Amir Kazan"},
    {section:"History", level:"Difficult",question:"1) It refers to the reforms of Sultan Selim III:",answer:"v3", variant1:"A) Withholding tax on government employees" ,variant2:"B) Opening of higher education institutions",variant3:"C) Creation of a new army and navy on the European model",variant4:"D) Cancellation of private land ownership"},
    {section:"History", level:"Difficult",question:"2) What were the reforms of Sultan Selim III called?",answer:"v4", variant1:"A) 'Emir-Nizam'" ,variant2:"B) 'Gulxane'",variant3:"C) Tereqqi namine",variant4:"D) Nizami-cedid"},
    {section:"History", level:"Difficult",question:"3) How many parts does the Eastern issue consist of?",answer:"v2", variant1:"A) 4" ,variant2:"B) 2",variant3:"C) 1",variant4:"D) 3"}];
    const quiz=[];
    function counttest(){
        var a=0;
         questions.forEach(item =>{
             if(item.section=="Azerbaijan"){
             a=a+1;
         }
         })
         document.querySelector(".az").innerText=a+" Test";
         var b=0
         questions.forEach(item =>{
            if(item.section=="English"){
            b=b+1;
        }
        })
        document.querySelector(".en").innerText=b+" Test";
        var c=0;
        questions.forEach(item =>{
            if(item.section=="History"){
            c=c+1;
        }
        }) 
         document.querySelector(".hs").innerText=c+" Test";
         
     }
     counttest(); 
     var number=0;
     $(".azerbaijan").click(function(){
        number=1;
        $(".edu").css("display","none");
        $(".level").css("display","flex");
     });
     $(".english").click(function(){
        number=2;
        $(".edu").css("display","none");
        $(".level").css("display","flex");
     });
     $(".history").click(function(){
        number=3;
        $(".edu").css("display","none");
        $(".level").css("display","flex");
     });
        $(".beginner").on("click",function(){
            $(".level").css("display","none");
            $(".questions").css("display","block");
            if(number==1){
                 $.each(questions,function(key,val){
                if(val.section=="Azerbaijan" && val.level=="simple"){
                    quiz.push(val);
                }
            })
            }
            if(number==2){
                $.each(questions,function(key,val){
               if(val.section=="English" && val.level=="simple"){
                   quiz.push(val);
               }
           })
           }
           if(number==3){
            $.each(questions,function(key,val){
           if(val.section=="History" && val.level=="simple"){
               quiz.push(val);
           }
       })
       }
            test();
        })
        $(".medium").on("click",function(){
            $(".level").css("display","none");
            $(".questions").css("display","block");
            if(number==1){
                 $.each(questions,function(key,val){
                if(val.section=="Azerbaijan" && val.level=="medium"){
                    quiz.push(val);
                }
            })
            }
            if(number==2){
                $.each(questions,function(key,val){
               if(val.section=="English" && val.level=="medium"){
                quiz.push(val);
               }
           })
           }
           if(number==3){
            $.each(questions,function(key,val){
           if(val.section=="History" && val.level=="medium"){
               quiz.push(val);
           }
       })
       }
            test();
        })
        $(".hard").on("click",function(){
            $(".level").css("display","none");
            $(".questions").css("display","block");
            if(number==1){
                 $.each(questions,function(key,val){
                if(val.section=="Azerbaijan" && val.level=="Difficult"){
                    quiz.push(val);
                }
            })
            }
            if(number==2){
                $.each(questions,function(key,val){
               if(val.section=="English" && val.level=="Difficult"){
                   quiz.push(val);
               }
           })
           }
           if(number==3){
            $.each(questions,function(key,val){
           if(val.section=="History" && val.level=="Difficult"){
               quiz.push(val);
           }
       })
       }
            test();
        })
   function test(){
        var y=0;
        var score=0;
        var wrong_answer=0;
        $("#q").text(quiz[y].question);
        $("#v1").text(quiz[y].variant1);
        $("#v2").text(quiz[y].variant2);
        $("#v3").text(quiz[y].variant3);
        $("#v4").text(quiz[y].variant4);

        $("#next").click(function(){
            y+=1;
            $("#q").text(quiz[y].question);
            $("#v1").text(quiz[y].variant1);
            $("#v2").text(quiz[y].variant2);
            $("#v3").text(quiz[y].variant3);
            $("#v4").text(quiz[y].variant4);
            if(y==quiz.length-1){
                let temp=`<button class="finish" id="next">Finish</button>`;
                $("#next").remove();
                $(".buttons").append(temp);
                $(".finish").click(function(){
            $(".question").css("display","none");
            $(".variants").css("display","none");
            $(".netice").css("display","block");
            $("#dogru").text($("#dogru").text()+score);
            $("#sehv").text($("#sehv").text()+wrong_answer);
            $("#say").text($("#say").text()+quiz.length);
            $("#daxiledilmeyen").text($("#daxiledilmeyen").text()+(quiz.length-(score+wrong_answer)));
            $(".finish").remove();
            let temp=`<a href="index.html" class="home">Home page</a>`;
            $(".buttons").append(temp);
        })
            }
        })
        selection();
                   function selection(){
                    var a=$("#variants").find("p");
                    for(let i=0;i<a.length;i++){
                        $(a[i]).click(function(){
                                if($(a[i]).hasClass(quiz[y].answer)){
                                    score=score+1;
                                    $(a[i]).addClass("yasil");
                                }
                                else{
                                    $(a[i]).addClass("qirmizi");
                                    wrong_answer=wrong_answer+1;
                                }
                            for(let k=0;k<a.length;k++){
                                if($(a[k]).hasClass(quiz[y].answer)){
                                    $(a[k]).addClass("yasil");
                                }
                                next.addEventListener("click",function(){
                                    $(a[k]).removeClass("yasil");
                                })
                            }
                            for(let j=0;j<a.length;j++){
                                $(a[j]).addClass("danger");
                            
                            next.addEventListener("click",function(){
                                $(a[i]).removeClass("qirmizi");
                                $(a[i]).removeClass("yasil");
                                $(a[j]).removeClass("danger");
                            })}
                        })
                    }
                   }
   }

     