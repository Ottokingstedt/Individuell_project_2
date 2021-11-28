// scripts: { "start"" "node-sass sass/main.scss css/main.css -w"
    "test" "echo \ "error: no test specified\" && exit 1" }

// git init
* skapade vi en .gotogpre fil :- 
    node_modules/ , CSS .gitingore, package-lock.json

    * Github re[p -> my project 

    * git add . 
    * git commit -m "-"
    * git push origin branch name or main

    include css, js, and html files:

    main.css -> headtaggen i html file with link:css element 

    main.js -> headtaggen i html files with < script src="./main.js" defer></ script>"

    * navigator.geolocation 

    navigator.geolocation.getCurrentPosition( (position) => {
        console.log(position.coords,latitude, position.coords, longitude);

        // console.log(error);
    })

    /* closure */

    function Add(num)
    {
        return(
            function(num2){
                console.log (num + num2);
            } )
    }
    const total = Add(10)

    total (20)