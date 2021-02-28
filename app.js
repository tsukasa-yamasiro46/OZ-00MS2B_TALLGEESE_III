if(window.innerWidth < 767){
    ret= confirm("スマホ対応画面です。");
        if(ret == false){
            window.open('about:blank','_self');
        }
}